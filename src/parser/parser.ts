/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'

import { CalcLexer } from '../lang/CalcLexer'
import {
  AdditionContext,
  AndLogicalContext,
  BooleanContext,
  CalcParser,
  DeclarationContext,
  DivisionContext,
  EqualComparatorContext,
  ExpressionContext,
  ExpressionStatementContext,
  FunctionContext,
  GreaterComparatorContext,
  GreaterEqualComparatorContext,
  IdentifiersContext,
  IfThenElseConditionContext,
  LesserComparatorContext,
  LesserEqualComparatorContext,
  LetDeclarationContext,
  LocalValAssignmentContext,
  ModulusContext,
  MultiplicationContext,
  NotLogicalContext,
  NumberContext,
  OrLogicalContext,
  ParenthesesContext,
  PowerContext,
  RealContext,
  StartContext,
  StatementContext,
  StringContext,
  SubtractionContext,
  ValDeclarationContext,
  VariableDeclarationContext,
  WhileConditionContext
} from '../lang/CalcParser'
import { CalcVisitor } from '../lang/CalcVisitor'
import { Context, ErrorSeverity, ErrorType, SourceError } from '../types'
import { literal } from '../utils/astCreator'
import { stripIndent } from '../utils/formatters'
import { binaryOp } from '../utils/operators'

export class DisallowedConstructError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public nodeType: string

  constructor(public node: es.Node) {
    this.nodeType = this.formatNodeType(this.node.type)
  }

  get location() {
    return this.node.loc!
  }

  public explain() {
    return `${this.nodeType} are not allowed`
  }

  public elaborate() {
    return stripIndent`
      You are trying to use ${this.nodeType}, which is not allowed (yet).
    `
  }

  /**
   * Converts estree node.type into english
   * e.g. ThisExpression -> 'this' expressions
   *      Property -> Properties
   *      EmptyStatement -> Empty Statements
   */
  private formatNodeType(nodeType: string) {
    switch (nodeType) {
      case 'ThisExpression':
        return "'this' expressions"
      case 'Property':
        return 'Properties'
      default: {
        const words = nodeType.split(/(?=[A-Z])/)
        return words.map((word, i) => (i === 0 ? word : word.toLowerCase())).join(' ') + 's'
      }
    }
  }
}

export class FatalSyntaxError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public constructor(public location: es.SourceLocation, public message: string) { }

  public explain() {
    return this.message
  }

  public elaborate() {
    return 'There is a syntax error in your program'
  }
}

export class MissingSemicolonError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public constructor(public location: es.SourceLocation) { }

  public explain() {
    return 'Missing semicolon at the end of statement'
  }

  public elaborate() {
    return 'Every statement must be terminated by a semicolon.'
  }
}

export class TrailingCommaError implements SourceError {
  public type: ErrorType.SYNTAX
  public severity: ErrorSeverity.WARNING
  public constructor(public location: es.SourceLocation) { }

  public explain() {
    return 'Trailing comma'
  }

  public elaborate() {
    return 'Please remove the trailing comma'
  }
}

function contextToLocation(ctx: ExpressionContext): es.SourceLocation {
  return {
    start: {
      line: ctx.start.line,
      column: ctx.start.charPositionInLine
    },
    end: {
      line: ctx.stop ? ctx.stop.line : ctx.start.line,
      column: ctx.stop ? ctx.stop.charPositionInLine : ctx.start.charPositionInLine
    }
  }
}

class ExpressionArrayGenerator implements CalcVisitor<es.Statement[]> {
  visitStart?: ((ctx: StartContext) => es.Statement[]) | undefined

  visit(tree: ParseTree): es.Statement[] {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): es.Statement[] {
    const stmtGenerator: StatementGenerator = new StatementGenerator()
    const statements: es.Statement[] = []
    for (let i = 0; i < node.childCount; i++) {
      statements.push(node.getChild(i).accept(stmtGenerator))
    }
    return statements
  }

  visitTerminal(node: TerminalNode): es.Statement[] {
    throw new Error('Method not implemented.')
  }

  visitErrorNode(node: ErrorNode): es.Statement[] {
    throw new FatalSyntaxError(
      {
        start: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine
        },
        end: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine + 1
        }
      },
      `invalid syntax ${node.text}`
    )
  }
}

