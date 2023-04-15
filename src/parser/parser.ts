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
  AssignmentContext,
  BooleanContext,
  CalcParser,
  DivisionContext,
  EqualComparatorContext,
  ExpressionContext,
  ExpressionStatementContext,
  FunctionCallContext,
  GreaterComparatorContext,
  GreaterEqualComparatorContext,
  IDContext,
  IdentifiersContext,
  IfThenElseConditionContext,
  LambdaApplicationContext,
  LambdaContext,
  LesserComparatorContext,
  LesserEqualComparatorContext,
  LetDeclarationContext,
  ListAppendContext,
  ListConsContext,
  ListContext,
  ListStructureContext,
  LocalDeclarationContext,
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
  TupleContext,
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
  public constructor(public location: es.SourceLocation, public message: string) {}

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
  public constructor(public location: es.SourceLocation) {}

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
  public constructor(public location: es.SourceLocation) {}

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

/**
 * Generates an estree expression from a CalcParser expression context
 * parse each statements to call this respective visitor
 * @param ctx Expression context
 * @param context Context of the expression
 *
 */
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

/**
 * Statement generator for each statements
 */
class StatementGenerator implements CalcVisitor<es.Statement> {
  visitExpressionStatement(ctx: ExpressionStatementContext): es.Statement {
    const generator: ExpressionStatementGenerator = new ExpressionStatementGenerator()
    return ctx.accept(generator)
  }

  /**
   * Parse if conditional statement
   * @param ctx
   * @returns IfStatement context used in interpreter
   */
  visitIfThenElseCondition(ctx: IfThenElseConditionContext): es.Statement {
    const generator: ExpressionGenerator = new ExpressionGenerator()
    return {
      type: 'IfStatement',
      test: ctx._test.accept(generator),
      consequent: this.visit(ctx._consequent),
      alternate: this.visit(ctx._alternate)
    }
  }

  /**
   * Parse while conditional statement
   * @param ctx
   * @returns WhileStatement context used in interpreter
   */
  visitWhileCondition(ctx: WhileConditionContext): es.Statement {
    const generator: ExpressionGenerator = new ExpressionGenerator()
    return {
      type: 'WhileStatement',
      test: ctx._test.accept(generator),
      body: this.visit(ctx._body)
    }
  }

  /**
   * Parse variable declaration by calling DeclarationGenerator
   * @param ctx
   * @returns
   */
  visitVariableDeclaration(ctx: VariableDeclarationContext): es.Statement {
    const generator: DeclarationGenerator = new DeclarationGenerator()
    return ctx.accept(generator)
  }

  /**
   * Parse let declaration by calling DeclarationGenerator
   * @param ctx
   * @returns
   */
  visitLetDeclaration(ctx: LetDeclarationContext): es.Statement {
    const generator: DeclarationGenerator = new DeclarationGenerator()
    return ctx.accept(generator)
  }

