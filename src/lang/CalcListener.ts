// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

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
 * This interface defines a complete listener for a parse tree produced by
 * `CalcParser`.
 */
export interface CalcListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by the `ID`
   * labeled alternative in `CalcParser.identifier`.
   * @param ctx the parse tree
   */
  enterID?: (ctx: IDContext) => void
  /**
   * Exit a parse tree produced by the `ID`
   * labeled alternative in `CalcParser.identifier`.
   * @param ctx the parse tree
   */
  exitID?: (ctx: IDContext) => void

  /**
   * Enter a parse tree produced by the `Number`
   * labeled alternative in `CalcParser.identifier`.
   * @param ctx the parse tree
   */
  enterNumber?: (ctx: NumberContext) => void
  /**
   * Exit a parse tree produced by the `Number`
   * labeled alternative in `CalcParser.identifier`.
   * @param ctx the parse tree
   */
  exitNumber?: (ctx: NumberContext) => void

  /**
   * Enter a parse tree produced by the `Real`
   * labeled alternative in `CalcParser.identifier`.
   * @param ctx the parse tree
   */
  enterReal?: (ctx: RealContext) => void
  /**
   * Exit a parse tree produced by the `Real`
   * labeled alternative in `CalcParser.identifier`.
   * @param ctx the parse tree
   */
  exitReal?: (ctx: RealContext) => void

  /**
   * Enter a parse tree produced by the `Boolean`
   * labeled alternative in `CalcParser.identifier`.
   * @param ctx the parse tree
   */
  enterBoolean?: (ctx: BooleanContext) => void
  /**
   * Exit a parse tree produced by the `Boolean`
   * labeled alternative in `CalcParser.identifier`.
   * @param ctx the parse tree
   */
  exitBoolean?: (ctx: BooleanContext) => void

  /**
   * Enter a parse tree produced by the `Identifiers`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterIdentifiers?: (ctx: IdentifiersContext) => void
  /**
   * Exit a parse tree produced by the `Identifiers`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitIdentifiers?: (ctx: IdentifiersContext) => void

  /**
   * Enter a parse tree produced by the `String`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterString?: (ctx: StringContext) => void
  /**
   * Exit a parse tree produced by the `String`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitString?: (ctx: StringContext) => void

  /**
   * Enter a parse tree produced by the `Parentheses`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterParentheses?: (ctx: ParenthesesContext) => void
  /**
   * Exit a parse tree produced by the `Parentheses`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitParentheses?: (ctx: ParenthesesContext) => void

  /**
   * Enter a parse tree produced by the `Tuple`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterTuple?: (ctx: TupleContext) => void
  /**
   * Exit a parse tree produced by the `Tuple`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitTuple?: (ctx: TupleContext) => void

  /**
   * Enter a parse tree produced by the `FunctionCall`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterFunctionCall?: (ctx: FunctionCallContext) => void
  /**
   * Exit a parse tree produced by the `FunctionCall`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitFunctionCall?: (ctx: FunctionCallContext) => void

  /**
   * Enter a parse tree produced by the `Power`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterPower?: (ctx: PowerContext) => void
  /**
   * Exit a parse tree produced by the `Power`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitPower?: (ctx: PowerContext) => void

  /**
   * Enter a parse tree produced by the `Multiplication`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterMultiplication?: (ctx: MultiplicationContext) => void
  /**
   * Exit a parse tree produced by the `Multiplication`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitMultiplication?: (ctx: MultiplicationContext) => void

  /**
   * Enter a parse tree produced by the `Division`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterDivision?: (ctx: DivisionContext) => void
  /**
   * Exit a parse tree produced by the `Division`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitDivision?: (ctx: DivisionContext) => void

  /**
   * Enter a parse tree produced by the `Addition`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterAddition?: (ctx: AdditionContext) => void
  /**
   * Exit a parse tree produced by the `Addition`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitAddition?: (ctx: AdditionContext) => void

  /**
   * Enter a parse tree produced by the `Subtraction`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterSubtraction?: (ctx: SubtractionContext) => void
  /**
   * Exit a parse tree produced by the `Subtraction`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitSubtraction?: (ctx: SubtractionContext) => void

  /**
   * Enter a parse tree produced by the `Modulus`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterModulus?: (ctx: ModulusContext) => void
  /**
   * Exit a parse tree produced by the `Modulus`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitModulus?: (ctx: ModulusContext) => void

  /**
   * Enter a parse tree produced by the `EqualComparator`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterEqualComparator?: (ctx: EqualComparatorContext) => void
  /**
   * Exit a parse tree produced by the `EqualComparator`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitEqualComparator?: (ctx: EqualComparatorContext) => void

  /**
   * Enter a parse tree produced by the `GreaterComparator`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterGreaterComparator?: (ctx: GreaterComparatorContext) => void
  /**
   * Exit a parse tree produced by the `GreaterComparator`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitGreaterComparator?: (ctx: GreaterComparatorContext) => void

  /**
   * Enter a parse tree produced by the `LesserComparator`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterLesserComparator?: (ctx: LesserComparatorContext) => void
  /**
   * Exit a parse tree produced by the `LesserComparator`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitLesserComparator?: (ctx: LesserComparatorContext) => void

  /**
   * Enter a parse tree produced by the `GreaterEqualComparator`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterGreaterEqualComparator?: (ctx: GreaterEqualComparatorContext) => void
  /**
   * Exit a parse tree produced by the `GreaterEqualComparator`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitGreaterEqualComparator?: (ctx: GreaterEqualComparatorContext) => void

  /**
   * Enter a parse tree produced by the `LesserEqualComparator`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterLesserEqualComparator?: (ctx: LesserEqualComparatorContext) => void
  /**
   * Exit a parse tree produced by the `LesserEqualComparator`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitLesserEqualComparator?: (ctx: LesserEqualComparatorContext) => void

  /**
   * Enter a parse tree produced by the `AndLogical`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterAndLogical?: (ctx: AndLogicalContext) => void
  /**
   * Exit a parse tree produced by the `AndLogical`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitAndLogical?: (ctx: AndLogicalContext) => void

  /**
   * Enter a parse tree produced by the `OrLogical`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterOrLogical?: (ctx: OrLogicalContext) => void
  /**
   * Exit a parse tree produced by the `OrLogical`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitOrLogical?: (ctx: OrLogicalContext) => void

  /**
   * Enter a parse tree produced by the `NotLogical`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterNotLogical?: (ctx: NotLogicalContext) => void
  /**
   * Exit a parse tree produced by the `NotLogical`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitNotLogical?: (ctx: NotLogicalContext) => void

  /**
   * Enter a parse tree produced by the `List`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterList?: (ctx: ListContext) => void
  /**
   * Exit a parse tree produced by the `List`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitList?: (ctx: ListContext) => void

  /**
   * Enter a parse tree produced by the `ListAppend`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterListAppend?: (ctx: ListAppendContext) => void
  /**
   * Exit a parse tree produced by the `ListAppend`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitListAppend?: (ctx: ListAppendContext) => void

  /**
   * Enter a parse tree produced by the `ListCons`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterListCons?: (ctx: ListConsContext) => void
  /**
   * Exit a parse tree produced by the `ListCons`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitListCons?: (ctx: ListConsContext) => void

  /**
   * Enter a parse tree produced by the `Assignment`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterAssignment?: (ctx: AssignmentContext) => void
  /**
   * Exit a parse tree produced by the `Assignment`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitAssignment?: (ctx: AssignmentContext) => void

  /**
   * Enter a parse tree produced by the `Lambda`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterLambda?: (ctx: LambdaContext) => void
  /**
   * Exit a parse tree produced by the `Lambda`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitLambda?: (ctx: LambdaContext) => void

  /**
   * Enter a parse tree produced by the `LambdaApplication`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterLambdaApplication?: (ctx: LambdaApplicationContext) => void
  /**
   * Exit a parse tree produced by the `LambdaApplication`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitLambdaApplication?: (ctx: LambdaApplicationContext) => void

  /**
   * Enter a parse tree produced by the `WhileCondition`
   * labeled alternative in `CalcParser.whileStatement`.
   * @param ctx the parse tree
   */
  enterWhileCondition?: (ctx: WhileConditionContext) => void
  /**
   * Exit a parse tree produced by the `WhileCondition`
   * labeled alternative in `CalcParser.whileStatement`.
   * @param ctx the parse tree
   */
  exitWhileCondition?: (ctx: WhileConditionContext) => void

  /**
   * Enter a parse tree produced by the `IfThenElseCondition`
   * labeled alternative in `CalcParser.ifThenElseStatement`.
   * @param ctx the parse tree
   */
  enterIfThenElseCondition?: (ctx: IfThenElseConditionContext) => void
  /**
   * Exit a parse tree produced by the `IfThenElseCondition`
   * labeled alternative in `CalcParser.ifThenElseStatement`.
   * @param ctx the parse tree
   */
  exitIfThenElseCondition?: (ctx: IfThenElseConditionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.emptydeclaration`.
   * @param ctx the parse tree
   */
  enterEmptydeclaration?: (ctx: EmptydeclarationContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.emptydeclaration`.
   * @param ctx the parse tree
   */
  exitEmptydeclaration?: (ctx: EmptydeclarationContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.start`.
   * @param ctx the parse tree
   */
  enterStart?: (ctx: StartContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.start`.
   * @param ctx the parse tree
   */
  exitStart?: (ctx: StartContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.statement`.
   * @param ctx the parse tree
   */
  enterStatement?: (ctx: StatementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.statement`.
   * @param ctx the parse tree
   */
  exitStatement?: (ctx: StatementContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.ifThenElseStatement`.
   * @param ctx the parse tree
   */
  enterIfThenElseStatement?: (ctx: IfThenElseStatementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.ifThenElseStatement`.
   * @param ctx the parse tree
   */
  exitIfThenElseStatement?: (ctx: IfThenElseStatementContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.whileStatement`.
   * @param ctx the parse tree
   */
  enterWhileStatement?: (ctx: WhileStatementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.whileStatement`.
   * @param ctx the parse tree
   */
  exitWhileStatement?: (ctx: WhileStatementContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.variableDeclaration`.
   * @param ctx the parse tree
   */
  enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.variableDeclaration`.
   * @param ctx the parse tree
   */
  exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.localDeclaration`.
   * @param ctx the parse tree
   */
  enterLocalDeclaration?: (ctx: LocalDeclarationContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.localDeclaration`.
   * @param ctx the parse tree
   */
  exitLocalDeclaration?: (ctx: LocalDeclarationContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.letDeclaration`.
   * @param ctx the parse tree
   */
  enterLetDeclaration?: (ctx: LetDeclarationContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.letDeclaration`.
   * @param ctx the parse tree
   */
  exitLetDeclaration?: (ctx: LetDeclarationContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.declarationType`.
   * @param ctx the parse tree
   */
  enterDeclarationType?: (ctx: DeclarationTypeContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.declarationType`.
   * @param ctx the parse tree
   */
  exitDeclarationType?: (ctx: DeclarationTypeContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.declarationlist`.
   * @param ctx the parse tree
   */
  enterDeclarationlist?: (ctx: DeclarationlistContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.declarationlist`.
   * @param ctx the parse tree
   */
  exitDeclarationlist?: (ctx: DeclarationlistContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.identifier`.
   * @param ctx the parse tree
   */
  enterIdentifier?: (ctx: IdentifierContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.identifier`.
   * @param ctx the parse tree
   */
  exitIdentifier?: (ctx: IdentifierContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.elements`.
   * @param ctx the parse tree
   */
  enterElements?: (ctx: ElementsContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.elements`.
   * @param ctx the parse tree
   */
  exitElements?: (ctx: ElementsContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.listStructure`.
   * @param ctx the parse tree
   */
  enterListStructure?: (ctx: ListStructureContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.listStructure`.
   * @param ctx the parse tree
   */
  exitListStructure?: (ctx: ListStructureContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.listInput`.
   * @param ctx the parse tree
   */
  enterListInput?: (ctx: ListInputContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.listInput`.
   * @param ctx the parse tree
   */
  exitListInput?: (ctx: ListInputContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.expressionStatement`.
   * @param ctx the parse tree
   */
  enterExpressionStatement?: (ctx: ExpressionStatementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.expressionStatement`.
   * @param ctx the parse tree
   */
  exitExpressionStatement?: (ctx: ExpressionStatementContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterExpression?: (ctx: ExpressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitExpression?: (ctx: ExpressionContext) => void
}