class StatementGenerator implements CalcVisitor<es.Statement> {
  visitFunction(ctx: FunctionContext): es.Statement {
    const functionType = ctx._t

    const id: es.Identifier = {
      type: 'Identifier',
      name: ctx._id.text as string
    }

    const params: es.Pattern[] = []
    const paramList = ctx._params
    for (let i = 0; i < paramList.childCount; i++) {
      const param = paramList.getChild(i) as DeclarationContext
      const paramID: es.Identifier = {
        type: 'Identifier',
        name: param._id.text as string
      }
      params.push(paramID)
    }

    const body: es.BlockStatement = this.visit(ctx._body) as es.BlockStatement

    return {
      type: 'FunctionDeclaration',
      id,
      params,
      body
    }
  }

  visitExpressionStatement(ctx: ExpressionStatementContext): es.Statement {
    const generator: ExpressionStatementGenerator = new ExpressionStatementGenerator()
    return ctx.accept(generator)
  }

  visitIfThenElseCondition(ctx: IfThenElseConditionContext): es.Statement {
    const generator: ExpressionGenerator = new ExpressionGenerator()
    return {
      type: 'IfStatement',
      test: ctx._test.accept(generator),
      consequent: this.visit(ctx._consequent),
      alternate: this.visit(ctx._alternate)
    }
  }

  visitWhileCondition(ctx: WhileConditionContext): es.Statement {
    const generator: ExpressionGenerator = new ExpressionGenerator()
    return {
      type: 'WhileStatement',
      test: ctx._test.accept(generator),
      body: this.visit(ctx._body)
    }
  }

  visitValDeclaration(ctx: VariableDeclarationContext): es.Statement {
    // console.log('visitVariableDeclaration!!!!!!!!!!')
    const generator: DeclarationGenerator = new DeclarationGenerator()
    return ctx.accept(generator)
  }

  visitLetDeclaration(ctx: VariableDeclarationContext): es.Statement {
    const generator: DeclarationGenerator = new DeclarationGenerator()
    return ctx.accept(generator)
  }

  visitLocalValAssignment(ctx: LocalValAssignmentContext): es.LocalDeclaration {
    const generator: ExpressionGenerator = new ExpressionGenerator()
    return {
      type: 'LocalDeclaration',
      kind: 'local',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: ctx._left.text as string
          },
          init: ctx._right.accept(generator)
        }
      ]
    }
  }

  visitStatement?: ((ctx: StatementContext) => es.Statement) | undefined

  visit(tree: ParseTree): es.Statement {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): es.Statement {
    // First child is the statement
    return this.visit(node.getChild(0))
  }

  visitTerminal(node: TerminalNode): es.Statement {
    throw new Error('Method not implemented.')
  }

  visitErrorNode(node: ErrorNode): es.Statement {
    throw new FatalSyntaxError(
      {
        start: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine
        },
        end: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine + 1
        }
      },
      `invalid syntax ${node.text}`
    )
  }
}

class DeclarationGenerator implements CalcVisitor<es.Declaration> {
  visitLetDeclaration(ctx: LetDeclarationContext): es.VariableDeclaration {
    console.log('visitLetAssignment!!!!!!!!')
    const generator: ExpressionGenerator = new ExpressionGenerator()
    return {
      type: 'VariableDeclaration',
      kind: 'let',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: ctx._left.text as string
          },
          init: ctx._right.accept(generator)
        }
      ]
    }
  }

  visitValDeclaration(ctx: ValDeclarationContext): es.VariableDeclaration {
    const generator: ExpressionGenerator = new ExpressionGenerator()
    return {
      type: 'VariableDeclaration',
      kind: 'val',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: ctx._left.text as string
          },
          init: ctx._right.accept(generator)
        }
      ]
    }
  }

  visitDeclaration?: ((ctx: VariableDeclarationContext) => es.Declaration) | undefined

  visit(tree: ParseTree): es.Declaration {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): es.Declaration {
    return this.visit(node.getChild(0))
  }

  visitTerminal(node: TerminalNode): es.Declaration {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): es.Declaration {
    throw new FatalSyntaxError(
      {
        start: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine
        },
        end: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine + 1
        }
      },
      `invalid syntax ${node.text}`
    )
  }
}

