/* tslint:disable:max-classes-per-file */
import * as es from 'estree'
import { isBoolean } from 'lodash'

import createContext, { createGlobalEnvironment } from '../createContext'
import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { Context, Environment, Value } from '../types'
import { binaryExpression } from '../utils/astCreator'
import {
  evaluateBinaryExpression,
  evaluateLogicalExpression,
  evaluateUnaryExpression
} from '../utils/operators'
import * as rttc from '../utils/rttc'
class Thunk {
  public value: Value
  public isMemoized: boolean
  constructor(public exp: es.Node, public env: Environment) {
    this.isMemoized = false
    this.value = null
  }
}

function* forceIt(val: any, context: Context): Value {
  if (val instanceof Thunk) {
    if (val.isMemoized) return val.value

    pushEnvironment(context, val.env)
    const evalRes = yield* actualValue(val.exp, context)
    popEnvironment(context)
    val.value = evalRes
    val.isMemoized = true
    return evalRes
  } else return val
}

export function* actualValue(exp: es.Node, context: Context): Value {
  const evalResult = yield* evaluate(exp, context)
  const forced = yield* forceIt(evalResult, context)
  return forced
}

const handleRuntimeError = (context: Context, error: RuntimeSourceError): never => {
  context.errors.push(error)
  context.runtime.environments = context.runtime.environments.slice(
    -context.numberOfOuterEnvironments
  )
  throw error
}

function* visit(context: Context, node: es.Node) {
  context.runtime.nodes.unshift(node)
  yield context
}

function* leave(context: Context) {
  context.runtime.break = false
  context.runtime.nodes.shift()
  yield context
}

const currentEnvironment = (context: Context) => context.runtime.environments[0]
const popEnvironment = (context: Context) => context.runtime.environments.shift()
export const pushEnvironment = (context: Context, environment: Environment) => {
  context.runtime.environments.unshift(environment)
  context.runtime.environmentTree.insert(environment)
}

export type Evaluator<T extends es.Node> = (node: T, context: Context) => IterableIterator<Value>

function* evaluateBlockSatement(context: Context, node: es.BlockStatement) {
  let result
  for (const statement of node.body) {
    result = yield* evaluate(statement, context)
  }
  return result
}

/**
 * WARNING: Do not use object literal shorthands, e.g.
 *   {
 *     *Literal(node: es.Literal, ...) {...},
 *     *ThisExpression(node: es.ThisExpression, ..._ {...},
 *     ...
 *   }
 * They do not minify well, raising uncaught syntax errors in production.
 * See: https://github.com/webpack/webpack/issues/7566
 */
