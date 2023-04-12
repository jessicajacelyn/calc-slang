// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CalcListener } from "./CalcListener";
import { CalcVisitor } from "./CalcVisitor";


export class CalcParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly POW = 3;
	public static readonly MUL = 4;
	public static readonly DIV = 5;
	public static readonly MOD = 6;
	public static readonly ADD = 7;
	public static readonly SUB = 8;
	public static readonly EQUAL = 9;
	public static readonly ARROW = 10;
	public static readonly AND = 11;
	public static readonly OR = 12;
	public static readonly NOT = 13;
	public static readonly BOOLEAN = 14;
	public static readonly GT = 15;
	public static readonly LT = 16;
	public static readonly GE = 17;
	public static readonly LE = 18;
	public static readonly NUMBER = 19;
	public static readonly REAL = 20;
	public static readonly WHITESPACE = 21;
	public static readonly LETTER = 22;
	public static readonly LET = 23;
	public static readonly IN = 24;
	public static readonly END = 25;
	public static readonly VAL = 26;
	public static readonly LOCAL = 27;
	public static readonly FUN = 28;
	public static readonly FN = 29;
	public static readonly OPAR = 30;
	public static readonly CPAR = 31;
	public static readonly OBRACE = 32;
	public static readonly CBRACE = 33;
	public static readonly OSQUARE = 34;
	public static readonly CSQUARE = 35;
	public static readonly DOUBLEQUOTE = 36;
	public static readonly ASSIGNMENT = 37;
	public static readonly APPEND = 38;
	public static readonly CONS = 39;
	public static readonly IF = 40;
	public static readonly THEN = 41;
	public static readonly ELSE = 42;
	public static readonly WHILE = 43;
	public static readonly DO = 44;
	public static readonly CHAR = 45;
	public static readonly STRING = 46;
	public static readonly INT = 47;
	public static readonly BOOL = 48;
	public static readonly REALNUM = 49;
	public static readonly Stringliteral = 50;
	public static readonly RULE_emptydeclaration = 0;
	public static readonly RULE_start = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_ifThenElseStatement = 3;
	public static readonly RULE_whileStatement = 4;
	public static readonly RULE_variableDeclaration = 5;
	public static readonly RULE_localDeclaration = 6;
	public static readonly RULE_letDeclaration = 7;
	public static readonly RULE_declarationType = 8;
	public static readonly RULE_declarationlist = 9;
	public static readonly RULE_identifier = 10;
	public static readonly RULE_elements = 11;
	public static readonly RULE_listStructure = 12;
	public static readonly RULE_listInput = 13;
	public static readonly RULE_expressionStatement = 14;
	public static readonly RULE_expression = 15;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"emptydeclaration", "start", "statement", "ifThenElseStatement", "whileStatement", 
		"variableDeclaration", "localDeclaration", "letDeclaration", "declarationType", 
		"declarationlist", "identifier", "elements", "listStructure", "listInput", 
		"expressionStatement", "expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "','", "'^'", "'*'", "'/'", "'%'", "'+'", "'-'", "'='", 
		"'=>'", undefined, undefined, "'not'", undefined, "'>'", "'<'", "'>='", 
		"'<='", undefined, undefined, undefined, undefined, "'let'", "'in'", "'end'", 
		"'val'", "'local'", "'fun'", "'fn'", "'('", "')'", "'{'", "'}'", "'['", 
		"']'", "'\"'", "':='", "'@'", "'::'", "'if'", "'then'", "'else'", "'while'", 
		"'do'", "'char'", "'string'", "'int'", "'bool'", "'real'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "POW", "MUL", "DIV", "MOD", "ADD", "SUB", 
		"EQUAL", "ARROW", "AND", "OR", "NOT", "BOOLEAN", "GT", "LT", "GE", "LE", 
		"NUMBER", "REAL", "WHITESPACE", "LETTER", "LET", "IN", "END", "VAL", "LOCAL", 
		"FUN", "FN", "OPAR", "CPAR", "OBRACE", "CBRACE", "OSQUARE", "CSQUARE", 
		"DOUBLEQUOTE", "ASSIGNMENT", "APPEND", "CONS", "IF", "THEN", "ELSE", "WHILE", 
		"DO", "CHAR", "STRING", "INT", "BOOL", "REALNUM", "Stringliteral",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CalcParser._LITERAL_NAMES, CalcParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CalcParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Calc.g4"; }

	// @Override
	public get ruleNames(): string[] { return CalcParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CalcParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CalcParser._ATN, this);
	}
	// @RuleVersion(0)
	public emptydeclaration(): EmptydeclarationContext {
		let _localctx: EmptydeclarationContext = new EmptydeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CalcParser.RULE_emptydeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this.match(CalcParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CalcParser.RULE_start);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.NOT) | (1 << CalcParser.BOOLEAN) | (1 << CalcParser.NUMBER) | (1 << CalcParser.REAL) | (1 << CalcParser.LET) | (1 << CalcParser.VAL) | (1 << CalcParser.LOCAL) | (1 << CalcParser.FN) | (1 << CalcParser.OPAR))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CalcParser.OSQUARE - 34)) | (1 << (CalcParser.DOUBLEQUOTE - 34)) | (1 << (CalcParser.IF - 34)) | (1 << (CalcParser.WHILE - 34)) | (1 << (CalcParser.Stringliteral - 34)))) !== 0)) {
				{
				{
				this.state = 34;
				this.statement();
				}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CalcParser.RULE_statement);
		try {
			this.state = 46;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 40;
				this.ifThenElseStatement();
				}
				break;
			case CalcParser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 41;
				this.whileStatement();
				}
				break;
			case CalcParser.VAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 42;
				this.variableDeclaration();
				}
				break;
			case CalcParser.LOCAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 43;
				this.localDeclaration();
				}
				break;
			case CalcParser.LET:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 44;
				this.letDeclaration();
				}
				break;
			case CalcParser.NOT:
			case CalcParser.BOOLEAN:
			case CalcParser.NUMBER:
			case CalcParser.REAL:
			case CalcParser.FN:
			case CalcParser.OPAR:
			case CalcParser.OSQUARE:
			case CalcParser.DOUBLEQUOTE:
			case CalcParser.Stringliteral:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 45;
				this.expressionStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifThenElseStatement(): IfThenElseStatementContext {
		let _localctx: IfThenElseStatementContext = new IfThenElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CalcParser.RULE_ifThenElseStatement);
		try {
			_localctx = new IfThenElseConditionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this.match(CalcParser.IF);
			this.state = 49;
			this.match(CalcParser.OPAR);
			this.state = 50;
			(_localctx as IfThenElseConditionContext)._test = this.expression(0);
			this.state = 51;
			this.match(CalcParser.CPAR);
			this.state = 52;
			this.match(CalcParser.THEN);
			this.state = 53;
			(_localctx as IfThenElseConditionContext)._consequent = this.statement();
			this.state = 54;
			this.match(CalcParser.ELSE);
			this.state = 55;
			(_localctx as IfThenElseConditionContext)._alternate = this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CalcParser.RULE_whileStatement);
		try {
			_localctx = new WhileConditionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.match(CalcParser.WHILE);
			this.state = 58;
			(_localctx as WhileConditionContext)._test = this.expression(0);
			this.state = 59;
			this.match(CalcParser.DO);
			this.state = 60;
			(_localctx as WhileConditionContext)._body = this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CalcParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(CalcParser.VAL);
			this.state = 63;
			_localctx._left = this.match(CalcParser.Stringliteral);
			this.state = 64;
			_localctx._operator = this.match(CalcParser.EQUAL);
			this.state = 65;
			_localctx._right = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localDeclaration(): LocalDeclarationContext {
		let _localctx: LocalDeclarationContext = new LocalDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CalcParser.RULE_localDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(CalcParser.LOCAL);
			this.state = 68;
			_localctx._del = this.declarationlist();
			this.state = 69;
			this.match(CalcParser.IN);
			this.state = 70;
			_localctx._delist = this.declarationlist();
			this.state = 71;
			this.match(CalcParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letDeclaration(): LetDeclarationContext {
		let _localctx: LetDeclarationContext = new LetDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CalcParser.RULE_letDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(CalcParser.LET);
			this.state = 74;
			_localctx._del = this.declarationType();
			this.state = 75;
			this.match(CalcParser.IN);
			this.state = 76;
			_localctx._delist = this.declarationlist();
			this.state = 77;
			this.match(CalcParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationType(): DeclarationTypeContext {
		let _localctx: DeclarationTypeContext = new DeclarationTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CalcParser.RULE_declarationType);
		try {
			this.state = 82;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.VAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 79;
				this.variableDeclaration();
				}
				break;
			case CalcParser.LOCAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 80;
				this.localDeclaration();
				}
				break;
			case CalcParser.LET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 81;
				this.letDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationlist(): DeclarationlistContext {
		let _localctx: DeclarationlistContext = new DeclarationlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CalcParser.RULE_declarationlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.LET) | (1 << CalcParser.VAL) | (1 << CalcParser.LOCAL))) !== 0)) {
				{
				{
				this.state = 84;
				this.declarationType();
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CalcParser.RULE_identifier);
		try {
			this.state = 94;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.Stringliteral:
				_localctx = new IDContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 90;
				this.match(CalcParser.Stringliteral);
				}
				break;
			case CalcParser.NUMBER:
				_localctx = new NumberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 91;
				this.match(CalcParser.NUMBER);
				}
				break;
			case CalcParser.REAL:
				_localctx = new RealContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 92;
				this.match(CalcParser.REAL);
				}
				break;
			case CalcParser.BOOLEAN:
				_localctx = new BooleanContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 93;
				this.match(CalcParser.BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elements(): ElementsContext {
		let _localctx: ElementsContext = new ElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CalcParser.RULE_elements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.expression(0);
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CalcParser.T__1) {
				{
				{
				this.state = 97;
				this.match(CalcParser.T__1);
				this.state = 98;
				this.expression(0);
				}
				}
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listStructure(): ListStructureContext {
		let _localctx: ListStructureContext = new ListStructureContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CalcParser.RULE_listStructure);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.match(CalcParser.OSQUARE);
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.NOT) | (1 << CalcParser.BOOLEAN) | (1 << CalcParser.NUMBER) | (1 << CalcParser.REAL) | (1 << CalcParser.FN) | (1 << CalcParser.OPAR))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CalcParser.OSQUARE - 34)) | (1 << (CalcParser.DOUBLEQUOTE - 34)) | (1 << (CalcParser.Stringliteral - 34)))) !== 0)) {
				{
				this.state = 105;
				_localctx._element = this.elements();
				}
			}

			this.state = 108;
			this.match(CalcParser.CSQUARE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listInput(): ListInputContext {
		let _localctx: ListInputContext = new ListInputContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CalcParser.RULE_listInput);
		try {
			this.state = 112;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.OSQUARE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 110;
				this.listStructure();
				}
				break;
			case CalcParser.Stringliteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 111;
				this.match(CalcParser.Stringliteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CalcParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.expression(0);
			this.state = 115;
			this.match(CalcParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, CalcParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				_localctx = new IdentifiersContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 118;
				this.identifier();
				}
				break;

			case 2:
				{
				_localctx = new StringContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 119;
				this.match(CalcParser.DOUBLEQUOTE);
				this.state = 120;
				this.match(CalcParser.Stringliteral);
				this.state = 121;
				this.match(CalcParser.DOUBLEQUOTE);
				}
				break;

			case 3:
				{
				_localctx = new ParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 122;
				this.match(CalcParser.OPAR);
				this.state = 123;
				(_localctx as ParenthesesContext)._inner = this.expression(0);
				this.state = 124;
				this.match(CalcParser.CPAR);
				}
				break;

			case 4:
				{
				_localctx = new TupleContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 126;
				this.match(CalcParser.OPAR);
				this.state = 127;
				this.expression(0);
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CalcParser.T__1) {
					{
					{
					this.state = 128;
					this.match(CalcParser.T__1);
					this.state = 129;
					this.expression(0);
					}
					}
					this.state = 134;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 135;
				this.match(CalcParser.CPAR);
				}
				break;

			case 5:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 137;
				(_localctx as FunctionCallContext)._name = this.match(CalcParser.Stringliteral);
				this.state = 138;
				this.match(CalcParser.OPAR);
				this.state = 139;
				(_localctx as FunctionCallContext)._params = this.expression(0);
				this.state = 140;
				this.match(CalcParser.CPAR);
				}
				break;

			case 6:
				{
				_localctx = new NotLogicalContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 142;
				this.match(CalcParser.NOT);
				this.state = 143;
				(_localctx as NotLogicalContext)._left = this.expression(7);
				}
				break;

			case 7:
				{
				_localctx = new ListContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 144;
				(_localctx as ListContext)._left = this.listStructure();
				}
				break;

			case 8:
				{
				_localctx = new AssignmentContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 145;
				(_localctx as AssignmentContext)._left = this.match(CalcParser.Stringliteral);
				this.state = 146;
				(_localctx as AssignmentContext)._operator = this.match(CalcParser.ASSIGNMENT);
				this.state = 147;
				(_localctx as AssignmentContext)._right = this.expression(3);
				}
				break;

			case 9:
				{
				_localctx = new LambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 148;
				this.match(CalcParser.FN);
				this.state = 149;
				(_localctx as LambdaContext)._name = this.match(CalcParser.Stringliteral);
				this.state = 150;
				(_localctx as LambdaContext)._operator = this.match(CalcParser.ARROW);
				this.state = 151;
				(_localctx as LambdaContext)._right = this.expression(2);
				}
				break;

			case 10:
				{
				_localctx = new LambdaApplicationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 152;
				this.match(CalcParser.FN);
				this.state = 153;
				(_localctx as LambdaApplicationContext)._name = this.match(CalcParser.Stringliteral);
				this.state = 154;
				(_localctx as LambdaApplicationContext)._operator = this.match(CalcParser.ARROW);
				this.state = 155;
				(_localctx as LambdaApplicationContext)._right = this.expression(0);
				this.state = 156;
				this.match(CalcParser.OPAR);
				this.state = 157;
				(_localctx as LambdaApplicationContext)._params = this.expression(0);
				this.state = 158;
				this.match(CalcParser.CPAR);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 209;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 207;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as PowerContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 162;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 163;
						(_localctx as PowerContext)._operator = this.match(CalcParser.POW);
						this.state = 164;
						(_localctx as PowerContext)._right = this.expression(21);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MultiplicationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 165;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 166;
						(_localctx as MultiplicationContext)._operator = this.match(CalcParser.MUL);
						this.state = 167;
						(_localctx as MultiplicationContext)._right = this.expression(20);
						}
						break;

					case 3:
						{
						_localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as DivisionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 168;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 169;
						(_localctx as DivisionContext)._operator = this.match(CalcParser.DIV);
						this.state = 170;
						(_localctx as DivisionContext)._right = this.expression(19);
						}
						break;

					case 4:
						{
						_localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AdditionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 171;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 172;
						(_localctx as AdditionContext)._operator = this.match(CalcParser.ADD);
						this.state = 173;
						(_localctx as AdditionContext)._right = this.expression(18);
						}
						break;

					case 5:
						{
						_localctx = new SubtractionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SubtractionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 174;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 175;
						(_localctx as SubtractionContext)._operator = this.match(CalcParser.SUB);
						this.state = 176;
						(_localctx as SubtractionContext)._right = this.expression(17);
						}
						break;

					case 6:
						{
						_localctx = new ModulusContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ModulusContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 177;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 178;
						(_localctx as ModulusContext)._operator = this.match(CalcParser.MOD);
						this.state = 179;
						(_localctx as ModulusContext)._right = this.expression(16);
						}
						break;

					case 7:
						{
						_localctx = new EqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualComparatorContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 180;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 181;
						(_localctx as EqualComparatorContext)._operator = this.match(CalcParser.EQUAL);
						this.state = 182;
						(_localctx as EqualComparatorContext)._right = this.expression(15);
						}
						break;

					case 8:
						{
						_localctx = new GreaterComparatorContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as GreaterComparatorContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 183;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 184;
						(_localctx as GreaterComparatorContext)._operator = this.match(CalcParser.GT);
						this.state = 185;
						(_localctx as GreaterComparatorContext)._right = this.expression(14);
						}
						break;

					case 9:
						{
						_localctx = new LesserComparatorContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LesserComparatorContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 186;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 187;
						(_localctx as LesserComparatorContext)._operator = this.match(CalcParser.LT);
						this.state = 188;
						(_localctx as LesserComparatorContext)._right = this.expression(13);
						}
						break;

					case 10:
						{
						_localctx = new GreaterEqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as GreaterEqualComparatorContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 189;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 190;
						(_localctx as GreaterEqualComparatorContext)._operator = this.match(CalcParser.GE);
						this.state = 191;
						(_localctx as GreaterEqualComparatorContext)._right = this.expression(12);
						}
						break;

					case 11:
						{
						_localctx = new LesserEqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LesserEqualComparatorContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 192;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 193;
						(_localctx as LesserEqualComparatorContext)._operator = this.match(CalcParser.LE);
						this.state = 194;
						(_localctx as LesserEqualComparatorContext)._right = this.expression(11);
						}
						break;

					case 12:
						{
						_localctx = new AndLogicalContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AndLogicalContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 195;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 196;
						(_localctx as AndLogicalContext)._operator = this.match(CalcParser.AND);
						this.state = 197;
						(_localctx as AndLogicalContext)._right = this.expression(10);
						}
						break;

					case 13:
						{
						_localctx = new OrLogicalContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as OrLogicalContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 198;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 199;
						(_localctx as OrLogicalContext)._operator = this.match(CalcParser.OR);
						this.state = 200;
						(_localctx as OrLogicalContext)._right = this.expression(9);
						}
						break;

					case 14:
						{
						_localctx = new ListAppendContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ListAppendContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 201;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 202;
						(_localctx as ListAppendContext)._operator = this.match(CalcParser.APPEND);
						this.state = 203;
						(_localctx as ListAppendContext)._right = this.expression(6);
						}
						break;

					case 15:
						{
						_localctx = new ListConsContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ListConsContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 204;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 205;
						(_localctx as ListConsContext)._operator = this.match(CalcParser.CONS);
						this.state = 206;
						(_localctx as ListConsContext)._right = this.expression(5);
						}
						break;
					}
					}
				}
				this.state = 211;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 15:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 20);

		case 1:
			return this.precpred(this._ctx, 19);

		case 2:
			return this.precpred(this._ctx, 18);

		case 3:
			return this.precpred(this._ctx, 17);

		case 4:
			return this.precpred(this._ctx, 16);

		case 5:
			return this.precpred(this._ctx, 15);

		case 6:
			return this.precpred(this._ctx, 14);

		case 7:
			return this.precpred(this._ctx, 13);

		case 8:
			return this.precpred(this._ctx, 12);

		case 9:
			return this.precpred(this._ctx, 11);

		case 10:
			return this.precpred(this._ctx, 10);

		case 11:
			return this.precpred(this._ctx, 9);

		case 12:
			return this.precpred(this._ctx, 8);

		case 13:
			return this.precpred(this._ctx, 5);

		case 14:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x034\xD7\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02\x03" +
		"\x03\x07\x03&\n\x03\f\x03\x0E\x03)\v\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x05\x041\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x05\nU\n" +
		"\n\x03\v\x07\vX\n\v\f\v\x0E\v[\v\v\x03\f\x03\f\x03\f\x03\f\x05\fa\n\f" +
		"\x03\r\x03\r\x03\r\x07\rf\n\r\f\r\x0E\ri\v\r\x03\x0E\x03\x0E\x05\x0Em" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0Fs\n\x0F\x03\x10\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\x85\n\x11\f\x11\x0E\x11" +
		"\x88\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05" +
		"\x11\xA3\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x07\x11\xD2\n\x11\f\x11\x0E\x11\xD5\v\x11\x03\x11\x02" +
		"\x02\x03 \x12\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\x02\x02" +
		"\x02\xEE\x02\"\x03\x02\x02\x02\x04\'\x03\x02\x02\x02\x060\x03\x02\x02" +
		"\x02\b2\x03\x02\x02\x02\n;\x03\x02\x02\x02\f@\x03\x02\x02\x02\x0EE\x03" +
		"\x02\x02\x02\x10K\x03\x02\x02\x02\x12T\x03\x02\x02\x02\x14Y\x03\x02\x02" +
		"\x02\x16`\x03\x02\x02\x02\x18b\x03\x02\x02\x02\x1Aj\x03\x02\x02\x02\x1C" +
		"r\x03\x02\x02\x02\x1Et\x03\x02\x02\x02 \xA2\x03\x02\x02\x02\"#\x07\x03" +
		"\x02\x02#\x03\x03\x02\x02\x02$&\x05\x06\x04\x02%$\x03\x02\x02\x02&)\x03" +
		"\x02\x02\x02\'%\x03\x02\x02\x02\'(\x03\x02\x02\x02(\x05\x03\x02\x02\x02" +
		")\'\x03\x02\x02\x02*1\x05\b\x05\x02+1\x05\n\x06\x02,1\x05\f\x07\x02-1" +
		"\x05\x0E\b\x02.1\x05\x10\t\x02/1\x05\x1E\x10\x020*\x03\x02\x02\x020+\x03" +
		"\x02\x02\x020,\x03\x02\x02\x020-\x03\x02\x02\x020.\x03\x02\x02\x020/\x03" +
		"\x02\x02\x021\x07\x03\x02\x02\x0223\x07*\x02\x0234\x07 \x02\x0245\x05" +
		" \x11\x0256\x07!\x02\x0267\x07+\x02\x0278\x05\x06\x04\x0289\x07,\x02\x02" +
		"9:\x05\x06\x04\x02:\t\x03\x02\x02\x02;<\x07-\x02\x02<=\x05 \x11\x02=>" +
		"\x07.\x02\x02>?\x05\x06\x04\x02?\v\x03\x02\x02\x02@A\x07\x1C\x02\x02A" +
		"B\x074\x02\x02BC\x07\v\x02\x02CD\x05 \x11\x02D\r\x03\x02\x02\x02EF\x07" +
		"\x1D\x02\x02FG\x05\x14\v\x02GH\x07\x1A\x02\x02HI\x05\x14\v\x02IJ\x07\x1B" +
		"\x02\x02J\x0F\x03\x02\x02\x02KL\x07\x19\x02\x02LM\x05\x12\n\x02MN\x07" +
		"\x1A\x02\x02NO\x05\x14\v\x02OP\x07\x1B\x02\x02P\x11\x03\x02\x02\x02QU" +
		"\x05\f\x07\x02RU\x05\x0E\b\x02SU\x05\x10\t\x02TQ\x03\x02\x02\x02TR\x03" +
		"\x02\x02\x02TS\x03\x02\x02\x02U\x13\x03\x02\x02\x02VX\x05\x12\n\x02WV" +
		"\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02" +
		"Z\x15\x03\x02\x02\x02[Y\x03\x02\x02\x02\\a\x074\x02\x02]a\x07\x15\x02" +
		"\x02^a\x07\x16\x02\x02_a\x07\x10\x02\x02`\\\x03\x02\x02\x02`]\x03\x02" +
		"\x02\x02`^\x03\x02\x02\x02`_\x03\x02\x02\x02a\x17\x03\x02\x02\x02bg\x05" +
		" \x11\x02cd\x07\x04\x02\x02df\x05 \x11\x02ec\x03\x02\x02\x02fi\x03\x02" +
		"\x02\x02ge\x03\x02\x02\x02gh\x03\x02\x02\x02h\x19\x03\x02\x02\x02ig\x03" +
		"\x02\x02\x02jl\x07$\x02\x02km\x05\x18\r\x02lk\x03\x02\x02\x02lm\x03\x02" +
		"\x02\x02mn\x03\x02\x02\x02no\x07%\x02\x02o\x1B\x03\x02\x02\x02ps\x05\x1A" +
		"\x0E\x02qs\x074\x02\x02rp\x03\x02\x02\x02rq\x03\x02\x02\x02s\x1D\x03\x02" +
		"\x02\x02tu\x05 \x11\x02uv\x07\x03\x02\x02v\x1F\x03\x02\x02\x02wx\b\x11" +
		"\x01\x02x\xA3\x05\x16\f\x02yz\x07&\x02\x02z{\x074\x02\x02{\xA3\x07&\x02" +
		"\x02|}\x07 \x02\x02}~\x05 \x11\x02~\x7F\x07!\x02\x02\x7F\xA3\x03\x02\x02" +
		"\x02\x80\x81\x07 \x02\x02\x81\x86\x05 \x11\x02\x82\x83\x07\x04\x02\x02" +
		"\x83\x85\x05 \x11\x02\x84\x82\x03\x02\x02\x02\x85\x88\x03\x02\x02\x02" +
		"\x86\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x89\x03\x02\x02\x02" +
		"\x88\x86\x03\x02\x02\x02\x89\x8A\x07!\x02\x02\x8A\xA3\x03\x02\x02\x02" +
		"\x8B\x8C\x074\x02\x02\x8C\x8D\x07 \x02\x02\x8D\x8E\x05 \x11\x02\x8E\x8F" +
		"\x07!\x02\x02\x8F\xA3\x03\x02\x02\x02\x90\x91\x07\x0F\x02\x02\x91\xA3" +
		"\x05 \x11\t\x92\xA3\x05\x1A\x0E\x02\x93\x94\x074\x02\x02\x94\x95\x07\'" +
		"\x02\x02\x95\xA3\x05 \x11\x05\x96\x97\x07\x1F\x02\x02\x97\x98\x074\x02" +
		"\x02\x98\x99\x07\f\x02\x02\x99\xA3\x05 \x11\x04\x9A\x9B\x07\x1F\x02\x02" +
		"\x9B\x9C\x074\x02\x02\x9C\x9D\x07\f\x02\x02\x9D\x9E\x05 \x11\x02\x9E\x9F" +
		"\x07 \x02\x02\x9F\xA0\x05 \x11\x02\xA0\xA1\x07!\x02\x02\xA1\xA3\x03\x02" +
		"\x02\x02\xA2w\x03\x02\x02\x02\xA2y\x03\x02\x02\x02\xA2|\x03\x02\x02\x02" +
		"\xA2\x80\x03\x02\x02\x02\xA2\x8B\x03\x02\x02\x02\xA2\x90\x03\x02\x02\x02" +
		"\xA2\x92\x03\x02\x02\x02\xA2\x93\x03\x02\x02\x02\xA2\x96\x03\x02\x02\x02" +
		"\xA2\x9A\x03\x02\x02\x02\xA3\xD3\x03\x02\x02\x02\xA4\xA5\f\x16\x02\x02" +
		"\xA5\xA6\x07\x05\x02\x02\xA6\xD2\x05 \x11\x17\xA7\xA8\f\x15\x02\x02\xA8" +
		"\xA9\x07\x06\x02\x02\xA9\xD2\x05 \x11\x16\xAA\xAB\f\x14\x02\x02\xAB\xAC" +
		"\x07\x07\x02\x02\xAC\xD2\x05 \x11\x15\xAD\xAE\f\x13\x02\x02\xAE\xAF\x07" +
		"\t\x02\x02\xAF\xD2\x05 \x11\x14\xB0\xB1\f\x12\x02\x02\xB1\xB2\x07\n\x02" +
		"\x02\xB2\xD2\x05 \x11\x13\xB3\xB4\f\x11\x02\x02\xB4\xB5\x07\b\x02\x02" +
		"\xB5\xD2\x05 \x11\x12\xB6\xB7\f\x10\x02\x02\xB7\xB8\x07\v\x02\x02\xB8" +
		"\xD2\x05 \x11\x11\xB9\xBA\f\x0F\x02\x02\xBA\xBB\x07\x11\x02\x02\xBB\xD2" +
		"\x05 \x11\x10\xBC\xBD\f\x0E\x02\x02\xBD\xBE\x07\x12\x02\x02\xBE\xD2\x05" +
		" \x11\x0F\xBF\xC0\f\r\x02\x02\xC0\xC1\x07\x13\x02\x02\xC1\xD2\x05 \x11" +
		"\x0E\xC2\xC3\f\f\x02\x02\xC3\xC4\x07\x14\x02\x02\xC4\xD2\x05 \x11\r\xC5" +
		"\xC6\f\v\x02\x02\xC6\xC7\x07\r\x02\x02\xC7\xD2\x05 \x11\f\xC8\xC9\f\n" +
		"\x02\x02\xC9\xCA\x07\x0E\x02\x02\xCA\xD2\x05 \x11\v\xCB\xCC\f\x07\x02" +
		"\x02\xCC\xCD\x07(\x02\x02\xCD\xD2\x05 \x11\b\xCE\xCF\f\x06\x02\x02\xCF" +
		"\xD0\x07)\x02\x02\xD0\xD2\x05 \x11\x07\xD1\xA4\x03\x02\x02\x02\xD1\xA7" +
		"\x03\x02\x02\x02\xD1\xAA\x03\x02\x02\x02\xD1\xAD\x03\x02\x02\x02\xD1\xB0" +
		"\x03\x02\x02\x02\xD1\xB3\x03\x02\x02\x02\xD1\xB6\x03\x02\x02\x02\xD1\xB9" +
		"\x03\x02\x02\x02\xD1\xBC\x03\x02\x02\x02\xD1\xBF\x03\x02\x02\x02\xD1\xC2" +
		"\x03\x02\x02\x02\xD1\xC5\x03\x02\x02\x02\xD1\xC8\x03\x02\x02\x02\xD1\xCB" +
		"\x03\x02\x02\x02\xD1\xCE\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1" +
		"\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4!\x03\x02\x02\x02\xD5\xD3" +
		"\x03\x02\x02\x02\x0E\'0TY`glr\x86\xA2\xD1\xD3";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalcParser.__ATN) {
			CalcParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalcParser._serializedATN));
		}

		return CalcParser.__ATN;
	}

}

