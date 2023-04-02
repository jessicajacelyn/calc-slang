/* tslint:disable:max-classes-per-file */
import * as es from 'estree'

import createContext, { createGlobalEnvironment } from '../createContext'
import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { Context, Environment, Value } from '../types'
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

  ArrayExpression: function* (node: es.ArrayExpression, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },


  FunctionExpression: function* (node: es.FunctionExpression, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  ArrowFunctionExpression: function* (node: es.ArrowFunctionExpression, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  Identifier: function* (node: es.Identifier, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  CallExpression: function* (node: es.CallExpression, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  NewExpression: function* (node: es.NewExpression, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  UnaryExpression: function* (node: es.UnaryExpression, context: Context) {
    let value = yield* actualValue(node.argument, context)
    const frame = context.runtime.environments[0].head

    if (!(typeof value === 'boolean')) {
      // console.log('left str: ', left)
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

  BinaryExpression: function* (node: es.BinaryExpression, context: Context) {
    let left = yield* actualValue(node.left, context)
    let right = yield* actualValue(node.right, context)
    const frame = context.runtime.environments[0].head

    if (isNaN(Number(left))) {
      // console.log('left str: ', left)
      if (frame[left] !== undefined && !isNaN(Number(frame[left]))) {
        left = frame[left]
      } else {
        throw new Error(`left is not a number: ${left}`)
      }
    }

    if (isNaN(Number(right))) {
      // console.log('right str: ', right)
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
    console.log('IF statement evaluating')
    return yield* this.IfStatement(node, context)
  },

  LogicalExpression: function* (node: es.LogicalExpression, context: Context) {
    let left = yield* actualValue(node.left, context)
    let right = yield* actualValue(node.right, context)
    const frame = context.runtime.environments[0].head

    if (!(typeof left === 'boolean')) {
      // console.log('left str: ', left)
      if (frame[left] !== undefined && (typeof frame[left] === 'boolean')) {
        left = frame[left]
      } else {
        throw new Error(`left is not a boolean: ${left}`)
      }
    }

    if (!(typeof right === 'boolean')) {
      // console.log('right str: ', right)
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

  VariableDeclaration: function* (node: es.VariableDeclaration, context: Context) {
    console.log('Variable declaration evaluating')
    throw new Error(`not supported yet: ${node.type}`)
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

  AssignmentExpression: function* (node: es.AssignmentExpression, context: Context) {
    console.log('assignment expr')

    const right = yield* actualValue(node.right, context)
    if (node.left.type === 'Identifier') {
      const value = yield* evaluate(node.right, context)

      // TODO: this is for declarations, not assignments
      // context.runtime.environments[0].head[node.left.name] = value

      if (context.runtime.environments[0].head[node.left.name] === undefined) {
        throw new Error(`variable ${node.left.name} is not defined`)
      } else {
        context.runtime.environments[0].head[node.left.name] = value
      }
      console.log('assign environment: ', context)
      return value
    } else if (node.left.type === 'MemberExpression') {
      console.log('its a member expression')
      const object = yield* actualValue(node.left.object, context)
      const property = yield* actualValue(node.left.property, context)
      if (object.type === 'object') {
        object.value[property.value] = right
        return right
      } else {
        throw new Error(`not supported yet: ${node.type}`)
      }
    } else {
      throw new Error(`not supported yet: ${node.type}`)
    }
  },

  FunctionDeclaration: function* (node: es.FunctionDeclaration, context: Context) {
    throw new Error(`not supported yet: ${node.type}`)
  },

  IfStatement: function* (node: es.IfStatement | es.ConditionalExpression, context: Context) {
    //throw new Error(`not supported yet: ${node.type}`)
    const test = yield* actualValue(node.test, context)

    if (test === null) {
      console.log('test is null')
      return undefined
    }

    if (test === false) {
      console.log('test is false')
      return yield* actualValue(node.alternate, context)
    } else {
      console.log('test is true')
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
    if (context.runtime.environments.length === 0) {
      console.log('pushing env ', context)
    }
    console.log('env ', context)

    // TODO: remove this when var declarations are implemented
    context.runtime.environments[0].head['temp'] = true
    context.runtime.environments[0].head['test'] = false

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