// class LocalValGenerator implements CalcVisitor<es.LocalDeclaration> {

//   visitLocalValAssignment(ctx: LocalValAssignmentContext) : es.LocalDeclaration{
//     const generator: ExpressionGenerator = new ExpressionGenerator()
//     return{
//       type: 'LocalDeclaration',
//       kind: 'local',
//       declarations: [
//         {
//           type: 'VariableDeclarator',
//           id: {
//             type: 'Identifier',
//             name: ctx._left.text as string
//           },
//           init: ctx._right.accept(generator)
//         }]
//       }
//   }

//   visit(tree: ParseTree): es.LocalDeclaration {
//     return tree.accept(this)
//   }

//   visitChildren(node: RuleNode): es.LocalDeclaration {
//     throw new Error('Method not implemented.')
//   }

//   visitTerminal(node: TerminalNode): es.LocalDeclaration {
//     return node.accept(this)
//   }

//   visitErrorNode(node: ErrorNode): es.LocalDeclaration {
//     throw new FatalSyntaxError(
//       {
//         start: {
//           line: node.symbol.line,
//           column: node.symbol.charPositionInLine
//         },
//         end: {
//           line: node.symbol.line,
//           column: node.symbol.charPositionInLine + 1
//         }
//       },
//       `invalid syntax ${node.text}`
//     )
//   }
// }

class ExpressionStatementGenerator implements CalcVisitor<es.ExpressionStatement> {
  visitExpressioStatement?:
    | ((ctx: ExpressionStatementContext) => es.ExpressionStatement)
    | undefined

  visit(tree: ParseTree): es.ExpressionStatement {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): es.ExpressionStatement {
    const generator: ExpressionGenerator = new ExpressionGenerator()
    // First child is an expression
    const expression: es.Expression = node.getChild(0).accept(generator)
    return {
      type: 'ExpressionStatement',
      expression
    }
  }

  visitTerminal(node: TerminalNode): es.ExpressionStatement {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): es.ExpressionStatement {
    throw new FatalSyntaxError(
      {
        start: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine
        },
        end: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine + 1
        }
      },
      `invalid syntax ${node.text}`
    )
  }
}

class ExpressionGenerator implements CalcVisitor<es.Expression> {
  // visitValAssignment(ctx: ValAssignmentContext): es.Expression {
  //   return {
  //     type: 'AssignmentExpression',
  //     operator: '=',
  //     left: {
  //       type: 'Identifier',
  //       name: ctx._left.text as string
  //     },
  //     right: this.visit(ctx._right)
  //   }
  // }
  // visitLetAssignment(ctx: LetAssignmentContext): es.Expression {
  //   return {
  //     type: 'AssignmentExpression',
  //     operator: '=',
  //     left: {
  //       type: 'Identifier',
  //       name: ctx._left.text as string
  //     },
  //     right: this.visit(ctx._right)
  //   }
  // }

  // visitLocalValAssignment(ctx: LocalValAssignmentContext): es.Expression {
  //   return {
  //     type: 'AssignmentExpression',
  //     operator: '=',
  //     left: {
  //       type: 'Identifier',
  //       name: ctx._left.text as string
  //     },
  //     right: this.visit(ctx._right)
  //   }
  // }

  visitIdentifiers(ctx: IdentifiersContext): es.Expression {
    const generator: ExpressionGenerator = new ExpressionGenerator()
    return ctx.identifier().accept(generator)
  }

