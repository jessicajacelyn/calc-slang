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
		RULE_identifier = 10, RULE_elements = 11, RULE_listStructure = 12, RULE_listInput = 13, 
		RULE_expressionStatement = 14, RULE_expression = 15;
	private static String[] makeRuleNames() {
		return new String[] {
			"emptydeclaration", "start", "statement", "ifThenElseStatement", "whileStatement", 
			"variableDeclaration", "localDeclaration", "letDeclaration", "declarationType", 
			"declarationlist", "identifier", "elements", "listStructure", "listInput", 
			"expressionStatement", "expression"
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
			setState(37);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NOT) | (1L << BOOLEAN) | (1L << NUMBER) | (1L << REAL) | (1L << LET) | (1L << VAL) | (1L << LOCAL) | (1L << FN) | (1L << OPAR) | (1L << OSQUARE) | (1L << DOUBLEQUOTE) | (1L << IF) | (1L << WHILE) | (1L << Stringliteral))) != 0)) {
				{
				{
				setState(34);
				statement();
				}
				}
				setState(39);
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
			setState(46);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(40);
				ifThenElseStatement();
				}
				break;
			case WHILE:
				enterOuterAlt(_localctx, 2);
				{
				setState(41);
				whileStatement();
				}
				break;
			case VAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(42);
				variableDeclaration();
				}
				break;
			case LOCAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(43);
				localDeclaration();
				}
				break;
			case LET:
				enterOuterAlt(_localctx, 5);
				{
				setState(44);
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
				setState(45);
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
			setState(48);
			match(IF);
			setState(49);
			match(OPAR);
			setState(50);
			((IfThenElseConditionContext)_localctx).test = expression(0);
			setState(51);
			match(CPAR);
			setState(52);
			match(THEN);
			setState(53);
			((IfThenElseConditionContext)_localctx).consequent = statement();
			setState(54);
			match(ELSE);
			setState(55);
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
			setState(57);
			match(WHILE);
			setState(58);
			((WhileConditionContext)_localctx).test = expression(0);
			setState(59);
			match(DO);
			setState(60);
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
			setState(62);
			match(VAL);
			setState(63);
			((VariableDeclarationContext)_localctx).left = match(Stringliteral);
			setState(64);
			((VariableDeclarationContext)_localctx).operator = match(EQUAL);
			setState(65);
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
			setState(67);
			match(LOCAL);
			setState(68);
			((LocalDeclarationContext)_localctx).del = declarationlist();
			setState(69);
			match(IN);
			setState(70);
			((LocalDeclarationContext)_localctx).delist = declarationlist();
			setState(71);
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
			setState(73);
			match(LET);
			setState(74);
			((LetDeclarationContext)_localctx).del = declarationType();
			setState(75);
			match(IN);
			setState(76);
			((LetDeclarationContext)_localctx).delist = declarationlist();
			setState(77);
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
			setState(82);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(79);
				variableDeclaration();
				}
				break;
			case LOCAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(80);
				localDeclaration();
				}
				break;
			case LET:
				enterOuterAlt(_localctx, 3);
				{
				setState(81);
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
			setState(87);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LET) | (1L << VAL) | (1L << LOCAL))) != 0)) {
				{
				{
				setState(84);
				declarationType();
				}
				}
				setState(89);
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
			setState(94);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Stringliteral:
				_localctx = new IDContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(90);
				match(Stringliteral);
				}
				break;
			case NUMBER:
				_localctx = new NumberContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(91);
				match(NUMBER);
				}
				break;
			case REAL:
				_localctx = new RealContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(92);
				match(REAL);
				}
				break;
			case BOOLEAN:
				_localctx = new BooleanContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(93);
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
			setState(96);
			expression(0);
			setState(101);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(97);
				match(T__1);
				setState(98);
				expression(0);
				}
				}
				setState(103);
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
			setState(104);
			match(OSQUARE);
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NOT) | (1L << BOOLEAN) | (1L << NUMBER) | (1L << REAL) | (1L << FN) | (1L << OPAR) | (1L << OSQUARE) | (1L << DOUBLEQUOTE) | (1L << Stringliteral))) != 0)) {
				{
				setState(105);
				((ListStructureContext)_localctx).element = elements();
				}
			}

			setState(108);
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

	public static class ListInputContext extends ParserRuleContext {
		public ListStructureContext listStructure() {
			return getRuleContext(ListStructureContext.class,0);
		}
		public TerminalNode Stringliteral() { return getToken(CalcParser.Stringliteral, 0); }
		public ListInputContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listInput; }
	}

	public final ListInputContext listInput() throws RecognitionException {
		ListInputContext _localctx = new ListInputContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_listInput);
		try {
			setState(112);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OSQUARE:
				enterOuterAlt(_localctx, 1);
				{
				setState(110);
				listStructure();
				}
				break;
			case Stringliteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(111);
				match(Stringliteral);
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
			setState(114);
			expression(0);
			setState(115);
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
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode CONS() { return getToken(CalcParser.CONS, 0); }
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
	public static class ListAppendContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode APPEND() { return getToken(CalcParser.APPEND, 0); }
		public ListAppendContext(ExpressionContext ctx) { copyFrom(ctx); }
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
		int _startState = 30;
		enterRecursionRule(_localctx, 30, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(150);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				_localctx = new IdentifiersContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(118);
				identifier();
				}
				break;
			case 2:
				{
				_localctx = new StringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(119);
				match(DOUBLEQUOTE);
				setState(120);
				match(Stringliteral);
				setState(121);
				match(DOUBLEQUOTE);
				}
				break;
			case 3:
				{
				_localctx = new ParenthesesContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(122);
				match(OPAR);
				setState(123);
				((ParenthesesContext)_localctx).inner = expression(0);
				setState(124);
				match(CPAR);
				}
				break;
			case 4:
				{
				_localctx = new TupleContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(126);
				match(OPAR);
				setState(127);
				expression(0);
				setState(132);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__1) {
					{
					{
					setState(128);
					match(T__1);
					setState(129);
					expression(0);
					}
					}
					setState(134);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(135);
				match(CPAR);
				}
				break;
			case 5:
				{
				_localctx = new FunctionCallContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(137);
				((FunctionCallContext)_localctx).name = identifier();
				setState(138);
				((FunctionCallContext)_localctx).params = identifier();
				}
				break;
			case 6:
				{
				_localctx = new NotLogicalContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(140);
				match(NOT);
				setState(141);
				((NotLogicalContext)_localctx).left = expression(6);
				}
				break;
			case 7:
				{
				_localctx = new ListContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(142);
				((ListContext)_localctx).left = listStructure();
				}
				break;
			case 8:
				{
				_localctx = new AssignmentContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(143);
				((AssignmentContext)_localctx).left = match(Stringliteral);
				setState(144);
				((AssignmentContext)_localctx).operator = match(ASSIGNMEMT);
				setState(145);
				((AssignmentContext)_localctx).right = expression(2);
				}
				break;
			case 9:
				{
				_localctx = new LambdaContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(146);
				match(FN);
				setState(147);
				((LambdaContext)_localctx).name = match(Stringliteral);
				setState(148);
				((LambdaContext)_localctx).operator = match(ARROW);
				setState(149);
				((LambdaContext)_localctx).right = expression(1);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(199);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(197);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
					case 1:
						{
						_localctx = new PowerContext(new ExpressionContext(_parentctx, _parentState));
						((PowerContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(152);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(153);
						((PowerContext)_localctx).operator = match(POW);
						setState(154);
						((PowerContext)_localctx).right = expression(20);
						}
						break;
					case 2:
						{
						_localctx = new MultiplicationContext(new ExpressionContext(_parentctx, _parentState));
						((MultiplicationContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(155);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(156);
						((MultiplicationContext)_localctx).operator = match(MUL);
						setState(157);
						((MultiplicationContext)_localctx).right = expression(19);
						}
						break;
					case 3:
						{
						_localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState));
						((DivisionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(158);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(159);
						((DivisionContext)_localctx).operator = match(DIV);
						setState(160);
						((DivisionContext)_localctx).right = expression(18);
						}
						break;
					case 4:
						{
						_localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState));
						((AdditionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(161);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(162);
						((AdditionContext)_localctx).operator = match(ADD);
						setState(163);
						((AdditionContext)_localctx).right = expression(17);
						}
						break;
					case 5:
						{
						_localctx = new SubtractionContext(new ExpressionContext(_parentctx, _parentState));
						((SubtractionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(164);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(165);
						((SubtractionContext)_localctx).operator = match(SUB);
						setState(166);
						((SubtractionContext)_localctx).right = expression(16);
						}
						break;
					case 6:
						{
						_localctx = new ModulusContext(new ExpressionContext(_parentctx, _parentState));
						((ModulusContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(167);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(168);
						((ModulusContext)_localctx).operator = match(MOD);
						setState(169);
						((ModulusContext)_localctx).right = expression(15);
						}
						break;
					case 7:
						{
						_localctx = new EqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((EqualComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(170);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(171);
						((EqualComparatorContext)_localctx).operator = match(EQUAL);
						setState(172);
						((EqualComparatorContext)_localctx).right = expression(14);
						}
						break;
					case 8:
						{
						_localctx = new GreaterComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((GreaterComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(173);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(174);
						((GreaterComparatorContext)_localctx).operator = match(GT);
						setState(175);
						((GreaterComparatorContext)_localctx).right = expression(13);
						}
						break;
					case 9:
						{
						_localctx = new LesserComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((LesserComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(176);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(177);
						((LesserComparatorContext)_localctx).operator = match(LT);
						setState(178);
						((LesserComparatorContext)_localctx).right = expression(12);
						}
						break;
					case 10:
						{
						_localctx = new GreaterEqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((GreaterEqualComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(179);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(180);
						((GreaterEqualComparatorContext)_localctx).operator = match(GE);
						setState(181);
						((GreaterEqualComparatorContext)_localctx).right = expression(11);
						}
						break;
					case 11:
						{
						_localctx = new LesserEqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((LesserEqualComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(182);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(183);
						((LesserEqualComparatorContext)_localctx).operator = match(LE);
						setState(184);
						((LesserEqualComparatorContext)_localctx).right = expression(10);
						}
						break;
					case 12:
						{
						_localctx = new AndLogicalContext(new ExpressionContext(_parentctx, _parentState));
						((AndLogicalContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(185);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(186);
						((AndLogicalContext)_localctx).operator = match(AND);
						setState(187);
						((AndLogicalContext)_localctx).right = expression(9);
						}
						break;
					case 13:
						{
						_localctx = new OrLogicalContext(new ExpressionContext(_parentctx, _parentState));
						((OrLogicalContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(188);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(189);
						((OrLogicalContext)_localctx).operator = match(OR);
						setState(190);
						((OrLogicalContext)_localctx).right = expression(8);
						}
						break;
					case 14:
						{
						_localctx = new ListAppendContext(new ExpressionContext(_parentctx, _parentState));
						((ListAppendContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(191);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(192);
						((ListAppendContext)_localctx).operator = match(APPEND);
						setState(193);
						((ListAppendContext)_localctx).right = expression(5);
						}
						break;
					case 15:
						{
						_localctx = new ListConsContext(new ExpressionContext(_parentctx, _parentState));
						((ListConsContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(194);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(195);
						((ListConsContext)_localctx).operator = match(CONS);
						setState(196);
						((ListConsContext)_localctx).right = expression(4);
						}
						break;
					}
					} 
				}
				setState(201);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
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
			return precpred(_ctx, 4);
		case 14:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\64\u00cd\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\3\2\3\2"+
		"\3\3\7\3&\n\3\f\3\16\3)\13\3\3\4\3\4\3\4\3\4\3\4\3\4\5\4\61\n\4\3\5\3"+
		"\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\5\nU\n\n"+
		"\3\13\7\13X\n\13\f\13\16\13[\13\13\3\f\3\f\3\f\3\f\5\fa\n\f\3\r\3\r\3"+
		"\r\7\rf\n\r\f\r\16\ri\13\r\3\16\3\16\5\16m\n\16\3\16\3\16\3\17\3\17\5"+
		"\17s\n\17\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\7\21\u0085\n\21\f\21\16\21\u0088\13\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\5\21"+
		"\u0099\n\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\7\21\u00c8\n\21\f\21\16\21\u00cb\13\21\3\21"+
		"\2\3 \22\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \2\2\2\u00e3\2\"\3\2\2"+
		"\2\4\'\3\2\2\2\6\60\3\2\2\2\b\62\3\2\2\2\n;\3\2\2\2\f@\3\2\2\2\16E\3\2"+
		"\2\2\20K\3\2\2\2\22T\3\2\2\2\24Y\3\2\2\2\26`\3\2\2\2\30b\3\2\2\2\32j\3"+
		"\2\2\2\34r\3\2\2\2\36t\3\2\2\2 \u0098\3\2\2\2\"#\7\3\2\2#\3\3\2\2\2$&"+
		"\5\6\4\2%$\3\2\2\2&)\3\2\2\2\'%\3\2\2\2\'(\3\2\2\2(\5\3\2\2\2)\'\3\2\2"+
		"\2*\61\5\b\5\2+\61\5\n\6\2,\61\5\f\7\2-\61\5\16\b\2.\61\5\20\t\2/\61\5"+
		"\36\20\2\60*\3\2\2\2\60+\3\2\2\2\60,\3\2\2\2\60-\3\2\2\2\60.\3\2\2\2\60"+
		"/\3\2\2\2\61\7\3\2\2\2\62\63\7*\2\2\63\64\7 \2\2\64\65\5 \21\2\65\66\7"+
		"!\2\2\66\67\7+\2\2\678\5\6\4\289\7,\2\29:\5\6\4\2:\t\3\2\2\2;<\7-\2\2"+
		"<=\5 \21\2=>\7.\2\2>?\5\6\4\2?\13\3\2\2\2@A\7\34\2\2AB\7\64\2\2BC\7\13"+
		"\2\2CD\5 \21\2D\r\3\2\2\2EF\7\35\2\2FG\5\24\13\2GH\7\32\2\2HI\5\24\13"+
		"\2IJ\7\33\2\2J\17\3\2\2\2KL\7\31\2\2LM\5\22\n\2MN\7\32\2\2NO\5\24\13\2"+
		"OP\7\33\2\2P\21\3\2\2\2QU\5\f\7\2RU\5\16\b\2SU\5\20\t\2TQ\3\2\2\2TR\3"+
		"\2\2\2TS\3\2\2\2U\23\3\2\2\2VX\5\22\n\2WV\3\2\2\2X[\3\2\2\2YW\3\2\2\2"+
		"YZ\3\2\2\2Z\25\3\2\2\2[Y\3\2\2\2\\a\7\64\2\2]a\7\25\2\2^a\7\26\2\2_a\7"+
		"\20\2\2`\\\3\2\2\2`]\3\2\2\2`^\3\2\2\2`_\3\2\2\2a\27\3\2\2\2bg\5 \21\2"+
		"cd\7\4\2\2df\5 \21\2ec\3\2\2\2fi\3\2\2\2ge\3\2\2\2gh\3\2\2\2h\31\3\2\2"+
		"\2ig\3\2\2\2jl\7$\2\2km\5\30\r\2lk\3\2\2\2lm\3\2\2\2mn\3\2\2\2no\7%\2"+
		"\2o\33\3\2\2\2ps\5\32\16\2qs\7\64\2\2rp\3\2\2\2rq\3\2\2\2s\35\3\2\2\2"+
		"tu\5 \21\2uv\7\3\2\2v\37\3\2\2\2wx\b\21\1\2x\u0099\5\26\f\2yz\7&\2\2z"+
		"{\7\64\2\2{\u0099\7&\2\2|}\7 \2\2}~\5 \21\2~\177\7!\2\2\177\u0099\3\2"+
		"\2\2\u0080\u0081\7 \2\2\u0081\u0086\5 \21\2\u0082\u0083\7\4\2\2\u0083"+
		"\u0085\5 \21\2\u0084\u0082\3\2\2\2\u0085\u0088\3\2\2\2\u0086\u0084\3\2"+
		"\2\2\u0086\u0087\3\2\2\2\u0087\u0089\3\2\2\2\u0088\u0086\3\2\2\2\u0089"+
		"\u008a\7!\2\2\u008a\u0099\3\2\2\2\u008b\u008c\5\26\f\2\u008c\u008d\5\26"+
		"\f\2\u008d\u0099\3\2\2\2\u008e\u008f\7\17\2\2\u008f\u0099\5 \21\b\u0090"+
		"\u0099\5\32\16\2\u0091\u0092\7\64\2\2\u0092\u0093\7\'\2\2\u0093\u0099"+
		"\5 \21\4\u0094\u0095\7\37\2\2\u0095\u0096\7\64\2\2\u0096\u0097\7\f\2\2"+
		"\u0097\u0099\5 \21\3\u0098w\3\2\2\2\u0098y\3\2\2\2\u0098|\3\2\2\2\u0098"+
		"\u0080\3\2\2\2\u0098\u008b\3\2\2\2\u0098\u008e\3\2\2\2\u0098\u0090\3\2"+
		"\2\2\u0098\u0091\3\2\2\2\u0098\u0094\3\2\2\2\u0099\u00c9\3\2\2\2\u009a"+
		"\u009b\f\25\2\2\u009b\u009c\7\5\2\2\u009c\u00c8\5 \21\26\u009d\u009e\f"+
		"\24\2\2\u009e\u009f\7\6\2\2\u009f\u00c8\5 \21\25\u00a0\u00a1\f\23\2\2"+
		"\u00a1\u00a2\7\7\2\2\u00a2\u00c8\5 \21\24\u00a3\u00a4\f\22\2\2\u00a4\u00a5"+
		"\7\t\2\2\u00a5\u00c8\5 \21\23\u00a6\u00a7\f\21\2\2\u00a7\u00a8\7\n\2\2"+
		"\u00a8\u00c8\5 \21\22\u00a9\u00aa\f\20\2\2\u00aa\u00ab\7\b\2\2\u00ab\u00c8"+
		"\5 \21\21\u00ac\u00ad\f\17\2\2\u00ad\u00ae\7\13\2\2\u00ae\u00c8\5 \21"+
		"\20\u00af\u00b0\f\16\2\2\u00b0\u00b1\7\21\2\2\u00b1\u00c8\5 \21\17\u00b2"+
		"\u00b3\f\r\2\2\u00b3\u00b4\7\22\2\2\u00b4\u00c8\5 \21\16\u00b5\u00b6\f"+
		"\f\2\2\u00b6\u00b7\7\23\2\2\u00b7\u00c8\5 \21\r\u00b8\u00b9\f\13\2\2\u00b9"+
		"\u00ba\7\24\2\2\u00ba\u00c8\5 \21\f\u00bb\u00bc\f\n\2\2\u00bc\u00bd\7"+
		"\r\2\2\u00bd\u00c8\5 \21\13\u00be\u00bf\f\t\2\2\u00bf\u00c0\7\16\2\2\u00c0"+
		"\u00c8\5 \21\n\u00c1\u00c2\f\6\2\2\u00c2\u00c3\7(\2\2\u00c3\u00c8\5 \21"+
		"\7\u00c4\u00c5\f\5\2\2\u00c5\u00c6\7)\2\2\u00c6\u00c8\5 \21\6\u00c7\u009a"+
		"\3\2\2\2\u00c7\u009d\3\2\2\2\u00c7\u00a0\3\2\2\2\u00c7\u00a3\3\2\2\2\u00c7"+
		"\u00a6\3\2\2\2\u00c7\u00a9\3\2\2\2\u00c7\u00ac\3\2\2\2\u00c7\u00af\3\2"+
		"\2\2\u00c7\u00b2\3\2\2\2\u00c7\u00b5\3\2\2\2\u00c7\u00b8\3\2\2\2\u00c7"+
		"\u00bb\3\2\2\2\u00c7\u00be\3\2\2\2\u00c7\u00c1\3\2\2\2\u00c7\u00c4\3\2"+
		"\2\2\u00c8\u00cb\3\2\2\2\u00c9\u00c7\3\2\2\2\u00c9\u00ca\3\2\2\2\u00ca"+
		"!\3\2\2\2\u00cb\u00c9\3\2\2\2\16\'\60TY`glr\u0086\u0098\u00c7\u00c9";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}