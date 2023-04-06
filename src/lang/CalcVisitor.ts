// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StringContext } from "./CalcParser";
import { NumberContext } from "./CalcParser";
import { RealContext } from "./CalcParser";
import { BooleanContext } from "./CalcParser";
import { IdentifiersContext } from "./CalcParser";
import { ParenthesesContext } from "./CalcParser";
import { PowerContext } from "./CalcParser";
import { MultiplicationContext } from "./CalcParser";
import { DivisionContext } from "./CalcParser";
import { AdditionContext } from "./CalcParser";
import { SubtractionContext } from "./CalcParser";
import { ModulusContext } from "./CalcParser";
import { EqualComparatorContext } from "./CalcParser";
import { GreaterComparatorContext } from "./CalcParser";
import { LesserComparatorContext } from "./CalcParser";
import { GreaterEqualComparatorContext } from "./CalcParser";
import { LesserEqualComparatorContext } from "./CalcParser";
import { AndLogicalContext } from "./CalcParser";
import { OrLogicalContext } from "./CalcParser";
import { NotLogicalContext } from "./CalcParser";
import { WhileConditionContext } from "./CalcParser";
import { IfThenElseConditionContext } from "./CalcParser";
import { AssignmentoperatorContext } from "./CalcParser";
import { EmptydeclarationContext } from "./CalcParser";
import { StartContext } from "./CalcParser";
import { StatementContext } from "./CalcParser";
import { IfThenElseStatementContext } from "./CalcParser";
import { WhileStatementContext } from "./CalcParser";
import { TypeContext } from "./CalcParser";
import { DeclarationContext } from "./CalcParser";
import { VariableDeclarationContext } from "./CalcParser";
import { LocalValDeclarationContext } from "./CalcParser";
import { LetDeclarationContext } from "./CalcParser";
import { DeclarationTypeContext } from "./CalcParser";
import { DeclarationlistContext } from "./CalcParser";
import { BlockContext } from "./CalcParser";
import { PrintContext } from "./CalcParser";
import { ParametersContext } from "./CalcParser";
import { FunctionContext } from "./CalcParser";
import { IdentifierContext } from "./CalcParser";
import { ExpressionStatementContext } from "./CalcParser";
import { ExpressionContext } from "./CalcParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CalcParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CalcVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `String`
	 * labeled alternative in `CalcParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by the `Number`
	 * labeled alternative in `CalcParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by the `Real`
	 * labeled alternative in `CalcParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReal?: (ctx: RealContext) => Result;

	/**
	 * Visit a parse tree produced by the `Boolean`
	 * labeled alternative in `CalcParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean?: (ctx: BooleanContext) => Result;

	/**
	 * Visit a parse tree produced by the `Identifiers`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifiers?: (ctx: IdentifiersContext) => Result;

	/**
	 * Visit a parse tree produced by the `Parentheses`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentheses?: (ctx: ParenthesesContext) => Result;

	/**
	 * Visit a parse tree produced by the `Power`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPower?: (ctx: PowerContext) => Result;

	/**
	 * Visit a parse tree produced by the `Multiplication`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplication?: (ctx: MultiplicationContext) => Result;

	/**
	 * Visit a parse tree produced by the `Division`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivision?: (ctx: DivisionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Addition`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddition?: (ctx: AdditionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Subtraction`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtraction?: (ctx: SubtractionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Modulus`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModulus?: (ctx: ModulusContext) => Result;

	/**
	 * Visit a parse tree produced by the `EqualComparator`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualComparator?: (ctx: EqualComparatorContext) => Result;

	/**
	 * Visit a parse tree produced by the `GreaterComparator`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreaterComparator?: (ctx: GreaterComparatorContext) => Result;

	/**
	 * Visit a parse tree produced by the `LesserComparator`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLesserComparator?: (ctx: LesserComparatorContext) => Result;

	/**
	 * Visit a parse tree produced by the `GreaterEqualComparator`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreaterEqualComparator?: (ctx: GreaterEqualComparatorContext) => Result;

	/**
	 * Visit a parse tree produced by the `LesserEqualComparator`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLesserEqualComparator?: (ctx: LesserEqualComparatorContext) => Result;

	/**
	 * Visit a parse tree produced by the `AndLogical`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndLogical?: (ctx: AndLogicalContext) => Result;

	/**
	 * Visit a parse tree produced by the `OrLogical`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrLogical?: (ctx: OrLogicalContext) => Result;

	/**
	 * Visit a parse tree produced by the `NotLogical`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotLogical?: (ctx: NotLogicalContext) => Result;

	/**
	 * Visit a parse tree produced by the `WhileCondition`
	 * labeled alternative in `CalcParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileCondition?: (ctx: WhileConditionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IfThenElseCondition`
	 * labeled alternative in `CalcParser.ifThenElseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfThenElseCondition?: (ctx: IfThenElseConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.assignmentoperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentoperator?: (ctx: AssignmentoperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.emptydeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptydeclaration?: (ctx: EmptydeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.ifThenElseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfThenElseStatement?: (ctx: IfThenElseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.localValDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalValDeclaration?: (ctx: LocalValDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.letDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetDeclaration?: (ctx: LetDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.declarationType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationType?: (ctx: DeclarationTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.declarationlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationlist?: (ctx: DeclarationlistContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.print`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrint?: (ctx: PrintContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
}

