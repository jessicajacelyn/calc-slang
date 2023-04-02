// Generated from /Users/jessicajacelyn/cs4215-calc-slang/src/lang/Calc.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CalcParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, POW=3, MUL=4, DIV=5, MOD=6, ADD=7, SUB=8, EQUAL=9, AND=10, 
		OR=11, NOT=12, BOOLEAN=13, GT=14, LT=15, GE=16, LE=17, NUMBER=18, REAL=19, 
		WHITESPACE=20, LETTER=21, LET=22, VAL=23, LOCAL=24, OPAR=25, CPAR=26, 
		OBRACE=27, CBRACE=28, DOUBLEQUOTE=29, ASSIGNMEMT=30, IF=31, THEN=32, ELSE=33, 
		WHILE=34, DO=35, CHAR=36, STRING=37, INT=38, BOOL=39, REALNUM=40, Stringliteral=41;
	public static final int
		RULE_emptydeclaration = 0, RULE_start = 1, RULE_statement = 2, RULE_ifThenElseStatement = 3, 
		RULE_whileStatement = 4, RULE_type = 5, RULE_declaration = 6, RULE_variableDeclaration = 7, 
		RULE_localValDeclaration = 8, RULE_block = 9, RULE_print = 10, RULE_parameters = 11, 
		RULE_function = 12, RULE_identifier = 13, RULE_expressionStatement = 14, 
		RULE_expression = 15;
	private static String[] makeRuleNames() {
		return new String[] {
			"emptydeclaration", "start", "statement", "ifThenElseStatement", "whileStatement", 
			"type", "declaration", "variableDeclaration", "localValDeclaration", 
			"block", "print", "parameters", "function", "identifier", "expressionStatement", 
			"expression"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "','", "'^'", "'*'", "'/'", "'%'", "'+'", "'-'", "'='", 
			null, null, "'not'", null, "'>'", "'<'", "'>='", "'<='", null, null, 
			null, null, "'let'", "'val'", "'local val'", "'('", "')'", "'{'", "'}'", 
			"'\"'", "':='", "'if'", "'then'", "'else'", "'while'", "'do'", "'char'", 
			"'string'", "'int'", "'bool'", "'real'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "POW", "MUL", "DIV", "MOD", "ADD", "SUB", "EQUAL", 
			"AND", "OR", "NOT", "BOOLEAN", "GT", "LT", "GE", "LE", "NUMBER", "REAL", 
			"WHITESPACE", "LETTER", "LET", "VAL", "LOCAL", "OPAR", "CPAR", "OBRACE", 
			"CBRACE", "DOUBLEQUOTE", "ASSIGNMEMT", "IF", "THEN", "ELSE", "WHILE", 
			"DO", "CHAR", "STRING", "INT", "BOOL", "REALNUM", "Stringliteral"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Calc.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CalcParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class EmptydeclarationContext extends ParserRuleContext {
		public EmptydeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_emptydeclaration; }
	}

	public final EmptydeclarationContext emptydeclaration() throws RecognitionException {
		EmptydeclarationContext _localctx = new EmptydeclarationContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_emptydeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(32);
			match(T__0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StartContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<FunctionContext> function() {
			return getRuleContexts(FunctionContext.class);
		}
		public FunctionContext function(int i) {
			return getRuleContext(FunctionContext.class,i);
		}
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_start);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NOT) | (1L << BOOLEAN) | (1L << NUMBER) | (1L << REAL) | (1L << LET) | (1L << VAL) | (1L << LOCAL) | (1L << OPAR) | (1L << OBRACE) | (1L << IF) | (1L << WHILE) | (1L << CHAR) | (1L << STRING) | (1L << INT) | (1L << BOOL) | (1L << REALNUM) | (1L << Stringliteral))) != 0)) {
				{
				setState(36);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(34);
					statement();
					}
					break;
				case 2:
					{
					setState(35);
					function();
					}
					break;
				}
				}
				setState(40);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public IfThenElseStatementContext ifThenElseStatement() {
			return getRuleContext(IfThenElseStatementContext.class,0);
		}
		public WhileStatementContext whileStatement() {
			return getRuleContext(WhileStatementContext.class,0);
		}
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public LocalValDeclarationContext localValDeclaration() {
			return getRuleContext(LocalValDeclarationContext.class,0);
		}
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_statement);
		try {
			setState(48);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(41);
				ifThenElseStatement();
				}
				break;
			case WHILE:
				enterOuterAlt(_localctx, 2);
				{
				setState(42);
				whileStatement();
				}
				break;
			case LET:
			case VAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(43);
				variableDeclaration();
				}
				break;
			case LOCAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(44);
				localValDeclaration();
				}
				break;
			case CHAR:
			case STRING:
			case INT:
			case BOOL:
			case REALNUM:
				enterOuterAlt(_localctx, 5);
				{
				setState(45);
				declaration();
				}
				break;
			case NOT:
			case BOOLEAN:
			case NUMBER:
			case REAL:
			case OPAR:
			case Stringliteral:
				enterOuterAlt(_localctx, 6);
				{
				setState(46);
				expressionStatement();
				}
				break;
			case OBRACE:
				enterOuterAlt(_localctx, 7);
				{
				setState(47);
				block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfThenElseStatementContext extends ParserRuleContext {
		public IfThenElseStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifThenElseStatement; }
	 
		public IfThenElseStatementContext() { }
		public void copyFrom(IfThenElseStatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class IfThenElseConditionContext extends IfThenElseStatementContext {
		public ExpressionContext test;
		public StatementContext consequent;
		public StatementContext alternate;
		public TerminalNode IF() { return getToken(CalcParser.IF, 0); }
		public TerminalNode OPAR() { return getToken(CalcParser.OPAR, 0); }
		public TerminalNode CPAR() { return getToken(CalcParser.CPAR, 0); }
		public TerminalNode THEN() { return getToken(CalcParser.THEN, 0); }
		public TerminalNode ELSE() { return getToken(CalcParser.ELSE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public IfThenElseConditionContext(IfThenElseStatementContext ctx) { copyFrom(ctx); }
	}

	public final IfThenElseStatementContext ifThenElseStatement() throws RecognitionException {
		IfThenElseStatementContext _localctx = new IfThenElseStatementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_ifThenElseStatement);
		try {
			_localctx = new IfThenElseConditionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(50);
			match(IF);
			setState(51);
			match(OPAR);
			setState(52);
			((IfThenElseConditionContext)_localctx).test = expression(0);
			setState(53);
			match(CPAR);
			setState(54);
			match(THEN);
			setState(55);
			((IfThenElseConditionContext)_localctx).consequent = statement();
			setState(56);
			match(ELSE);
			setState(57);
			((IfThenElseConditionContext)_localctx).alternate = statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhileStatementContext extends ParserRuleContext {
		public WhileStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileStatement; }
	 
		public WhileStatementContext() { }
		public void copyFrom(WhileStatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class WhileConditionContext extends WhileStatementContext {
		public ExpressionContext test;
		public StatementContext body;
		public TerminalNode WHILE() { return getToken(CalcParser.WHILE, 0); }
		public TerminalNode DO() { return getToken(CalcParser.DO, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public WhileConditionContext(WhileStatementContext ctx) { copyFrom(ctx); }
	}

	public final WhileStatementContext whileStatement() throws RecognitionException {
		WhileStatementContext _localctx = new WhileStatementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_whileStatement);
		try {
			_localctx = new WhileConditionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(59);
			match(WHILE);
			setState(60);
			((WhileConditionContext)_localctx).test = expression(0);
			setState(61);
			match(DO);
			setState(62);
			((WhileConditionContext)_localctx).body = statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeContext extends ParserRuleContext {
		public TerminalNode CHAR() { return getToken(CalcParser.CHAR, 0); }
		public TerminalNode STRING() { return getToken(CalcParser.STRING, 0); }
		public TerminalNode INT() { return getToken(CalcParser.INT, 0); }
		public TerminalNode BOOL() { return getToken(CalcParser.BOOL, 0); }
		public TerminalNode REALNUM() { return getToken(CalcParser.REALNUM, 0); }
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(64);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CHAR) | (1L << STRING) | (1L << INT) | (1L << BOOL) | (1L << REALNUM))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclarationContext extends ParserRuleContext {
		public TypeContext t;
		public Token id;
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode Stringliteral() { return getToken(CalcParser.Stringliteral, 0); }
		public DeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration; }
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_declaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			((DeclarationContext)_localctx).t = type();
			setState(67);
			((DeclarationContext)_localctx).id = match(Stringliteral);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclarationContext extends ParserRuleContext {
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
	 
		public VariableDeclarationContext() { }
		public void copyFrom(VariableDeclarationContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ValDeclarationContext extends VariableDeclarationContext {
		public Token left;
		public Token operator;
		public ExpressionContext right;
		public TerminalNode VAL() { return getToken(CalcParser.VAL, 0); }
		public TerminalNode Stringliteral() { return getToken(CalcParser.Stringliteral, 0); }
		public TerminalNode EQUAL() { return getToken(CalcParser.EQUAL, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ValDeclarationContext(VariableDeclarationContext ctx) { copyFrom(ctx); }
	}
	public static class LetDeclarationContext extends VariableDeclarationContext {
		public Token left;
		public Token operator;
		public ExpressionContext right;
		public TerminalNode LET() { return getToken(CalcParser.LET, 0); }
		public TerminalNode Stringliteral() { return getToken(CalcParser.Stringliteral, 0); }
		public TerminalNode EQUAL() { return getToken(CalcParser.EQUAL, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public LetDeclarationContext(VariableDeclarationContext ctx) { copyFrom(ctx); }
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_variableDeclaration);
		try {
			setState(77);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LET:
				_localctx = new LetDeclarationContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(69);
				match(LET);
				setState(70);
				((LetDeclarationContext)_localctx).left = match(Stringliteral);
				setState(71);
				((LetDeclarationContext)_localctx).operator = match(EQUAL);
				setState(72);
				((LetDeclarationContext)_localctx).right = expression(0);
				}
				break;
			case VAL:
				_localctx = new ValDeclarationContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(73);
				match(VAL);
				setState(74);
				((ValDeclarationContext)_localctx).left = match(Stringliteral);
				setState(75);
				((ValDeclarationContext)_localctx).operator = match(EQUAL);
				setState(76);
				((ValDeclarationContext)_localctx).right = expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LocalValDeclarationContext extends ParserRuleContext {
		public LocalValDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_localValDeclaration; }
	 
		public LocalValDeclarationContext() { }
		public void copyFrom(LocalValDeclarationContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class LocalValAssignmentContext extends LocalValDeclarationContext {
		public Token left;
		public Token operator;
		public ExpressionContext right;
		public TerminalNode LOCAL() { return getToken(CalcParser.LOCAL, 0); }
		public TerminalNode Stringliteral() { return getToken(CalcParser.Stringliteral, 0); }
		public TerminalNode EQUAL() { return getToken(CalcParser.EQUAL, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public LocalValAssignmentContext(LocalValDeclarationContext ctx) { copyFrom(ctx); }
	}

	public final LocalValDeclarationContext localValDeclaration() throws RecognitionException {
		LocalValDeclarationContext _localctx = new LocalValDeclarationContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_localValDeclaration);
		try {
			_localctx = new LocalValAssignmentContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			match(LOCAL);
			setState(80);
			((LocalValAssignmentContext)_localctx).left = match(Stringliteral);
			setState(81);
			((LocalValAssignmentContext)_localctx).operator = match(EQUAL);
			setState(82);
			((LocalValAssignmentContext)_localctx).right = expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public StatementContext stmts;
		public TerminalNode OBRACE() { return getToken(CalcParser.OBRACE, 0); }
		public TerminalNode CBRACE() { return getToken(CalcParser.CBRACE, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(84);
			match(OBRACE);
			setState(88);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NOT) | (1L << BOOLEAN) | (1L << NUMBER) | (1L << REAL) | (1L << LET) | (1L << VAL) | (1L << LOCAL) | (1L << OPAR) | (1L << OBRACE) | (1L << IF) | (1L << WHILE) | (1L << CHAR) | (1L << STRING) | (1L << INT) | (1L << BOOL) | (1L << REALNUM) | (1L << Stringliteral))) != 0)) {
				{
				{
				setState(85);
				((BlockContext)_localctx).stmts = statement();
				}
				}
				setState(90);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(91);
			match(CBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrintContext extends ParserRuleContext {
		public Token expr;
		public TerminalNode OPAR() { return getToken(CalcParser.OPAR, 0); }
		public List<TerminalNode> DOUBLEQUOTE() { return getTokens(CalcParser.DOUBLEQUOTE); }
		public TerminalNode DOUBLEQUOTE(int i) {
			return getToken(CalcParser.DOUBLEQUOTE, i);
		}
		public TerminalNode CPAR() { return getToken(CalcParser.CPAR, 0); }
		public TerminalNode Stringliteral() { return getToken(CalcParser.Stringliteral, 0); }
		public PrintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_print; }
	}

	public final PrintContext print() throws RecognitionException {
		PrintContext _localctx = new PrintContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_print);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(93);
			match(OPAR);
			setState(94);
			match(DOUBLEQUOTE);
			setState(95);
			((PrintContext)_localctx).expr = match(Stringliteral);
			setState(96);
			match(DOUBLEQUOTE);
			setState(97);
			match(CPAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParametersContext extends ParserRuleContext {
		public List<DeclarationContext> declaration() {
			return getRuleContexts(DeclarationContext.class);
		}
		public DeclarationContext declaration(int i) {
			return getRuleContext(DeclarationContext.class,i);
		}
		public ParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameters; }
	}

	public final ParametersContext parameters() throws RecognitionException {
		ParametersContext _localctx = new ParametersContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_parameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(99);
			declaration();
			setState(104);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(100);
				match(T__1);
				setState(101);
				declaration();
				}
				}
				setState(106);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionContext extends ParserRuleContext {
		public TypeContext t;
		public Token id;
		public ParametersContext params;
		public BlockContext body;
		public TerminalNode OPAR() { return getToken(CalcParser.OPAR, 0); }
		public TerminalNode CPAR() { return getToken(CalcParser.CPAR, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode Stringliteral() { return getToken(CalcParser.Stringliteral, 0); }
		public ParametersContext parameters() {
			return getRuleContext(ParametersContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public FunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function; }
	}

	public final FunctionContext function() throws RecognitionException {
		FunctionContext _localctx = new FunctionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_function);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			((FunctionContext)_localctx).t = type();
			setState(108);
			((FunctionContext)_localctx).id = match(Stringliteral);
			setState(109);
			match(OPAR);
			setState(110);
			((FunctionContext)_localctx).params = parameters();
			setState(111);
			match(CPAR);
			setState(112);
			((FunctionContext)_localctx).body = block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	 
		public IdentifierContext() { }
		public void copyFrom(IdentifierContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class NumberContext extends IdentifierContext {
		public TerminalNode NUMBER() { return getToken(CalcParser.NUMBER, 0); }
		public NumberContext(IdentifierContext ctx) { copyFrom(ctx); }
	}
	public static class RealContext extends IdentifierContext {
		public TerminalNode REAL() { return getToken(CalcParser.REAL, 0); }
		public RealContext(IdentifierContext ctx) { copyFrom(ctx); }
	}
	public static class StringContext extends IdentifierContext {
		public TerminalNode Stringliteral() { return getToken(CalcParser.Stringliteral, 0); }
		public StringContext(IdentifierContext ctx) { copyFrom(ctx); }
	}
	public static class BooleanContext extends IdentifierContext {
		public TerminalNode BOOLEAN() { return getToken(CalcParser.BOOLEAN, 0); }
		public BooleanContext(IdentifierContext ctx) { copyFrom(ctx); }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_identifier);
		try {
			setState(118);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Stringliteral:
				_localctx = new StringContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(114);
				match(Stringliteral);
				}
				break;
			case NUMBER:
				_localctx = new NumberContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(115);
				match(NUMBER);
				}
				break;
			case REAL:
				_localctx = new RealContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(116);
				match(REAL);
				}
				break;
			case BOOLEAN:
				_localctx = new BooleanContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(117);
				match(BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			expression(0);
			setState(121);
			match(T__0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	 
		public ExpressionContext() { }
		public void copyFrom(ExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class GreaterComparatorContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode GT() { return getToken(CalcParser.GT, 0); }
		public GreaterComparatorContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MultiplicationContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode MUL() { return getToken(CalcParser.MUL, 0); }
		public MultiplicationContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AdditionContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode ADD() { return getToken(CalcParser.ADD, 0); }
		public AdditionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class OrLogicalContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode OR() { return getToken(CalcParser.OR, 0); }
		public OrLogicalContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NotLogicalContext extends ExpressionContext {
		public ExpressionContext left;
		public TerminalNode NOT() { return getToken(CalcParser.NOT, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public NotLogicalContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class EqualComparatorContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode EQUAL() { return getToken(CalcParser.EQUAL, 0); }
		public EqualComparatorContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AssignmentContext extends ExpressionContext {
		public Token left;
		public Token operator;
		public ExpressionContext right;
		public TerminalNode Stringliteral() { return getToken(CalcParser.Stringliteral, 0); }
		public TerminalNode ASSIGNMEMT() { return getToken(CalcParser.ASSIGNMEMT, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AssignmentContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class GreaterEqualComparatorContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode GE() { return getToken(CalcParser.GE, 0); }
		public GreaterEqualComparatorContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AndLogicalContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode AND() { return getToken(CalcParser.AND, 0); }
		public AndLogicalContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SubtractionContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode SUB() { return getToken(CalcParser.SUB, 0); }
		public SubtractionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ModulusContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode MOD() { return getToken(CalcParser.MOD, 0); }
		public ModulusContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class DivisionContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode DIV() { return getToken(CalcParser.DIV, 0); }
		public DivisionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LesserEqualComparatorContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode LE() { return getToken(CalcParser.LE, 0); }
		public LesserEqualComparatorContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class IdentifiersContext extends ExpressionContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public IdentifiersContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ParenthesesContext extends ExpressionContext {
		public ExpressionContext inner;
		public TerminalNode OPAR() { return getToken(CalcParser.OPAR, 0); }
		public TerminalNode CPAR() { return getToken(CalcParser.CPAR, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ParenthesesContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PowerContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode POW() { return getToken(CalcParser.POW, 0); }
		public PowerContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LesserComparatorContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode LT() { return getToken(CalcParser.LT, 0); }
		public LesserComparatorContext(ExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 30;
		enterRecursionRule(_localctx, 30, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(134);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				_localctx = new IdentifiersContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(124);
				identifier();
				}
				break;
			case 2:
				{
				_localctx = new ParenthesesContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(125);
				match(OPAR);
				setState(126);
				((ParenthesesContext)_localctx).inner = expression(0);
				setState(127);
				match(CPAR);
				}
				break;
			case 3:
				{
				_localctx = new NotLogicalContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(129);
				match(NOT);
				setState(130);
				((NotLogicalContext)_localctx).left = expression(2);
				}
				break;
			case 4:
				{
				_localctx = new AssignmentContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(131);
				((AssignmentContext)_localctx).left = match(Stringliteral);
				setState(132);
				((AssignmentContext)_localctx).operator = match(ASSIGNMEMT);
				setState(133);
				((AssignmentContext)_localctx).right = expression(1);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(177);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(175);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
					case 1:
						{
						_localctx = new PowerContext(new ExpressionContext(_parentctx, _parentState));
						((PowerContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(136);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(137);
						((PowerContext)_localctx).operator = match(POW);
						setState(138);
						((PowerContext)_localctx).right = expression(16);
						}
						break;
					case 2:
						{
						_localctx = new MultiplicationContext(new ExpressionContext(_parentctx, _parentState));
						((MultiplicationContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(139);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(140);
						((MultiplicationContext)_localctx).operator = match(MUL);
						setState(141);
						((MultiplicationContext)_localctx).right = expression(15);
						}
						break;
					case 3:
						{
						_localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState));
						((DivisionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(142);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(143);
						((DivisionContext)_localctx).operator = match(DIV);
						setState(144);
						((DivisionContext)_localctx).right = expression(14);
						}
						break;
					case 4:
						{
						_localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState));
						((AdditionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(145);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(146);
						((AdditionContext)_localctx).operator = match(ADD);
						setState(147);
						((AdditionContext)_localctx).right = expression(13);
						}
						break;
					case 5:
						{
						_localctx = new SubtractionContext(new ExpressionContext(_parentctx, _parentState));
						((SubtractionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(148);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(149);
						((SubtractionContext)_localctx).operator = match(SUB);
						setState(150);
						((SubtractionContext)_localctx).right = expression(12);
						}
						break;
					case 6:
						{
						_localctx = new ModulusContext(new ExpressionContext(_parentctx, _parentState));
						((ModulusContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(151);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(152);
						((ModulusContext)_localctx).operator = match(MOD);
						setState(153);
						((ModulusContext)_localctx).right = expression(11);
						}
						break;
					case 7:
						{
						_localctx = new EqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((EqualComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(154);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(155);
						((EqualComparatorContext)_localctx).operator = match(EQUAL);
						setState(156);
						((EqualComparatorContext)_localctx).right = expression(10);
						}
						break;
					case 8:
						{
						_localctx = new GreaterComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((GreaterComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(157);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(158);
						((GreaterComparatorContext)_localctx).operator = match(GT);
						setState(159);
						((GreaterComparatorContext)_localctx).right = expression(9);
						}
						break;
					case 9:
						{
						_localctx = new LesserComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((LesserComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(160);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(161);
						((LesserComparatorContext)_localctx).operator = match(LT);
						setState(162);
						((LesserComparatorContext)_localctx).right = expression(8);
						}
						break;
					case 10:
						{
						_localctx = new GreaterEqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((GreaterEqualComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(163);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(164);
						((GreaterEqualComparatorContext)_localctx).operator = match(GE);
						setState(165);
						((GreaterEqualComparatorContext)_localctx).right = expression(7);
						}
						break;
					case 11:
						{
						_localctx = new LesserEqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((LesserEqualComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(166);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(167);
						((LesserEqualComparatorContext)_localctx).operator = match(LE);
						setState(168);
						((LesserEqualComparatorContext)_localctx).right = expression(6);
						}
						break;
					case 12:
						{
						_localctx = new AndLogicalContext(new ExpressionContext(_parentctx, _parentState));
						((AndLogicalContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(169);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(170);
						((AndLogicalContext)_localctx).operator = match(AND);
						setState(171);
						((AndLogicalContext)_localctx).right = expression(5);
						}
						break;
					case 13:
						{
						_localctx = new OrLogicalContext(new ExpressionContext(_parentctx, _parentState));
						((OrLogicalContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(172);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(173);
						((OrLogicalContext)_localctx).operator = match(OR);
						setState(174);
						((OrLogicalContext)_localctx).right = expression(4);
						}
						break;
					}
					} 
				}
				setState(179);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 15:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 15);
		case 1:
			return precpred(_ctx, 14);
		case 2:
			return precpred(_ctx, 13);
		case 3:
			return precpred(_ctx, 12);
		case 4:
			return precpred(_ctx, 11);
		case 5:
			return precpred(_ctx, 10);
		case 6:
			return precpred(_ctx, 9);
		case 7:
			return precpred(_ctx, 8);
		case 8:
			return precpred(_ctx, 7);
		case 9:
			return precpred(_ctx, 6);
		case 10:
			return precpred(_ctx, 5);
		case 11:
			return precpred(_ctx, 4);
		case 12:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3+\u00b7\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\3\2\3\2\3"+
		"\3\3\3\7\3\'\n\3\f\3\16\3*\13\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4\63\n\4"+
		"\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\b\3"+
		"\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\tP\n\t\3\n\3\n\3\n\3\n\3\n\3"+
		"\13\3\13\7\13Y\n\13\f\13\16\13\\\13\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3"+
		"\f\3\r\3\r\3\r\7\ri\n\r\f\r\16\rl\13\r\3\16\3\16\3\16\3\16\3\16\3\16\3"+
		"\16\3\17\3\17\3\17\3\17\5\17y\n\17\3\20\3\20\3\20\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\5\21\u0089\n\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\7\21\u00b2\n\21\f\21\16\21\u00b5\13"+
		"\21\3\21\2\3 \22\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \2\3\3\2&*\2\u00c4"+
		"\2\"\3\2\2\2\4(\3\2\2\2\6\62\3\2\2\2\b\64\3\2\2\2\n=\3\2\2\2\fB\3\2\2"+
		"\2\16D\3\2\2\2\20O\3\2\2\2\22Q\3\2\2\2\24V\3\2\2\2\26_\3\2\2\2\30e\3\2"+
		"\2\2\32m\3\2\2\2\34x\3\2\2\2\36z\3\2\2\2 \u0088\3\2\2\2\"#\7\3\2\2#\3"+
		"\3\2\2\2$\'\5\6\4\2%\'\5\32\16\2&$\3\2\2\2&%\3\2\2\2\'*\3\2\2\2(&\3\2"+
		"\2\2()\3\2\2\2)\5\3\2\2\2*(\3\2\2\2+\63\5\b\5\2,\63\5\n\6\2-\63\5\20\t"+
		"\2.\63\5\22\n\2/\63\5\16\b\2\60\63\5\36\20\2\61\63\5\24\13\2\62+\3\2\2"+
		"\2\62,\3\2\2\2\62-\3\2\2\2\62.\3\2\2\2\62/\3\2\2\2\62\60\3\2\2\2\62\61"+
		"\3\2\2\2\63\7\3\2\2\2\64\65\7!\2\2\65\66\7\33\2\2\66\67\5 \21\2\678\7"+
		"\34\2\289\7\"\2\29:\5\6\4\2:;\7#\2\2;<\5\6\4\2<\t\3\2\2\2=>\7$\2\2>?\5"+
		" \21\2?@\7%\2\2@A\5\6\4\2A\13\3\2\2\2BC\t\2\2\2C\r\3\2\2\2DE\5\f\7\2E"+
		"F\7+\2\2F\17\3\2\2\2GH\7\30\2\2HI\7+\2\2IJ\7\13\2\2JP\5 \21\2KL\7\31\2"+
		"\2LM\7+\2\2MN\7\13\2\2NP\5 \21\2OG\3\2\2\2OK\3\2\2\2P\21\3\2\2\2QR\7\32"+
		"\2\2RS\7+\2\2ST\7\13\2\2TU\5 \21\2U\23\3\2\2\2VZ\7\35\2\2WY\5\6\4\2XW"+
		"\3\2\2\2Y\\\3\2\2\2ZX\3\2\2\2Z[\3\2\2\2[]\3\2\2\2\\Z\3\2\2\2]^\7\36\2"+
		"\2^\25\3\2\2\2_`\7\33\2\2`a\7\37\2\2ab\7+\2\2bc\7\37\2\2cd\7\34\2\2d\27"+
		"\3\2\2\2ej\5\16\b\2fg\7\4\2\2gi\5\16\b\2hf\3\2\2\2il\3\2\2\2jh\3\2\2\2"+
		"jk\3\2\2\2k\31\3\2\2\2lj\3\2\2\2mn\5\f\7\2no\7+\2\2op\7\33\2\2pq\5\30"+
		"\r\2qr\7\34\2\2rs\5\24\13\2s\33\3\2\2\2ty\7+\2\2uy\7\24\2\2vy\7\25\2\2"+
		"wy\7\17\2\2xt\3\2\2\2xu\3\2\2\2xv\3\2\2\2xw\3\2\2\2y\35\3\2\2\2z{\5 \21"+
		"\2{|\7\3\2\2|\37\3\2\2\2}~\b\21\1\2~\u0089\5\34\17\2\177\u0080\7\33\2"+
		"\2\u0080\u0081\5 \21\2\u0081\u0082\7\34\2\2\u0082\u0089\3\2\2\2\u0083"+
		"\u0084\7\16\2\2\u0084\u0089\5 \21\4\u0085\u0086\7+\2\2\u0086\u0087\7 "+
		"\2\2\u0087\u0089\5 \21\3\u0088}\3\2\2\2\u0088\177\3\2\2\2\u0088\u0083"+
		"\3\2\2\2\u0088\u0085\3\2\2\2\u0089\u00b3\3\2\2\2\u008a\u008b\f\21\2\2"+
		"\u008b\u008c\7\5\2\2\u008c\u00b2\5 \21\22\u008d\u008e\f\20\2\2\u008e\u008f"+
		"\7\6\2\2\u008f\u00b2\5 \21\21\u0090\u0091\f\17\2\2\u0091\u0092\7\7\2\2"+
		"\u0092\u00b2\5 \21\20\u0093\u0094\f\16\2\2\u0094\u0095\7\t\2\2\u0095\u00b2"+
		"\5 \21\17\u0096\u0097\f\r\2\2\u0097\u0098\7\n\2\2\u0098\u00b2\5 \21\16"+
		"\u0099\u009a\f\f\2\2\u009a\u009b\7\b\2\2\u009b\u00b2\5 \21\r\u009c\u009d"+
		"\f\13\2\2\u009d\u009e\7\13\2\2\u009e\u00b2\5 \21\f\u009f\u00a0\f\n\2\2"+
		"\u00a0\u00a1\7\20\2\2\u00a1\u00b2\5 \21\13\u00a2\u00a3\f\t\2\2\u00a3\u00a4"+
		"\7\21\2\2\u00a4\u00b2\5 \21\n\u00a5\u00a6\f\b\2\2\u00a6\u00a7\7\22\2\2"+
		"\u00a7\u00b2\5 \21\t\u00a8\u00a9\f\7\2\2\u00a9\u00aa\7\23\2\2\u00aa\u00b2"+
		"\5 \21\b\u00ab\u00ac\f\6\2\2\u00ac\u00ad\7\f\2\2\u00ad\u00b2\5 \21\7\u00ae"+
		"\u00af\f\5\2\2\u00af\u00b0\7\r\2\2\u00b0\u00b2\5 \21\6\u00b1\u008a\3\2"+
		"\2\2\u00b1\u008d\3\2\2\2\u00b1\u0090\3\2\2\2\u00b1\u0093\3\2\2\2\u00b1"+
		"\u0096\3\2\2\2\u00b1\u0099\3\2\2\2\u00b1\u009c\3\2\2\2\u00b1\u009f\3\2"+
		"\2\2\u00b1\u00a2\3\2\2\2\u00b1\u00a5\3\2\2\2\u00b1\u00a8\3\2\2\2\u00b1"+
		"\u00ab\3\2\2\2\u00b1\u00ae\3\2\2\2\u00b2\u00b5\3\2\2\2\u00b3\u00b1\3\2"+
		"\2\2\u00b3\u00b4\3\2\2\2\u00b4!\3\2\2\2\u00b5\u00b3\3\2\2\2\f&(\62OZj"+
		"x\u0088\u00b1\u00b3";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}