  /**
   * Parse local declaration by calling DeclarationGenerator
   * @param ctx
   * @returns
   */
  visitLocalDeclaration(ctx: LocalDeclarationContext): es.Statement {
    const generator: DeclarationGenerator = new DeclarationGenerator()
    return ctx.accept(generator)
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

/**
 * Generate declaration for variable, let and local
 */
class DeclarationGenerator implements CalcVisitor<es.Declaration> {
  /**
   * Parse Let declaration to be used in interpreter
   * checks for the type of variable declaration and add it to the list
   * @param ctx
   * @returns VariableDeclarator type with declaration list
   */
  visitLetDeclaration(ctx: LetDeclarationContext): es.VariableDeclaration {
    const stmtGenerator: StatementGenerator = new StatementGenerator()
    const varDeclarators: es.VariableDeclarator[] = []
    const del = ctx._del.accept(stmtGenerator)
    if (del.type === 'VariableDeclaration') {
      const newdel = del as es.VariableDeclaration
      varDeclarators.push(...newdel.declarations)
    }
    if (del.type === 'LocalDeclaration') {
      const newdel = del as es.LocalDeclaration
      varDeclarators.push(...newdel.declarations)
    }

    for (let i = 0; i < ctx._delist.childCount; i++) {
      const del = ctx._delist.getChild(i).accept(stmtGenerator)
      if (del.type === 'VariableDeclaration') {
        const newdel = del as es.VariableDeclaration
        varDeclarators.push(...newdel.declarations)
      }
      if (del.type === 'LocalDeclaration') {
        const newdel = del as es.LocalDeclaration
        varDeclarators.push(...newdel.declarations)
      }
    }

    return {
      type: 'VariableDeclaration',
      kind: 'let',
      declarations: varDeclarators
    }
  }

  /**
   * Parse local variable declaration to be used in interpreter
   * checks for the type of variable declaration and add it to the list
   * @param ctx
   * @returns
   */
  visitLocalDeclaration(ctx: LocalDeclarationContext): es.VariableDeclaration {
    const stmtGenerator: StatementGenerator = new StatementGenerator()
    const varDeclarators: es.VariableDeclarator[] = []

    for (let i = 0; i < ctx._del.childCount; i++) {
      const del = ctx._del.getChild(i).accept(stmtGenerator)
      if (del.type === 'VariableDeclaration') {
        const newdel = del as es.VariableDeclaration
        varDeclarators.push(...newdel.declarations)
      }
    }

    for (let i = 0; i < ctx._delist.childCount; i++) {
      const del = ctx._delist.getChild(i).accept(stmtGenerator)
      if (del.type === 'VariableDeclaration') {
        const newdel = del as es.VariableDeclaration
        varDeclarators.push(...newdel.declarations)
      }
    }

    return {
      type: 'VariableDeclaration',
      kind: 'let',
      declarations: varDeclarators
    }
  }

  /**
   * Parse variable declaration to be used in interpreter
   * @param ctx
   * @returns
   */
  visitVariableDeclaration(ctx: VariableDeclarationContext): es.VariableDeclaration {
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

class IdentifierGenerator implements CalcVisitor<es.Identifier> {
  /**
   * Parse identifier to be used in interpreter
   * @param ctx
   * @returns
   */
  visitID(ctx: IDContext): es.Identifier {
    return {
      type: 'Identifier',
      name: ctx.text
    }
  }

  visit(tree: ParseTree): es.Identifier {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): es.Identifier {
    return this.visit(node.getChild(0))
  }

  visitTerminal(node: TerminalNode): es.Identifier {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): es.Identifier {
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
  /**
   * Parse assignment to be used in interpreter
   * @param ctx
   * @returns AssignmentExpression type
   */
  visitAssignment(ctx: AssignmentContext): es.Expression {
    return {
      type: 'AssignmentExpression',
      operator: '=',
      left: {
        type: 'Identifier',
        name: ctx._left.text as string
      },
      right: this.visit(ctx._right)
    }
  }

  /**
   * Parse lambda function expression to be used in interpreter
   * @param ctx
   * @returns ArrownFunctionExpression type
   */
  visitLambda(ctx: LambdaContext): es.Expression {
    return {
      type: 'ArrowFunctionExpression',
      params: [
        {
          type: 'Identifier',
          name: ctx._name.text as string
        }
      ],
      expression: true,
      body: this.visit(ctx._right)
    }
  }

  /**
   * Parse lambda function application to be used in interpreter
   * @param ctx
   * @returns ArrownFunctionExpression type
   */
  visitLambdaApplication(ctx: LambdaApplicationContext): es.Expression {
    return {
      type: 'ArrowFunctionExpression',
      params: [
        {
          type: 'Identifier',
          name: ctx._name.text as string
        }
      ],
      expression: true,
      body: this.visit(ctx._right),
      arguments: this.visit(ctx._params)
    }
  }

  visitList?(ctx: ListContext): es.Expression {
    return ctx._left.accept(this)
  }

  /**
   * Parse list to be used in interpreter
   * Retrieve all elements in the list and return an array
   * @param ctx
   * @returns ArrayExpresson type
   */
  visitListStructure(ctx: ListStructureContext): es.Expression {
    const elements: es.Expression[] = []
    for (let i = 0; i < ctx._element.childCount; i++) {
      if (ctx._element.getChild(i).text != ',') {
        elements.push(this.visit(ctx._element.getChild(i)))
      }
    }
    return {
      type: 'ArrayExpression',
      elements: elements
    }
  }

  /**
   * Parse list append to be used in interpreter
   * @param ctx
   * @returns  AssignmentExpression type
   */
  visitListAppend(ctx: ListAppendContext): es.Expression {
    const left = this.visit(ctx._left)
    const right = this.visit(ctx._right)

    return {
      type: 'AssignmentExpression',
      operator: '@',
      left: left,
      right: right
    }
  }

  /**
   * Parse list cons to be used in interpreter
   * @param ctx
   * @returns AssignmentExpression type
   */
  visitListCons?(ctx: ListConsContext): es.Expression {
    const left = this.visit(ctx._left)
    const right = this.visit(ctx._right)
    return {
      type: 'AssignmentExpression',
      operator: '::',
      left: left,
      right: right
    }
  }

  visitIdentifiers(ctx: IdentifiersContext): es.Expression {
    return ctx.identifier().accept(this)
  }

  visitID(ctx: IDContext): es.Expression {
    const generator: IdentifierGenerator = new IdentifierGenerator()
    return ctx.accept(generator)
  }

  visitTuple(ctx: TupleContext): es.Expression {
    const elements: es.Expression[] = []
    for (let i = 0; i < ctx.expression().length; i++) {
      elements.push(this.visit(ctx.expression(i)))
    }
    return {
      type: 'ArrayExpression',
      elements: elements
    }
  }

  visitString(ctx: StringContext): es.Expression {
    return {
      type: 'Literal',
      value: ctx.text.replace(/"/g, ''),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitNumber(ctx: NumberContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitReal(ctx: RealContext): es.Expression {
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

  /**
   * Parse function call to be used in interpreter
   * get the aruguments and add it to an array
   * @param ctx
   * @returns CallExpression type
   */
  visitFunctionCall(ctx: FunctionCallContext): es.Expression {
    const callee: es.Identifier = {
      type: 'Identifier',
      name: ctx._name.text as string
    }

    const args: es.Expression[] = []
    args.push(this.visit(ctx._params))

    return {
      type: 'CallExpression',
      optional: false,
      callee,
      arguments: args
    }
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

/**
 *
 * @param start
 * accepts an array of statements as input
 * @returns ExpressionArrayGenerator
 */
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
    return undefined
  }
}
