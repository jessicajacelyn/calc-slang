// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'

import { IDContext } from './CalcParser'
import { NumberContext } from './CalcParser'
import { RealContext } from './CalcParser'
import { BooleanContext } from './CalcParser'
import { IdentifiersContext } from './CalcParser'
import { StringContext } from './CalcParser'
import { ParenthesesContext } from './CalcParser'
import { TupleContext } from './CalcParser'
import { FunctionCallContext } from './CalcParser'
import { PowerContext } from './CalcParser'
import { MultiplicationContext } from './CalcParser'
import { DivisionContext } from './CalcParser'
import { AdditionContext } from './CalcParser'
import { SubtractionContext } from './CalcParser'
import { ModulusContext } from './CalcParser'
import { EqualComparatorContext } from './CalcParser'
import { GreaterComparatorContext } from './CalcParser'
import { LesserComparatorContext } from './CalcParser'
import { GreaterEqualComparatorContext } from './CalcParser'
import { LesserEqualComparatorContext } from './CalcParser'
import { AndLogicalContext } from './CalcParser'
import { OrLogicalContext } from './CalcParser'
import { NotLogicalContext } from './CalcParser'
import { ListContext } from './CalcParser'
import { ListAppendContext } from './CalcParser'
import { ListConsContext } from './CalcParser'
import { AssignmentContext } from './CalcParser'
import { LambdaContext } from './CalcParser'
import { LambdaApplicationContext } from './CalcParser'
import { WhileConditionContext } from './CalcParser'
import { IfThenElseConditionContext } from './CalcParser'
import { EmptydeclarationContext } from './CalcParser'
import { StartContext } from './CalcParser'
import { StatementContext } from './CalcParser'
import { IfThenElseStatementContext } from './CalcParser'
import { WhileStatementContext } from './CalcParser'
import { VariableDeclarationContext } from './CalcParser'
import { LocalDeclarationContext } from './CalcParser'
import { LetDeclarationContext } from './CalcParser'
import { DeclarationTypeContext } from './CalcParser'
import { DeclarationlistContext } from './CalcParser'
import { IdentifierContext } from './CalcParser'
import { ElementsContext } from './CalcParser'
import { ListStructureContext } from './CalcParser'
import { ListInputContext } from './CalcParser'
import { ExpressionStatementContext } from './CalcParser'
import { ExpressionContext } from './CalcParser'

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CalcParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CalcVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by the `ID`
   * labeled alternative in `CalcParser.identifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitID?: (ctx: IDContext) => Result

  /**
   * Visit a parse tree produced by the `Number`
   * labeled alternative in `CalcParser.identifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNumber?: (ctx: NumberContext) => Result

  /**
   * Visit a parse tree produced by the `Real`
   * labeled alternative in `CalcParser.identifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitReal?: (ctx: RealContext) => Result

  /**
   * Visit a parse tree produced by the `Boolean`
   * labeled alternative in `CalcParser.identifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBoolean?: (ctx: BooleanContext) => Result

  /**
   * Visit a parse tree produced by the `Identifiers`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdentifiers?: (ctx: IdentifiersContext) => Result

  /**
   * Visit a parse tree produced by the `String`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitString?: (ctx: StringContext) => Result

  /**
   * Visit a parse tree produced by the `Parentheses`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParentheses?: (ctx: ParenthesesContext) => Result

  /**
   * Visit a parse tree produced by the `Tuple`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTuple?: (ctx: TupleContext) => Result

  /**
   * Visit a parse tree produced by the `FunctionCall`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunctionCall?: (ctx: FunctionCallContext) => Result

  /**
   * Visit a parse tree produced by the `Power`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPower?: (ctx: PowerContext) => Result

  /**
   * Visit a parse tree produced by the `Multiplication`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMultiplication?: (ctx: MultiplicationContext) => Result

  /**
   * Visit a parse tree produced by the `Division`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDivision?: (ctx: DivisionContext) => Result

  /**
   * Visit a parse tree produced by the `Addition`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAddition?: (ctx: AdditionContext) => Result

  /**
   * Visit a parse tree produced by the `Subtraction`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSubtraction?: (ctx: SubtractionContext) => Result

  /**
   * Visit a parse tree produced by the `Modulus`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitModulus?: (ctx: ModulusContext) => Result

  /**
   * Visit a parse tree produced by the `EqualComparator`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEqualComparator?: (ctx: EqualComparatorContext) => Result

  /**
   * Visit a parse tree produced by the `GreaterComparator`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGreaterComparator?: (ctx: GreaterComparatorContext) => Result

  /**
   * Visit a parse tree produced by the `LesserComparator`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLesserComparator?: (ctx: LesserComparatorContext) => Result

  /**
   * Visit a parse tree produced by the `GreaterEqualComparator`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGreaterEqualComparator?: (ctx: GreaterEqualComparatorContext) => Result

  /**
   * Visit a parse tree produced by the `LesserEqualComparator`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLesserEqualComparator?: (ctx: LesserEqualComparatorContext) => Result

  /**
   * Visit a parse tree produced by the `AndLogical`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAndLogical?: (ctx: AndLogicalContext) => Result

  /**
   * Visit a parse tree produced by the `OrLogical`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOrLogical?: (ctx: OrLogicalContext) => Result

  /**
   * Visit a parse tree produced by the `NotLogical`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNotLogical?: (ctx: NotLogicalContext) => Result

  /**
   * Visit a parse tree produced by the `List`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitList?: (ctx: ListContext) => Result

  /**
   * Visit a parse tree produced by the `ListAppend`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitListAppend?: (ctx: ListAppendContext) => Result

  /**
   * Visit a parse tree produced by the `ListCons`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitListCons?: (ctx: ListConsContext) => Result

  /**
   * Visit a parse tree produced by the `Assignment`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignment?: (ctx: AssignmentContext) => Result

  /**
   * Visit a parse tree produced by the `Lambda`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLambda?: (ctx: LambdaContext) => Result

  /**
   * Visit a parse tree produced by the `LambdaApplication`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLambdaApplication?: (ctx: LambdaApplicationContext) => Result

  /**
   * Visit a parse tree produced by the `WhileCondition`
   * labeled alternative in `CalcParser.whileStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWhileCondition?: (ctx: WhileConditionContext) => Result

  /**
   * Visit a parse tree produced by the `IfThenElseCondition`
   * labeled alternative in `CalcParser.ifThenElseStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIfThenElseCondition?: (ctx: IfThenElseConditionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.emptydeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEmptydeclaration?: (ctx: EmptydeclarationContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.start`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStart?: (ctx: StartContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatement?: (ctx: StatementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.ifThenElseStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIfThenElseStatement?: (ctx: IfThenElseStatementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.whileStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWhileStatement?: (ctx: WhileStatementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.variableDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.localDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLocalDeclaration?: (ctx: LocalDeclarationContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.letDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLetDeclaration?: (ctx: LetDeclarationContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.declarationType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclarationType?: (ctx: DeclarationTypeContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.declarationlist`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclarationlist?: (ctx: DeclarationlistContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.identifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdentifier?: (ctx: IdentifierContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.elements`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitElements?: (ctx: ElementsContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.listStructure`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitListStructure?: (ctx: ListStructureContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.listInput`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitListInput?: (ctx: ListInputContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.expressionStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression?: (ctx: ExpressionContext) => Result
}