  visitString(ctx: StringContext): es.Expression {
    console.log('string: ', ctx.text)
    return {
      type: 'Literal',
      value: ctx.text,
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitNumber(ctx: NumberContext): es.Expression {
    console.log('number: ', ctx.text)

    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitReal(ctx: RealContext): es.Expression {
    console.log('real: ', ctx.text)

    return {
      type: 'Literal',
      value: parseFloat(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitBoolean(ctx: BooleanContext): es.Expression {
    let val
    if (ctx.text === 'true') {
      val = true
    } else {
      val = false
    }

    return {
      type: 'Literal',
      value: val,
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitParentheses(ctx: ParenthesesContext): es.Expression {
    return this.visit(ctx.expression())
  }
  visitPower(ctx: PowerContext): es.Expression {
    return {
      type: 'BinaryExpression',
      operator: '^',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx)
    }
  }

  visitMultiplication(ctx: MultiplicationContext): es.Expression {
    return {
      type: 'BinaryExpression',
      operator: '*',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx)
    }
  }
  visitDivision(ctx: DivisionContext): es.Expression {
    return {
      type: 'BinaryExpression',
      operator: '/',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx)
    }
  }

  visitModulus(ctx: ModulusContext): es.Expression {
    return {
      type: 'BinaryExpression',
      operator: '%',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx)
    }
  }

  visitAddition(ctx: AdditionContext): es.Expression {
    console.log('LEFT: ', this.visit(ctx._left))
    console.log('RIGHT: ', this.visit(ctx._right))
    return {
      type: 'BinaryExpression',
      operator: '+',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx)
    }
  }

  visitSubtraction(ctx: SubtractionContext): es.Expression {
    return {
      type: 'BinaryExpression',
      operator: '-',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx)
    }
  }

  visitEqualComparator(ctx: EqualComparatorContext): es.Expression {
    return {
      type: 'BinaryExpression',
      operator: '=',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx)
    }
  }

  visitGreaterComparator(ctx: GreaterComparatorContext): es.Expression {
    return {
      type: 'BinaryExpression',
      operator: '>',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx)
    }
  }

  visitLesserComparator(ctx: LesserComparatorContext): es.Expression {
    return {
      type: 'BinaryExpression',
      operator: '<',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx)
    }
  }

  visitGreaterEqualComparator(ctx: GreaterEqualComparatorContext): es.Expression {
    return {
      type: 'BinaryExpression',
      operator: '>=',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx)
    }
  }

  visitLesserEqualComparator(ctx: LesserEqualComparatorContext): es.Expression {
    return {
      type: 'BinaryExpression',
      operator: '<=',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx)
    }
  }

  visitAndLogical(ctx: AndLogicalContext): es.Expression {
    return {
      type: 'LogicalExpression',
      operator: '&&' || 'and' || 'andalso',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx)
    }
  }

  visitOrLogical(ctx: OrLogicalContext): es.Expression {
    return {
      type: 'LogicalExpression',
      operator: '||' || 'or' || 'orelse',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
      loc: contextToLocation(ctx)
    }
  }

  visitNotLogical(ctx: NotLogicalContext): es.Expression {
    return {
      type: 'UnaryExpression',
      operator: '!' || 'not',
      argument: this.visit(ctx._left),
      prefix: true,
      loc: contextToLocation(ctx)
    }
  }

  visitExpression?: ((ctx: ExpressionContext) => es.Expression) | undefined
  visitStart?: ((ctx: StartContext) => es.Expression) | undefined

  visit(tree: ParseTree): es.Expression {
    return tree.accept(this)
  }
  visitChildren(node: RuleNode): es.Expression {
    const expressions: es.Expression[] = []
    for (let i = 0; i < node.childCount; i++) {
      expressions.push(node.getChild(i).accept(this))
    }
    return {
      type: 'SequenceExpression',
      expressions
    }
  }
  visitTerminal(node: TerminalNode): es.Expression {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): es.Expression {
    throw new FatalSyntaxError(
      {
        start: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine
        },
        end: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine + 1
        }
      },
      `invalid syntax ${node.text}`
    )
  }
}

function convertStatementExpression(start: StartContext): Array<es.Statement> {
  const generator = new ExpressionArrayGenerator()
  return start.accept(generator)
}

function convertSource(start: StartContext): es.Program {
  return {
    type: 'Program',
    sourceType: 'script',
    body: convertStatementExpression(start)
  }
}

export function parse(source: string, context: Context) {
  let program: es.Program | undefined

  if (context.variant === 'calc') {
    const inputStream = CharStreams.fromString(source)
    const lexer = new CalcLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new CalcParser(tokenStream)
    parser.buildParseTree = true
    try {
      const tree = parser.start()
      program = convertSource(tree)
    } catch (error) {
      if (error instanceof FatalSyntaxError) {
        context.errors.push(error)
      } else {
        throw error
      }
    }
    const hasErrors = context.errors.find(m => m.severity === ErrorSeverity.ERROR)
    if (program && !hasErrors) {
      return program
    } else {
      return undefined
    }
  } else {
    console.log('first else')
    return undefined
  }
}