export class EmptydeclarationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_emptydeclaration; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterEmptydeclaration) {
			listener.enterEmptydeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitEmptydeclaration) {
			listener.exitEmptydeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitEmptydeclaration) {
			return visitor.visitEmptydeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StartContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_start; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public ifThenElseStatement(): IfThenElseStatementContext | undefined {
		return this.tryGetRuleContext(0, IfThenElseStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public localDeclaration(): LocalDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalDeclarationContext);
	}
	public letDeclaration(): LetDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LetDeclarationContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_statement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenElseStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_ifThenElseStatement; }
	public copyFrom(ctx: IfThenElseStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class IfThenElseConditionContext extends IfThenElseStatementContext {
	public _test!: ExpressionContext;
	public _consequent!: StatementContext;
	public _alternate!: StatementContext;
	public IF(): TerminalNode { return this.getToken(CalcParser.IF, 0); }
	public OPAR(): TerminalNode { return this.getToken(CalcParser.OPAR, 0); }
	public CPAR(): TerminalNode { return this.getToken(CalcParser.CPAR, 0); }
	public THEN(): TerminalNode { return this.getToken(CalcParser.THEN, 0); }
	public ELSE(): TerminalNode { return this.getToken(CalcParser.ELSE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(ctx: IfThenElseStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterIfThenElseCondition) {
			listener.enterIfThenElseCondition(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitIfThenElseCondition) {
			listener.exitIfThenElseCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitIfThenElseCondition) {
			return visitor.visitIfThenElseCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_whileStatement; }
	public copyFrom(ctx: WhileStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class WhileConditionContext extends WhileStatementContext {
	public _test!: ExpressionContext;
	public _body!: StatementContext;
	public WHILE(): TerminalNode { return this.getToken(CalcParser.WHILE, 0); }
	public DO(): TerminalNode { return this.getToken(CalcParser.DO, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: WhileStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterWhileCondition) {
			listener.enterWhileCondition(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitWhileCondition) {
			listener.exitWhileCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitWhileCondition) {
			return visitor.visitWhileCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public _left!: Token;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public VAL(): TerminalNode { return this.getToken(CalcParser.VAL, 0); }
	public Stringliteral(): TerminalNode { return this.getToken(CalcParser.Stringliteral, 0); }
	public EQUAL(): TerminalNode { return this.getToken(CalcParser.EQUAL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalDeclarationContext extends ParserRuleContext {
	public _del!: DeclarationlistContext;
	public _delist!: DeclarationlistContext;
	public LOCAL(): TerminalNode { return this.getToken(CalcParser.LOCAL, 0); }
	public IN(): TerminalNode { return this.getToken(CalcParser.IN, 0); }
	public END(): TerminalNode { return this.getToken(CalcParser.END, 0); }
	public declarationlist(): DeclarationlistContext[];
	public declarationlist(i: number): DeclarationlistContext;
	public declarationlist(i?: number): DeclarationlistContext | DeclarationlistContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationlistContext);
		} else {
			return this.getRuleContext(i, DeclarationlistContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_localDeclaration; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterLocalDeclaration) {
			listener.enterLocalDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitLocalDeclaration) {
			listener.exitLocalDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitLocalDeclaration) {
			return visitor.visitLocalDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetDeclarationContext extends ParserRuleContext {
	public _del!: DeclarationTypeContext;
	public _delist!: DeclarationlistContext;
	public LET(): TerminalNode { return this.getToken(CalcParser.LET, 0); }
	public IN(): TerminalNode { return this.getToken(CalcParser.IN, 0); }
	public END(): TerminalNode { return this.getToken(CalcParser.END, 0); }
	public declarationType(): DeclarationTypeContext {
		return this.getRuleContext(0, DeclarationTypeContext);
	}
	public declarationlist(): DeclarationlistContext {
		return this.getRuleContext(0, DeclarationlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_letDeclaration; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterLetDeclaration) {
			listener.enterLetDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitLetDeclaration) {
			listener.exitLetDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitLetDeclaration) {
			return visitor.visitLetDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationTypeContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public localDeclaration(): LocalDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalDeclarationContext);
	}
	public letDeclaration(): LetDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LetDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_declarationType; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterDeclarationType) {
			listener.enterDeclarationType(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitDeclarationType) {
			listener.exitDeclarationType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitDeclarationType) {
			return visitor.visitDeclarationType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationlistContext extends ParserRuleContext {
	public declarationType(): DeclarationTypeContext[];
	public declarationType(i: number): DeclarationTypeContext;
	public declarationType(i?: number): DeclarationTypeContext | DeclarationTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationTypeContext);
		} else {
			return this.getRuleContext(i, DeclarationTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_declarationlist; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterDeclarationlist) {
			listener.enterDeclarationlist(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitDeclarationlist) {
			listener.exitDeclarationlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitDeclarationlist) {
			return visitor.visitDeclarationlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_identifier; }
	public copyFrom(ctx: IdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class IDContext extends IdentifierContext {
	public Stringliteral(): TerminalNode { return this.getToken(CalcParser.Stringliteral, 0); }
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterID) {
			listener.enterID(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitID) {
			listener.exitID(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitID) {
			return visitor.visitID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberContext extends IdentifierContext {
	public NUMBER(): TerminalNode { return this.getToken(CalcParser.NUMBER, 0); }
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RealContext extends IdentifierContext {
	public REAL(): TerminalNode { return this.getToken(CalcParser.REAL, 0); }
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterReal) {
			listener.enterReal(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitReal) {
			listener.exitReal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitReal) {
			return visitor.visitReal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanContext extends IdentifierContext {
	public BOOLEAN(): TerminalNode { return this.getToken(CalcParser.BOOLEAN, 0); }
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterBoolean) {
			listener.enterBoolean(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitBoolean) {
			listener.exitBoolean(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitBoolean) {
			return visitor.visitBoolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementsContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_elements; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterElements) {
			listener.enterElements(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitElements) {
			listener.exitElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitElements) {
			return visitor.visitElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListStructureContext extends ParserRuleContext {
	public _element!: ElementsContext;
	public OSQUARE(): TerminalNode { return this.getToken(CalcParser.OSQUARE, 0); }
	public CSQUARE(): TerminalNode { return this.getToken(CalcParser.CSQUARE, 0); }
	public elements(): ElementsContext | undefined {
		return this.tryGetRuleContext(0, ElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_listStructure; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterListStructure) {
			listener.enterListStructure(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitListStructure) {
			listener.exitListStructure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitListStructure) {
			return visitor.visitListStructure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListInputContext extends ParserRuleContext {
	public listStructure(): ListStructureContext | undefined {
		return this.tryGetRuleContext(0, ListStructureContext);
	}
	public Stringliteral(): TerminalNode | undefined { return this.tryGetToken(CalcParser.Stringliteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_listInput; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterListInput) {
			listener.enterListInput(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitListInput) {
			listener.exitListInput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitListInput) {
			return visitor.visitListInput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentifiersContext extends ExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterIdentifiers) {
			listener.enterIdentifiers(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitIdentifiers) {
			listener.exitIdentifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitIdentifiers) {
			return visitor.visitIdentifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringContext extends ExpressionContext {
	public DOUBLEQUOTE(): TerminalNode[];
	public DOUBLEQUOTE(i: number): TerminalNode;
	public DOUBLEQUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CalcParser.DOUBLEQUOTE);
		} else {
			return this.getToken(CalcParser.DOUBLEQUOTE, i);
		}
	}
	public Stringliteral(): TerminalNode { return this.getToken(CalcParser.Stringliteral, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesesContext extends ExpressionContext {
	public _inner!: ExpressionContext;
	public OPAR(): TerminalNode { return this.getToken(CalcParser.OPAR, 0); }
	public CPAR(): TerminalNode { return this.getToken(CalcParser.CPAR, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterParentheses) {
			listener.enterParentheses(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitParentheses) {
			listener.exitParentheses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitParentheses) {
			return visitor.visitParentheses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleContext extends ExpressionContext {
	public OPAR(): TerminalNode { return this.getToken(CalcParser.OPAR, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public CPAR(): TerminalNode { return this.getToken(CalcParser.CPAR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterTuple) {
			listener.enterTuple(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitTuple) {
			listener.exitTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitTuple) {
			return visitor.visitTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends ExpressionContext {
	public _name!: Token;
	public _params!: ExpressionContext;
	public OPAR(): TerminalNode { return this.getToken(CalcParser.OPAR, 0); }
	public CPAR(): TerminalNode { return this.getToken(CalcParser.CPAR, 0); }
	public Stringliteral(): TerminalNode { return this.getToken(CalcParser.Stringliteral, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public POW(): TerminalNode { return this.getToken(CalcParser.POW, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterPower) {
			listener.enterPower(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitPower) {
			listener.exitPower(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitPower) {
			return visitor.visitPower(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicationContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MUL(): TerminalNode { return this.getToken(CalcParser.MUL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterMultiplication) {
			listener.enterMultiplication(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitMultiplication) {
			listener.exitMultiplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitMultiplication) {
			return visitor.visitMultiplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivisionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DIV(): TerminalNode { return this.getToken(CalcParser.DIV, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterDivision) {
			listener.enterDivision(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitDivision) {
			listener.exitDivision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitDivision) {
			return visitor.visitDivision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ADD(): TerminalNode { return this.getToken(CalcParser.ADD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterAddition) {
			listener.enterAddition(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitAddition) {
			listener.exitAddition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitAddition) {
			return visitor.visitAddition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubtractionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SUB(): TerminalNode { return this.getToken(CalcParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterSubtraction) {
			listener.enterSubtraction(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitSubtraction) {
			listener.exitSubtraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitSubtraction) {
			return visitor.visitSubtraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ModulusContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MOD(): TerminalNode { return this.getToken(CalcParser.MOD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterModulus) {
			listener.enterModulus(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitModulus) {
			listener.exitModulus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitModulus) {
			return visitor.visitModulus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualComparatorContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EQUAL(): TerminalNode { return this.getToken(CalcParser.EQUAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterEqualComparator) {
			listener.enterEqualComparator(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitEqualComparator) {
			listener.exitEqualComparator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitEqualComparator) {
			return visitor.visitEqualComparator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GreaterComparatorContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(CalcParser.GT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterGreaterComparator) {
			listener.enterGreaterComparator(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitGreaterComparator) {
			listener.exitGreaterComparator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitGreaterComparator) {
			return visitor.visitGreaterComparator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LesserComparatorContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LT(): TerminalNode { return this.getToken(CalcParser.LT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterLesserComparator) {
			listener.enterLesserComparator(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitLesserComparator) {
			listener.exitLesserComparator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitLesserComparator) {
			return visitor.visitLesserComparator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GreaterEqualComparatorContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public GE(): TerminalNode { return this.getToken(CalcParser.GE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterGreaterEqualComparator) {
			listener.enterGreaterEqualComparator(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitGreaterEqualComparator) {
			listener.exitGreaterEqualComparator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitGreaterEqualComparator) {
			return visitor.visitGreaterEqualComparator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LesserEqualComparatorContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LE(): TerminalNode { return this.getToken(CalcParser.LE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterLesserEqualComparator) {
			listener.enterLesserEqualComparator(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitLesserEqualComparator) {
			listener.exitLesserEqualComparator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitLesserEqualComparator) {
			return visitor.visitLesserEqualComparator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndLogicalContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(CalcParser.AND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterAndLogical) {
			listener.enterAndLogical(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitAndLogical) {
			listener.exitAndLogical(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitAndLogical) {
			return visitor.visitAndLogical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrLogicalContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(CalcParser.OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterOrLogical) {
			listener.enterOrLogical(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitOrLogical) {
			listener.exitOrLogical(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitOrLogical) {
			return visitor.visitOrLogical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotLogicalContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public NOT(): TerminalNode { return this.getToken(CalcParser.NOT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterNotLogical) {
			listener.enterNotLogical(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitNotLogical) {
			listener.exitNotLogical(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitNotLogical) {
			return visitor.visitNotLogical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListContext extends ExpressionContext {
	public _left!: ListStructureContext;
	public listStructure(): ListStructureContext {
		return this.getRuleContext(0, ListStructureContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListAppendContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public APPEND(): TerminalNode { return this.getToken(CalcParser.APPEND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterListAppend) {
			listener.enterListAppend(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitListAppend) {
			listener.exitListAppend(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitListAppend) {
			return visitor.visitListAppend(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListConsContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public CONS(): TerminalNode { return this.getToken(CalcParser.CONS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterListCons) {
			listener.enterListCons(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitListCons) {
			listener.exitListCons(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitListCons) {
			return visitor.visitListCons(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentContext extends ExpressionContext {
	public _left!: Token;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public Stringliteral(): TerminalNode { return this.getToken(CalcParser.Stringliteral, 0); }
	public ASSIGNMENT(): TerminalNode { return this.getToken(CalcParser.ASSIGNMENT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LambdaContext extends ExpressionContext {
	public _name!: Token;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public FN(): TerminalNode { return this.getToken(CalcParser.FN, 0); }
	public Stringliteral(): TerminalNode { return this.getToken(CalcParser.Stringliteral, 0); }
	public ARROW(): TerminalNode { return this.getToken(CalcParser.ARROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterLambda) {
			listener.enterLambda(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitLambda) {
			listener.exitLambda(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitLambda) {
			return visitor.visitLambda(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LambdaApplicationContext extends ExpressionContext {
	public _name!: Token;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public _params!: ExpressionContext;
	public FN(): TerminalNode { return this.getToken(CalcParser.FN, 0); }
	public OPAR(): TerminalNode { return this.getToken(CalcParser.OPAR, 0); }
	public CPAR(): TerminalNode { return this.getToken(CalcParser.CPAR, 0); }
	public Stringliteral(): TerminalNode { return this.getToken(CalcParser.Stringliteral, 0); }
	public ARROW(): TerminalNode { return this.getToken(CalcParser.ARROW, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterLambdaApplication) {
			listener.enterLambdaApplication(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitLambdaApplication) {
			listener.exitLambdaApplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitLambdaApplication) {
			return visitor.visitLambdaApplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