// tslint:disable:object-literal-shorthand
// prettier-ignore
export const evaluators: { [nodeType: string]: Evaluator<es.Node> } = {
  /** Simple Values */
  Literal: function* (node: es.Literal, _context: Context) {
    return node.value
  },

  TemplateLiteral: function* (node: es.TemplateLiteral) {
    // Expressions like `${1}` are not allowed, so no processing needed
    return node.quasis[0].value.cooked
  },

  ThisExpression: function* (node: es.ThisExpression, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  /**
   * Interpreter for list
   * @param node 
   * @param context 
   * @returns element of list
   */
  ArrayExpression: function* (node: es.ArrayExpression, context: Context) {
    const arr = []
    for (const element of node.elements) {
      if (element === null) continue
      const value = yield* actualValue(element, context)
      arr.push(value)
    }
    return arr
  },


  FunctionExpression: function* (node: es.FunctionExpression, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  /**
   * Interpreter for lambda function
   * @param node 
   * @param context 
   * @returns result of lambda function if arguments exists else return node
   */
  ArrowFunctionExpression: function* (node: es.ArrowFunctionExpression, context: Context) {
    // check if argument exists
    if (node.arguments !== undefined) {
      const arg = yield* evaluate(node.arguments, context)
      const currEnv = context.runtime.environments[0].head
      if (node.params[0].type === 'Identifier') {
        currEnv[node.params[0].name] = arg // store argument in environment
        return yield* evaluate(node.body, context)
      }
    } else {
      return node
    }
  },

  Identifier: function* (node: es.Identifier, context: Context) {
    const name = node.name
    const frame = context.runtime.environments[0].head[name];
    return frame;

  },

  /**
   * Interpreter for function call
   * @param node 
   * @param context 
   * @returns result of function call
   */
  CallExpression: function* (node: es.CallExpression, context: Context) {
    const currEnv = context.runtime.environments[0].head
    if (node.callee.type === 'Identifier') {
      // check if function is in environment
      if (currEnv[node.callee.name] !== undefined) {
        const func = currEnv[node.callee.name] // get function from environment
        const arg = yield* evaluate(node.arguments[0], context)
        currEnv[func.params[0].name] = arg // store argument in environment
        return yield* evaluate(func.body, context)
      }
    } else {
      throw new Error(`function not found`)
    }
  },

  NewExpression: function* (node: es.NewExpression, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  /**
   * Interpreter for unary expression
   * @param node
   * @param context
   * @returns result of unary expression
   */
  UnaryExpression: function* (node: es.UnaryExpression, context: Context) {
    let value = yield* actualValue(node.argument, context)
    const frame = context.runtime.environments[0].head

    // Check if value is a boolean
    if (!(typeof value === 'boolean')) {
      if (frame[value] !== undefined && (typeof frame[value] === 'boolean')) {
        value = frame[value]
      } else {
        throw new Error(`left is not a boolean: ${value}`)
      }
    }

    const error = rttc.checkUnaryExpression(node, node.operator, value)
    if (error) {
      return handleRuntimeError(context, error)
    }
    return evaluateUnaryExpression(node.operator, value)
  },

  /**
   * Interpreter for binary expression
   * @param node 
   * @param context 
   * @returns result of binary expression
   */
  BinaryExpression: function* (node: es.BinaryExpression, context: Context) {
    let left = yield* actualValue(node.left, context)
    let right = yield* actualValue(node.right, context)
    const frame = context.runtime.environments[0].head

    // Check if left and right are numbers
    if (isNaN(Number(left))) {
      if (frame[left] !== undefined && !isNaN(Number(frame[left]))) {
        left = frame[left]
      } else {
        throw new Error(`left is not a number: ${left}`)
      }
    }

    if (isNaN(Number(right))) {
      if (frame[right] !== undefined && !isNaN(Number(frame[right]))) {
        right = frame[right]
      } else {
        throw new Error(`right is not a number: ${right}`)
      }
    }

    const error = rttc.checkBinaryExpression(node, node.operator, left, right)
    if (error) {
      return handleRuntimeError(context, error)
    }
    return evaluateBinaryExpression(node.operator, left, right)
  },

  ConditionalExpression: function* (node: es.ConditionalExpression, context: Context) {
    return yield* this.IfStatement(node, context)
  },

  /**
   * Interpreter for logical expression
   * @param node
   * @param context
   * @returns result of logical expression
  */
  LogicalExpression: function* (node: es.LogicalExpression, context: Context) {
    let left = yield* actualValue(node.left, context)
    let right = yield* actualValue(node.right, context)
    const frame = context.runtime.environments[0].head

    // Check if left and right are booleans
    if (!(typeof left === 'boolean')) {
      if (frame[left] !== undefined && (typeof frame[left] === 'boolean')) {
        left = frame[left]
      } else {
        throw new Error(`left is not a boolean: ${left}`)
      }
    }

    if (!(typeof right === 'boolean')) {
      if (frame[right] !== undefined && (typeof frame[right] === 'boolean')) {
        right = frame[right]
      } else {
        throw new Error(`right is not a boolean: ${right}`)
      }
    }

    const error = rttc.checkLogicalExpression(node, node.operator, left, right)
    if (error) {
      return handleRuntimeError(context, error)
    }
    return evaluateLogicalExpression(node.operator, left, right)
  },

  /**
   * Interpreter for variable declaration
   * @param node 
   * @param context 
   * @returns success message
   */
  VariableDeclaration: function* (node: es.VariableDeclaration, context: Context) {
    let name

    for (const dec of node.declarations) {
      if (dec.id.type !== 'Identifier') {
        throw new Error(`not supported yet: ${node.declarations[0].id.type}`)
      } else {
        name = dec.id.name
      }

      if (dec.init === null || dec.init === undefined) {
        throw new Error(`not supported yet: ${node.declarations[0].id.type}`)
      }

      const value = yield* evaluate(dec.init, context)
      context.runtime.environments[0].head[name] = value

    }
    console.log('after var declaration: ', context.runtime.environments)
    return 'Successfully declared variable'
  },

  /**
   * Interpreter for local declaration
   * @param node 
   * @param context 
   * @returns success message
   */
  LocalDeclaration: function* (node: es.LocalDeclaration, context: Context) {
    let name

    if (node.declarations[0].id.type !== 'Identifier') {
      throw new Error(`not supported yet: ${node.declarations[0].id.type}`)
    } else {
      name = node.declarations[0].id.name
    }

    if (node.declarations[0].init === null || node.declarations[0].init === undefined) {
      throw new Error(`not supported yet: ${node.declarations[0].id.type}`)
    }

    const value = yield* evaluate(node.declarations[0].init, context)
    context.runtime.environments[0].head[name] = value

    console.log('after var declaration: ', context.runtime.environments)
    return 'Successfully declared variable'
  },

  ContinueStatement: function* (_node: es.ContinueStatement, _context: Context) {
    throw new Error(`not supported yet: ${_node.type}`)
  },

  BreakStatement: function* (_node: es.BreakStatement, _context: Context) {
    throw new Error(`not supported yet: ${_node.type}`)
  },

  ForStatement: function* (node: es.ForStatement, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  /**
   * Interpreter for assignment expression
   * @param node 
   * @param context 
   * @returns 
   */
  AssignmentExpression: function* (node: es.AssignmentExpression, context: Context) {

    if (node.operator === '=' && node.left.type === 'Identifier') {
      const value = yield* actualValue(node.right, context)
      const currEnv = context.runtime.environments[0].head
      if (currEnv[node.left.name] === undefined) {
        throw new Error(`variable ${node.left.name} is not defined`)
      } else {
        let typeEnv = typeof currEnv[node.left.name]
        let typeVal = typeof value
        if (typeEnv === 'object') {
          const temp = currEnv[node.left.name].flat()
          typeEnv = typeof temp[0]
        }
        if (typeVal === 'object') {
          const temp = value.flat()
          typeVal = typeof temp[0]
        }
        if (typeEnv === typeVal) {
          currEnv[node.left.name] = value
        } else {
          throw new Error(`type mismatch: ${typeEnv} and ${typeVal}`)
        }
      }
      console.log('assign environment: ', context.runtime.environments)
      return value
    } else if (node.operator === '::') { // for list consing
      if (node.left.type === 'ArrayExpression' && node.right.type === 'ArrayExpression') {
        const left = yield* actualValue(node.left, context)
        const right = yield* actualValue(node.right, context)
        const leftType = typeof left[0]
        const rightType = typeof right[0]
        const arr = []

        if (leftType !== rightType) {
          throw new Error(`type mismatch: ${leftType} and ${rightType}`)
        }
        for (const element of left) {
          if (typeof element !== leftType) {
            throw new Error(`type mismatch: ${leftType} and ${element.type}`)
          }
        }
        for (const element of right) {
          if (typeof element !== rightType) {
            throw new Error(`type mismatch: ${rightType} and ${element.type}`)
          }
        }
        arr.push(left)
        arr.push(right)
        return arr
      } else if (node.left.type === 'ArrayExpression') {
        const left = yield* actualValue(node.left, context)
        const right = yield* actualValue(node.right, context)
        const currEnv = context.runtime.environments[0].head
        const leftType = typeof left[0]
        let rightType = typeof right[0]

        const arr = []
        if (node.right.type === 'Identifier') {
          if (currEnv[node.right.name] === undefined) {
            if (rightType !== leftType) {
              throw new Error(`type mismatch: ${leftType} and ${rightType}`)
            } else {
              arr.push(left)
              arr.push(right)
              return arr
            }
          } else {
            if (rightType !== leftType) {
              throw new Error(`type mismatch: ${leftType} and ${rightType}`)
            } else {
              arr.push(left)
              arr.push(right)
              return arr
            }
          }
        } else {
          rightType = typeof right
          if (rightType !== leftType) {
            throw new Error(`type mismatch: ${leftType} and ${rightType}`)
          } else {
            arr.push(left)
            arr.push(right)
            return arr
          }
        }
      } else if (node.right.type === 'ArrayExpression') {
        const left = yield* actualValue(node.left, context)
        const right = yield* actualValue(node.right, context)
        const currEnv = context.runtime.environments[0].head
        let leftType = typeof left[0]
        const rightType = typeof right[0]
        const arr = []
        if (node.left.type === "Identifier") {
          if (currEnv[node.left.name] === undefined) {
            throw new Error(`${left} is not defined`)
          } else {
            if (rightType !== leftType) {
              throw new Error(`type mismatch: ${leftType} and ${rightType}`)
            } else {
              arr.push(left)
              arr.push(right)
              return arr
            }
          }
        }
        else {
          leftType = typeof left
          if (rightType !== leftType) {
            throw new Error(`type mismatch: ${leftType} and ${rightType}`)
          } else {
            arr.push(left)
            arr.push(right)
            return arr
          }
        }
      } else {
        const arr = []
        const left = yield* actualValue(node.left, context)
        const right = yield* actualValue(node.right, context)
        let leftType = typeof left
        let rightType = typeof right

        if (leftType === 'object') {
          const temp = left.flat()
          leftType = typeof temp[0]
        }
        if (rightType === 'object') {
          const temp = right.flat()
          rightType = typeof temp[0]
        }

        if (leftType !== rightType) {
          throw new Error(`type mismatch: ${leftType} and ${rightType}`)
        } else {
          arr.push(left)
          arr.push(right)
        }
        return arr
      }
    } else if (node.operator === '@') { // for list appending
      if (node.left.type === 'ArrayExpression' && node.right.type === 'ArrayExpression') {
        const left = yield* actualValue(node.left, context)
        const right = yield* actualValue(node.right, context)
        const leftType = typeof left[0]
        const rightType = typeof right[0]
        const arr = []

        if (leftType !== rightType) {
          throw new Error(`type mismatch: ${leftType} and ${rightType}`)
        }
        for (const element of left) {
          if (typeof element !== leftType) {
            throw new Error(`type mismatch: ${leftType} and ${element.type}`)
          }
          arr.push(element)
        }
        for (const element of right) {
          if (typeof element !== rightType) {
            throw new Error(`type mismatch: ${rightType} and ${element.type}`)
          }
          arr.push(element)
        }
        return arr
      } else if (node.left.type === 'ArrayExpression') {
        const left = yield* actualValue(node.left, context)
        const right = yield* actualValue(node.right, context)
        const currEnv = context.runtime.environments[0].head
        const leftType = typeof left[0]
        const arr = []
        if (node.right.type === 'Identifier') {
          const rightType = typeof right[0]
          if (currEnv[node.right.name] === undefined) {
            throw new Error(`${right} is not defined`)
          } else {
            if (rightType !== leftType) {
              throw new Error(`type mismatch: ${leftType} and ${rightType}`)
            } else {
              for (const element of left) {
                arr.push(element)
              }
              for (const element of right) {
                arr.push(element)
              }
              return arr
            }
          }
        }
      } else if (node.right.type === "ArrayExpression") {
        const left = yield* actualValue(node.left, context)
        const right = yield* actualValue(node.right, context)
        const currEnv = context.runtime.environments[0].head
        const rightType = typeof right[0]
        const arr = []

        const leftType = typeof left[0]

        if (node.left.type === "Identifier") {
          if (currEnv[node.left.name] === undefined) {
            throw new Error(`${left} is not defined`)
          } else {
            if (rightType !== leftType) {
              throw new Error(`type mismatch: ${leftType} and ${rightType}`)
            } else {
              for (const element of left) {
                arr.push(element)
              }
              for (const element of right) {
                arr.push(element)
              }
              return arr
            }
          }
        }
      }
    }
    else {
      throw new Error(`not supported yet: ${node.type}`)
    }
  },

  FunctionDeclaration: function* (node: es.FunctionDeclaration, context: Context) {
    //throw new Error(`not supported yet: ${node.type}`)
  },

  /**
   * Interpreter for if statement
   * @param node 
   * @param context 
   * @returns result of the if statement
   */
  IfStatement: function* (node: es.IfStatement | es.ConditionalExpression, context: Context) {
    //throw new Error(`not supported yet: ${node.type}`)
    const test = yield* actualValue(node.test, context)

    if (test === null) {
      return undefined
    }

    if (test === false) {
      return yield* actualValue(node.alternate, context)
    } else {
      return yield* actualValue(node.consequent, context)
    }
  },

  ExpressionStatement: function* (node: es.ExpressionStatement, context: Context) {
    return yield* evaluate(node.expression, context)
  },

  ReturnStatement: function* (node: es.ReturnStatement, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  WhileStatement: function* (node: es.WhileStatement, context: Context) {
    let result
    while ((yield* actualValue(node.test, context)) !== 0) {
      result = yield* evaluate(node.body, context)
    }
    return result
  },


  BlockStatement: function* (node: es.BlockStatement, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  Program: function* (node: es.BlockStatement, context: Context) {
    const env = createGlobalEnvironment()

    pushEnvironment(context, env)

    const result = yield* forceIt(yield* evaluateBlockSatement(context, node), context);
    return result;
  }
}
// tslint:enable:object-literal-shorthand

export function* evaluate(node: es.Node, context: Context) {
  const result = yield* evaluators[node.type](node, context)
  yield* leave(context)
  return result
}
