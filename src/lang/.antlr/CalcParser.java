// Generated from /Users/suenkoh/4215_project/calc-slang/src/lang/Calc.g4 by ANTLR 4.9.2
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
		T__0=1, T__1=2, POW=3, MUL=4, DIV=5, MOD=6, ADD=7, SUB=8, EQUAL=9, ARROW=10, 
		AND=11, OR=12, NOT=13, BOOLEAN=14, GT=15, LT=16, GE=17, LE=18, NUMBER=19, 
		REAL=20, WHITESPACE=21, LETTER=22, LET=23, IN=24, END=25, VAL=26, LOCAL=27, 
		FUN=28, FN=29, OPAR=30, CPAR=31, OBRACE=32, CBRACE=33, OSQUARE=34, CSQUARE=35, 
		DOUBLEQUOTE=36, ASSIGNMEMT=37, APPEND=38, CONS=39, IF=40, THEN=41, ELSE=42, 
		WHILE=43, DO=44, CHAR=45, STRING=46, INT=47, BOOL=48, REALNUM=49, Stringliteral=50;
	public static final int
		RULE_emptydeclaration = 0, RULE_start = 1, RULE_statement = 2, RULE_ifThenElseStatement = 3, 
		RULE_whileStatement = 4, RULE_variableDeclaration = 5, RULE_localDeclaration = 6, 
		RULE_letDeclaration = 7, RULE_declarationType = 8, RULE_declarationlist = 9, 
		RULE_identifier = 10, RULE_elements = 11, RULE_listStructure = 12, RULE_expressionStatement = 13, 
		RULE_expression = 14;
	private static String[] makeRuleNames() {
		return new String[] {
			"emptydeclaration", "start", "statement", "ifThenElseStatement", "whileStatement", 
			"variableDeclaration", "localDeclaration", "letDeclaration", "declarationType", 
			"declarationlist", "identifier", "elements", "listStructure", "expressionStatement", 
			"expression"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "','", "'^'", "'*'", "'/'", "'%'", "'+'", "'-'", "'='", 
			"'=>'", null, null, "'not'", null, "'>'", "'<'", "'>='", "'<='", null, 
			null, null, null, "'let'", "'in'", "'end'", "'val'", "'local'", "'fun'", 
			"'fn'", "'('", "')'", "'{'", "'}'", "'['", "']'", "'\"'", "':='", "'@'", 
			"'::'", "'if'", "'then'", "'else'", "'while'", "'do'", "'char'", "'string'", 
			"'int'", "'bool'", "'real'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "POW", "MUL", "DIV", "MOD", "ADD", "SUB", "EQUAL", 
			"ARROW", "AND", "OR", "NOT", "BOOLEAN", "GT", "LT", "GE", "LE", "NUMBER", 
			"REAL", "WHITESPACE", "LETTER", "LET", "IN", "END", "VAL", "LOCAL", "FUN", 
			"FN", "OPAR", "CPAR", "OBRACE", "CBRACE", "OSQUARE", "CSQUARE", "DOUBLEQUOTE", 
			"ASSIGNMEMT", "APPEND", "CONS", "IF", "THEN", "ELSE", "WHILE", "DO", 
			"CHAR", "STRING", "INT", "BOOL", "REALNUM", "Stringliteral"
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
			setState(30);
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
			setState(35);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NOT) | (1L << BOOLEAN) | (1L << NUMBER) | (1L << REAL) | (1L << LET) | (1L << VAL) | (1L << LOCAL) | (1L << FN) | (1L << OPAR) | (1L << OSQUARE) | (1L << DOUBLEQUOTE) | (1L << IF) | (1L << WHILE) | (1L << Stringliteral))) != 0)) {
				{
				{
				setState(32);
				statement();
				}
				}
				setState(37);
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
		public LocalDeclarationContext localDeclaration() {
			return getRuleContext(LocalDeclarationContext.class,0);
		}
		public LetDeclarationContext letDeclaration() {
			return getRuleContext(LetDeclarationContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
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
			setState(44);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(38);
				ifThenElseStatement();
				}
				break;
			case WHILE:
				enterOuterAlt(_localctx, 2);
				{
				setState(39);
				whileStatement();
				}
				break;
			case VAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(40);
				variableDeclaration();
				}
				break;
			case LOCAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(41);
				localDeclaration();
				}
				break;
			case LET:
				enterOuterAlt(_localctx, 5);
				{
				setState(42);
				letDeclaration();
				}
				break;
			case NOT:
			case BOOLEAN:
			case NUMBER:
			case REAL:
			case FN:
			case OPAR:
			case OSQUARE:
			case DOUBLEQUOTE:
			case Stringliteral:
				enterOuterAlt(_localctx, 6);
				{
				setState(43);
				expressionStatement();
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
			setState(46);
			match(IF);
			setState(47);
			match(OPAR);
			setState(48);
			((IfThenElseConditionContext)_localctx).test = expression(0);
			setState(49);
			match(CPAR);
			setState(50);
			match(THEN);
			setState(51);
			((IfThenElseConditionContext)_localctx).consequent = statement();
			setState(52);
			match(ELSE);
			setState(53);
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
			setState(55);
			match(WHILE);
			setState(56);
			((WhileConditionContext)_localctx).test = expression(0);
			setState(57);
			match(DO);
			setState(58);
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

	public static class VariableDeclarationContext extends ParserRuleContext {
		public Token left;
		public Token operator;
		public ExpressionContext right;
		public TerminalNode VAL() { return getToken(CalcParser.VAL, 0); }
		public TerminalNode Stringliteral() { return getToken(CalcParser.Stringliteral, 0); }
		public TerminalNode EQUAL() { return getToken(CalcParser.EQUAL, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			match(VAL);
			setState(61);
			((VariableDeclarationContext)_localctx).left = match(Stringliteral);
			setState(62);
			((VariableDeclarationContext)_localctx).operator = match(EQUAL);
			setState(63);
			((VariableDeclarationContext)_localctx).right = expression(0);
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

	public static class LocalDeclarationContext extends ParserRuleContext {
		public DeclarationlistContext del;
		public DeclarationlistContext delist;
		public TerminalNode LOCAL() { return getToken(CalcParser.LOCAL, 0); }
		public TerminalNode IN() { return getToken(CalcParser.IN, 0); }
		public TerminalNode END() { return getToken(CalcParser.END, 0); }
		public List<DeclarationlistContext> declarationlist() {
			return getRuleContexts(DeclarationlistContext.class);
		}
		public DeclarationlistContext declarationlist(int i) {
			return getRuleContext(DeclarationlistContext.class,i);
		}
		public LocalDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_localDeclaration; }
	}

	public final LocalDeclarationContext localDeclaration() throws RecognitionException {
		LocalDeclarationContext _localctx = new LocalDeclarationContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_localDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(65);
			match(LOCAL);
			setState(66);
			((LocalDeclarationContext)_localctx).del = declarationlist();
			setState(67);
			match(IN);
			setState(68);
			((LocalDeclarationContext)_localctx).delist = declarationlist();
			setState(69);
			match(END);
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

	public static class LetDeclarationContext extends ParserRuleContext {
		public DeclarationTypeContext del;
		public DeclarationlistContext delist;
		public TerminalNode LET() { return getToken(CalcParser.LET, 0); }
		public TerminalNode IN() { return getToken(CalcParser.IN, 0); }
		public TerminalNode END() { return getToken(CalcParser.END, 0); }
		public DeclarationTypeContext declarationType() {
			return getRuleContext(DeclarationTypeContext.class,0);
		}
		public DeclarationlistContext declarationlist() {
			return getRuleContext(DeclarationlistContext.class,0);
		}
		public LetDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_letDeclaration; }
	}

	public final LetDeclarationContext letDeclaration() throws RecognitionException {
		LetDeclarationContext _localctx = new LetDeclarationContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_letDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			match(LET);
			setState(72);
			((LetDeclarationContext)_localctx).del = declarationType();
			setState(73);
			match(IN);
			setState(74);
			((LetDeclarationContext)_localctx).delist = declarationlist();
			setState(75);
			match(END);
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

	public static class DeclarationTypeContext extends ParserRuleContext {
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public LocalDeclarationContext localDeclaration() {
			return getRuleContext(LocalDeclarationContext.class,0);
		}
		public LetDeclarationContext letDeclaration() {
			return getRuleContext(LetDeclarationContext.class,0);
		}
		public DeclarationTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declarationType; }
	}

	public final DeclarationTypeContext declarationType() throws RecognitionException {
		DeclarationTypeContext _localctx = new DeclarationTypeContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_declarationType);
		try {
			setState(80);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(77);
				variableDeclaration();
				}
				break;
			case LOCAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(78);
				localDeclaration();
				}
				break;
			case LET:
				enterOuterAlt(_localctx, 3);
				{
				setState(79);
				letDeclaration();
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

	public static class DeclarationlistContext extends ParserRuleContext {
		public List<DeclarationTypeContext> declarationType() {
			return getRuleContexts(DeclarationTypeContext.class);
		}
		public DeclarationTypeContext declarationType(int i) {
			return getRuleContext(DeclarationTypeContext.class,i);
		}
		public DeclarationlistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declarationlist; }
	}

	public final DeclarationlistContext declarationlist() throws RecognitionException {
		DeclarationlistContext _localctx = new DeclarationlistContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_declarationlist);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LET) | (1L << VAL) | (1L << LOCAL))) != 0)) {
				{
				{
				setState(82);
				declarationType();
				}
				}
				setState(87);
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
	public static class IDContext extends IdentifierContext {
		public TerminalNode Stringliteral() { return getToken(CalcParser.Stringliteral, 0); }
		public IDContext(IdentifierContext ctx) { copyFrom(ctx); }
	}
	public static class BooleanContext extends IdentifierContext {
		public TerminalNode BOOLEAN() { return getToken(CalcParser.BOOLEAN, 0); }
		public BooleanContext(IdentifierContext ctx) { copyFrom(ctx); }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_identifier);
		try {
			setState(92);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Stringliteral:
				_localctx = new IDContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(88);
				match(Stringliteral);
				}
				break;
			case NUMBER:
				_localctx = new NumberContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(89);
				match(NUMBER);
				}
				break;
			case REAL:
				_localctx = new RealContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(90);
				match(REAL);
				}
				break;
			case BOOLEAN:
				_localctx = new BooleanContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(91);
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

	public static class ElementsContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ElementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elements; }
	}

	public final ElementsContext elements() throws RecognitionException {
		ElementsContext _localctx = new ElementsContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_elements);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(94);
			expression(0);
			setState(99);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(95);
				match(T__1);
				setState(96);
				expression(0);
				}
				}
				setState(101);
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

	public static class ListStructureContext extends ParserRuleContext {
		public ElementsContext element;
		public TerminalNode OSQUARE() { return getToken(CalcParser.OSQUARE, 0); }
		public TerminalNode CSQUARE() { return getToken(CalcParser.CSQUARE, 0); }
		public ElementsContext elements() {
			return getRuleContext(ElementsContext.class,0);
		}
		public ListStructureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listStructure; }
	}

	public final ListStructureContext listStructure() throws RecognitionException {
		ListStructureContext _localctx = new ListStructureContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_listStructure);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(102);
			match(OSQUARE);
			setState(104);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NOT) | (1L << BOOLEAN) | (1L << NUMBER) | (1L << REAL) | (1L << FN) | (1L << OPAR) | (1L << OSQUARE) | (1L << DOUBLEQUOTE) | (1L << Stringliteral))) != 0)) {
				{
				setState(103);
				((ListStructureContext)_localctx).element = elements();
				}
			}

			setState(106);
			match(CSQUARE);
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
		enterRule(_localctx, 26, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(108);
			expression(0);
			setState(109);
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
	public static class ListConsContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ElementsContext right;
		public TerminalNode OSQUARE() { return getToken(CalcParser.OSQUARE, 0); }
		public TerminalNode CSQUARE() { return getToken(CalcParser.CSQUARE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode CONS() { return getToken(CalcParser.CONS, 0); }
		public ElementsContext elements() {
			return getRuleContext(ElementsContext.class,0);
		}
		public ListConsContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class StringContext extends ExpressionContext {
		public List<TerminalNode> DOUBLEQUOTE() { return getTokens(CalcParser.DOUBLEQUOTE); }
		public TerminalNode DOUBLEQUOTE(int i) {
			return getToken(CalcParser.DOUBLEQUOTE, i);
		}
		public TerminalNode Stringliteral() { return getToken(CalcParser.Stringliteral, 0); }
		public StringContext(ExpressionContext ctx) { copyFrom(ctx); }
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
	public static class ListContext extends ExpressionContext {
		public ListStructureContext left;
		public ListStructureContext listStructure() {
			return getRuleContext(ListStructureContext.class,0);
		}
		public ListContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ListAppendContext extends ExpressionContext {
		public ElementsContext left;
		public Token operator;
		public ElementsContext right;
		public List<TerminalNode> OSQUARE() { return getTokens(CalcParser.OSQUARE); }
		public TerminalNode OSQUARE(int i) {
			return getToken(CalcParser.OSQUARE, i);
		}
		public List<TerminalNode> CSQUARE() { return getTokens(CalcParser.CSQUARE); }
		public TerminalNode CSQUARE(int i) {
			return getToken(CalcParser.CSQUARE, i);
		}
		public TerminalNode APPEND() { return getToken(CalcParser.APPEND, 0); }
		public List<ElementsContext> elements() {
			return getRuleContexts(ElementsContext.class);
		}
		public ElementsContext elements(int i) {
			return getRuleContext(ElementsContext.class,i);
		}
		public ListAppendContext(ExpressionContext ctx) { copyFrom(ctx); }
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
	public static class FunctionCallContext extends ExpressionContext {
		public IdentifierContext name;
		public IdentifierContext params;
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public FunctionCallContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class IdentifiersContext extends ExpressionContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public IdentifiersContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LambdaContext extends ExpressionContext {
		public Token name;
		public Token operator;
		public ExpressionContext right;
		public TerminalNode FN() { return getToken(CalcParser.FN, 0); }
		public TerminalNode Stringliteral() { return getToken(CalcParser.Stringliteral, 0); }
		public TerminalNode ARROW() { return getToken(CalcParser.ARROW, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public LambdaContext(ExpressionContext ctx) { copyFrom(ctx); }
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
	public static class TupleContext extends ExpressionContext {
		public TerminalNode OPAR() { return getToken(CalcParser.OPAR, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode CPAR() { return getToken(CalcParser.CPAR, 0); }
		public TupleContext(ExpressionContext ctx) { copyFrom(ctx); }
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
		int _startState = 28;
		enterRecursionRule(_localctx, 28, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				_localctx = new IdentifiersContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(112);
				identifier();
				}
				break;
			case 2:
				{
				_localctx = new StringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(113);
				match(DOUBLEQUOTE);
				setState(114);
				match(Stringliteral);
				setState(115);
				match(DOUBLEQUOTE);
				}
				break;
			case 3:
				{
				_localctx = new ParenthesesContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(116);
				match(OPAR);
				setState(117);
				((ParenthesesContext)_localctx).inner = expression(0);
				setState(118);
				match(CPAR);
				}
				break;
			case 4:
				{
				_localctx = new TupleContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(120);
				match(OPAR);
				setState(121);
				expression(0);
				setState(126);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__1) {
					{
					{
					setState(122);
					match(T__1);
					setState(123);
					expression(0);
					}
					}
					setState(128);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(129);
				match(CPAR);
				}
				break;
			case 5:
				{
				_localctx = new FunctionCallContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(131);
				((FunctionCallContext)_localctx).name = identifier();
				setState(132);
				((FunctionCallContext)_localctx).params = identifier();
				}
				break;
			case 6:
				{
				_localctx = new NotLogicalContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(134);
				match(NOT);
				setState(135);
				((NotLogicalContext)_localctx).left = expression(6);
				}
				break;
			case 7:
				{
				_localctx = new ListContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(136);
				((ListContext)_localctx).left = listStructure();
				}
				break;
			case 8:
				{
				_localctx = new ListAppendContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(137);
				match(OSQUARE);
				setState(139);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NOT) | (1L << BOOLEAN) | (1L << NUMBER) | (1L << REAL) | (1L << FN) | (1L << OPAR) | (1L << OSQUARE) | (1L << DOUBLEQUOTE) | (1L << Stringliteral))) != 0)) {
					{
					setState(138);
					((ListAppendContext)_localctx).left = elements();
					}
				}

				setState(141);
				match(CSQUARE);
				setState(142);
				((ListAppendContext)_localctx).operator = match(APPEND);
				setState(143);
				match(OSQUARE);
				setState(145);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NOT) | (1L << BOOLEAN) | (1L << NUMBER) | (1L << REAL) | (1L << FN) | (1L << OPAR) | (1L << OSQUARE) | (1L << DOUBLEQUOTE) | (1L << Stringliteral))) != 0)) {
					{
					setState(144);
					((ListAppendContext)_localctx).right = elements();
					}
				}

				setState(147);
				match(CSQUARE);
				}
				break;
			case 9:
				{
				_localctx = new AssignmentContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(148);
				((AssignmentContext)_localctx).left = match(Stringliteral);
				setState(149);
				((AssignmentContext)_localctx).operator = match(ASSIGNMEMT);
				setState(150);
				((AssignmentContext)_localctx).right = expression(2);
				}
				break;
			case 10:
				{
				_localctx = new LambdaContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(151);
				match(FN);
				setState(152);
				((LambdaContext)_localctx).name = match(Stringliteral);
				setState(153);
				((LambdaContext)_localctx).operator = match(ARROW);
				setState(154);
				((LambdaContext)_localctx).right = expression(1);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(205);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(203);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
					case 1:
						{
						_localctx = new PowerContext(new ExpressionContext(_parentctx, _parentState));
						((PowerContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(157);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(158);
						((PowerContext)_localctx).operator = match(POW);
						setState(159);
						((PowerContext)_localctx).right = expression(20);
						}
						break;
					case 2:
						{
						_localctx = new MultiplicationContext(new ExpressionContext(_parentctx, _parentState));
						((MultiplicationContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(160);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(161);
						((MultiplicationContext)_localctx).operator = match(MUL);
						setState(162);
						((MultiplicationContext)_localctx).right = expression(19);
						}
						break;
					case 3:
						{
						_localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState));
						((DivisionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(163);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(164);
						((DivisionContext)_localctx).operator = match(DIV);
						setState(165);
						((DivisionContext)_localctx).right = expression(18);
						}
						break;
					case 4:
						{
						_localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState));
						((AdditionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(166);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(167);
						((AdditionContext)_localctx).operator = match(ADD);
						setState(168);
						((AdditionContext)_localctx).right = expression(17);
						}
						break;
					case 5:
						{
						_localctx = new SubtractionContext(new ExpressionContext(_parentctx, _parentState));
						((SubtractionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(169);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(170);
						((SubtractionContext)_localctx).operator = match(SUB);
						setState(171);
						((SubtractionContext)_localctx).right = expression(16);
						}
						break;
					case 6:
						{
						_localctx = new ModulusContext(new ExpressionContext(_parentctx, _parentState));
						((ModulusContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(172);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(173);
						((ModulusContext)_localctx).operator = match(MOD);
						setState(174);
						((ModulusContext)_localctx).right = expression(15);
						}
						break;
					case 7:
						{
						_localctx = new EqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((EqualComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(175);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(176);
						((EqualComparatorContext)_localctx).operator = match(EQUAL);
						setState(177);
						((EqualComparatorContext)_localctx).right = expression(14);
						}
						break;
					case 8:
						{
						_localctx = new GreaterComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((GreaterComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(178);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(179);
						((GreaterComparatorContext)_localctx).operator = match(GT);
						setState(180);
						((GreaterComparatorContext)_localctx).right = expression(13);
						}
						break;
					case 9:
						{
						_localctx = new LesserComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((LesserComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(181);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(182);
						((LesserComparatorContext)_localctx).operator = match(LT);
						setState(183);
						((LesserComparatorContext)_localctx).right = expression(12);
						}
						break;
					case 10:
						{
						_localctx = new GreaterEqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((GreaterEqualComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(184);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(185);
						((GreaterEqualComparatorContext)_localctx).operator = match(GE);
						setState(186);
						((GreaterEqualComparatorContext)_localctx).right = expression(11);
						}
						break;
					case 11:
						{
						_localctx = new LesserEqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((LesserEqualComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(187);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(188);
						((LesserEqualComparatorContext)_localctx).operator = match(LE);
						setState(189);
						((LesserEqualComparatorContext)_localctx).right = expression(10);
						}
						break;
					case 12:
						{
						_localctx = new AndLogicalContext(new ExpressionContext(_parentctx, _parentState));
						((AndLogicalContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(190);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(191);
						((AndLogicalContext)_localctx).operator = match(AND);
						setState(192);
						((AndLogicalContext)_localctx).right = expression(9);
						}
						break;
					case 13:
						{
						_localctx = new OrLogicalContext(new ExpressionContext(_parentctx, _parentState));
						((OrLogicalContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(193);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(194);
						((OrLogicalContext)_localctx).operator = match(OR);
						setState(195);
						((OrLogicalContext)_localctx).right = expression(8);
						}
						break;
					case 14:
						{
						_localctx = new ListConsContext(new ExpressionContext(_parentctx, _parentState));
						((ListConsContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(196);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(197);
						((ListConsContext)_localctx).operator = match(CONS);
						setState(198);
						match(OSQUARE);
						setState(200);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NOT) | (1L << BOOLEAN) | (1L << NUMBER) | (1L << REAL) | (1L << FN) | (1L << OPAR) | (1L << OSQUARE) | (1L << DOUBLEQUOTE) | (1L << Stringliteral))) != 0)) {
							{
							setState(199);
							((ListConsContext)_localctx).right = elements();
							}
						}

						setState(202);
						match(CSQUARE);
						}
						break;
					}
					} 
				}
				setState(207);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
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
		case 14:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 19);
		case 1:
			return precpred(_ctx, 18);
		case 2:
			return precpred(_ctx, 17);
		case 3:
			return precpred(_ctx, 16);
		case 4:
			return precpred(_ctx, 15);
		case 5:
			return precpred(_ctx, 14);
		case 6:
			return precpred(_ctx, 13);
		case 7:
			return precpred(_ctx, 12);
		case 8:
			return precpred(_ctx, 11);
		case 9:
			return precpred(_ctx, 10);
		case 10:
			return precpred(_ctx, 9);
		case 11:
			return precpred(_ctx, 8);
		case 12:
			return precpred(_ctx, 7);
		case 13:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\64\u00d3\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\3\2\3\3\7\3$\n"+
		"\3\f\3\16\3\'\13\3\3\4\3\4\3\4\3\4\3\4\3\4\5\4/\n\4\3\5\3\5\3\5\3\5\3"+
		"\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\5\nS\n\n\3\13\7\13V\n"+
		"\13\f\13\16\13Y\13\13\3\f\3\f\3\f\3\f\5\f_\n\f\3\r\3\r\3\r\7\rd\n\r\f"+
		"\r\16\rg\13\r\3\16\3\16\5\16k\n\16\3\16\3\16\3\17\3\17\3\17\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\7\20\177\n\20"+
		"\f\20\16\20\u0082\13\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3"+
		"\20\5\20\u008e\n\20\3\20\3\20\3\20\3\20\5\20\u0094\n\20\3\20\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\5\20\u009e\n\20\3\20\3\20\3\20\3\20\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\5\20\u00cb\n\20\3\20\7\20"+
		"\u00ce\n\20\f\20\16\20\u00d1\13\20\3\20\2\3\36\21\2\4\6\b\n\f\16\20\22"+
		"\24\26\30\32\34\36\2\2\2\u00ec\2 \3\2\2\2\4%\3\2\2\2\6.\3\2\2\2\b\60\3"+
		"\2\2\2\n9\3\2\2\2\f>\3\2\2\2\16C\3\2\2\2\20I\3\2\2\2\22R\3\2\2\2\24W\3"+
		"\2\2\2\26^\3\2\2\2\30`\3\2\2\2\32h\3\2\2\2\34n\3\2\2\2\36\u009d\3\2\2"+
		"\2 !\7\3\2\2!\3\3\2\2\2\"$\5\6\4\2#\"\3\2\2\2$\'\3\2\2\2%#\3\2\2\2%&\3"+
		"\2\2\2&\5\3\2\2\2\'%\3\2\2\2(/\5\b\5\2)/\5\n\6\2*/\5\f\7\2+/\5\16\b\2"+
		",/\5\20\t\2-/\5\34\17\2.(\3\2\2\2.)\3\2\2\2.*\3\2\2\2.+\3\2\2\2.,\3\2"+
		"\2\2.-\3\2\2\2/\7\3\2\2\2\60\61\7*\2\2\61\62\7 \2\2\62\63\5\36\20\2\63"+
		"\64\7!\2\2\64\65\7+\2\2\65\66\5\6\4\2\66\67\7,\2\2\678\5\6\4\28\t\3\2"+
		"\2\29:\7-\2\2:;\5\36\20\2;<\7.\2\2<=\5\6\4\2=\13\3\2\2\2>?\7\34\2\2?@"+
		"\7\64\2\2@A\7\13\2\2AB\5\36\20\2B\r\3\2\2\2CD\7\35\2\2DE\5\24\13\2EF\7"+
		"\32\2\2FG\5\24\13\2GH\7\33\2\2H\17\3\2\2\2IJ\7\31\2\2JK\5\22\n\2KL\7\32"+
		"\2\2LM\5\24\13\2MN\7\33\2\2N\21\3\2\2\2OS\5\f\7\2PS\5\16\b\2QS\5\20\t"+
		"\2RO\3\2\2\2RP\3\2\2\2RQ\3\2\2\2S\23\3\2\2\2TV\5\22\n\2UT\3\2\2\2VY\3"+
		"\2\2\2WU\3\2\2\2WX\3\2\2\2X\25\3\2\2\2YW\3\2\2\2Z_\7\64\2\2[_\7\25\2\2"+
		"\\_\7\26\2\2]_\7\20\2\2^Z\3\2\2\2^[\3\2\2\2^\\\3\2\2\2^]\3\2\2\2_\27\3"+
		"\2\2\2`e\5\36\20\2ab\7\4\2\2bd\5\36\20\2ca\3\2\2\2dg\3\2\2\2ec\3\2\2\2"+
		"ef\3\2\2\2f\31\3\2\2\2ge\3\2\2\2hj\7$\2\2ik\5\30\r\2ji\3\2\2\2jk\3\2\2"+
		"\2kl\3\2\2\2lm\7%\2\2m\33\3\2\2\2no\5\36\20\2op\7\3\2\2p\35\3\2\2\2qr"+
		"\b\20\1\2r\u009e\5\26\f\2st\7&\2\2tu\7\64\2\2u\u009e\7&\2\2vw\7 \2\2w"+
		"x\5\36\20\2xy\7!\2\2y\u009e\3\2\2\2z{\7 \2\2{\u0080\5\36\20\2|}\7\4\2"+
		"\2}\177\5\36\20\2~|\3\2\2\2\177\u0082\3\2\2\2\u0080~\3\2\2\2\u0080\u0081"+
		"\3\2\2\2\u0081\u0083\3\2\2\2\u0082\u0080\3\2\2\2\u0083\u0084\7!\2\2\u0084"+
		"\u009e\3\2\2\2\u0085\u0086\5\26\f\2\u0086\u0087\5\26\f\2\u0087\u009e\3"+
		"\2\2\2\u0088\u0089\7\17\2\2\u0089\u009e\5\36\20\b\u008a\u009e\5\32\16"+
		"\2\u008b\u008d\7$\2\2\u008c\u008e\5\30\r\2\u008d\u008c\3\2\2\2\u008d\u008e"+
		"\3\2\2\2\u008e\u008f\3\2\2\2\u008f\u0090\7%\2\2\u0090\u0091\7(\2\2\u0091"+
		"\u0093\7$\2\2\u0092\u0094\5\30\r\2\u0093\u0092\3\2\2\2\u0093\u0094\3\2"+
		"\2\2\u0094\u0095\3\2\2\2\u0095\u009e\7%\2\2\u0096\u0097\7\64\2\2\u0097"+
		"\u0098\7\'\2\2\u0098\u009e\5\36\20\4\u0099\u009a\7\37\2\2\u009a\u009b"+
		"\7\64\2\2\u009b\u009c\7\f\2\2\u009c\u009e\5\36\20\3\u009dq\3\2\2\2\u009d"+
		"s\3\2\2\2\u009dv\3\2\2\2\u009dz\3\2\2\2\u009d\u0085\3\2\2\2\u009d\u0088"+
		"\3\2\2\2\u009d\u008a\3\2\2\2\u009d\u008b\3\2\2\2\u009d\u0096\3\2\2\2\u009d"+
		"\u0099\3\2\2\2\u009e\u00cf\3\2\2\2\u009f\u00a0\f\25\2\2\u00a0\u00a1\7"+
		"\5\2\2\u00a1\u00ce\5\36\20\26\u00a2\u00a3\f\24\2\2\u00a3\u00a4\7\6\2\2"+
		"\u00a4\u00ce\5\36\20\25\u00a5\u00a6\f\23\2\2\u00a6\u00a7\7\7\2\2\u00a7"+
		"\u00ce\5\36\20\24\u00a8\u00a9\f\22\2\2\u00a9\u00aa\7\t\2\2\u00aa\u00ce"+
		"\5\36\20\23\u00ab\u00ac\f\21\2\2\u00ac\u00ad\7\n\2\2\u00ad\u00ce\5\36"+
		"\20\22\u00ae\u00af\f\20\2\2\u00af\u00b0\7\b\2\2\u00b0\u00ce\5\36\20\21"+
		"\u00b1\u00b2\f\17\2\2\u00b2\u00b3\7\13\2\2\u00b3\u00ce\5\36\20\20\u00b4"+
		"\u00b5\f\16\2\2\u00b5\u00b6\7\21\2\2\u00b6\u00ce\5\36\20\17\u00b7\u00b8"+
		"\f\r\2\2\u00b8\u00b9\7\22\2\2\u00b9\u00ce\5\36\20\16\u00ba\u00bb\f\f\2"+
		"\2\u00bb\u00bc\7\23\2\2\u00bc\u00ce\5\36\20\r\u00bd\u00be\f\13\2\2\u00be"+
		"\u00bf\7\24\2\2\u00bf\u00ce\5\36\20\f\u00c0\u00c1\f\n\2\2\u00c1\u00c2"+
		"\7\r\2\2\u00c2\u00ce\5\36\20\13\u00c3\u00c4\f\t\2\2\u00c4\u00c5\7\16\2"+
		"\2\u00c5\u00ce\5\36\20\n\u00c6\u00c7\f\5\2\2\u00c7\u00c8\7)\2\2\u00c8"+
		"\u00ca\7$\2\2\u00c9\u00cb\5\30\r\2\u00ca\u00c9\3\2\2\2\u00ca\u00cb\3\2"+
		"\2\2\u00cb\u00cc\3\2\2\2\u00cc\u00ce\7%\2\2\u00cd\u009f\3\2\2\2\u00cd"+
		"\u00a2\3\2\2\2\u00cd\u00a5\3\2\2\2\u00cd\u00a8\3\2\2\2\u00cd\u00ab\3\2"+
		"\2\2\u00cd\u00ae\3\2\2\2\u00cd\u00b1\3\2\2\2\u00cd\u00b4\3\2\2\2\u00cd"+
		"\u00b7\3\2\2\2\u00cd\u00ba\3\2\2\2\u00cd\u00bd\3\2\2\2\u00cd\u00c0\3\2"+
		"\2\2\u00cd\u00c3\3\2\2\2\u00cd\u00c6\3\2\2\2\u00ce\u00d1\3\2\2\2\u00cf"+
		"\u00cd\3\2\2\2\u00cf\u00d0\3\2\2\2\u00d0\37\3\2\2\2\u00d1\u00cf\3\2\2"+
		"\2\20%.RW^ej\u0080\u008d\u0093\u009d\u00ca\u00cd\u00cf";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}