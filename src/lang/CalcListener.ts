// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

import { NumberContext } from './CalcParser'
import { ParenthesesContext } from './CalcParser'
import { PowerContext } from './CalcParser'
import { MultiplicationContext } from './CalcParser'
import { DivisionContext } from './CalcParser'
import { ModulusContext } from './CalcParser'
import { AdditionContext } from './CalcParser'
import { SubtractionContext } from './CalcParser'
import { GreaterComparatorContext } from './CalcParser'
import { LesserComparatorContext } from './CalcParser'
import { GreaterEqualComparatorContext } from './CalcParser'
import { LesserEqualComparatorContext } from './CalcParser'
import { AndLogicalContext } from './CalcParser'
import { OrLogicalContext } from './CalcParser'
import { BooleanContext } from './CalcParser'
import { StringContext } from './CalcParser'
import { StartContext } from './CalcParser'
import { ExpressionContext } from './CalcParser'

/**
 * This interface defines a complete listener for a parse tree produced by
 * `CalcParser`.
 */
export interface CalcListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by the `Number`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterNumber?: (ctx: NumberContext) => void
  /**
   * Exit a parse tree produced by the `Number`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitNumber?: (ctx: NumberContext) => void

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
   * Enter a parse tree produced by the `Boolean`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterBoolean?: (ctx: BooleanContext) => void
  /**
   * Exit a parse tree produced by the `Boolean`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitBoolean?: (ctx: BooleanContext) => void

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
