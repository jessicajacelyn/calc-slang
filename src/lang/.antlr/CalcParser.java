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
		T__0=1, T__1=2, T__2=3, T__3=4, POW=5, MUL=6, DIV=7, MOD=8, ADD=9, SUB=10, 
		EQUAL=11, ARROW=12, AND=13, OR=14, NOT=15, BOOLEAN=16, GT=17, LT=18, GE=19, 
		LE=20, NUMBER=21, REAL=22, WHITESPACE=23, LETTER=24, LET=25, IN=26, END=27, 
		VAL=28, LOCAL=29, FUN=30, FN=31, OPAR=32, CPAR=33, OBRACE=34, CBRACE=35, 
		DOUBLEQUOTE=36, ASSIGNMEMT=37, IF=38, THEN=39, ELSE=40, WHILE=41, DO=42, 
		CHAR=43, STRING=44, INT=45, BOOL=46, REALNUM=47, Stringliteral=48, ID=49;
	public static final int
		RULE_emptydeclaration = 0, RULE_start = 1, RULE_statement = 2, RULE_ifThenElseStatement = 3, 
		RULE_whileStatement = 4, RULE_variableDeclaration = 5, RULE_localDeclaration = 6, 
		RULE_letDeclaration = 7, RULE_declarationType = 8, RULE_declarationlist = 9, 
		RULE_function = 10, RULE_identifier = 11, RULE_elements = 12, RULE_expressionStatement = 13, 
		RULE_expression = 14;
	private static String[] makeRuleNames() {
		return new String[] {
			"emptydeclaration", "start", "statement", "ifThenElseStatement", "whileStatement", 
			"variableDeclaration", "localDeclaration", "letDeclaration", "declarationType", 
			"declarationlist", "function", "identifier", "elements", "expressionStatement", 
			"expression"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "','", "'['", "']'", "'^'", "'*'", "'/'", "'%'", "'+'", 
			"'-'", "'='", "'=>'", null, null, "'not'", null, "'>'", "'<'", "'>='", 
			"'<='", null, null, null, null, "'let'", "'in'", "'end'", "'val'", "'local'", 
			"'fun'", "'fn'", "'('", "')'", "'{'", "'}'", "'\"'", "':='", "'if'", 
			"'then'", "'else'", "'while'", "'do'", "'char'", "'string'", "'int'", 
			"'bool'", "'real'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, "POW", "MUL", "DIV", "MOD", "ADD", "SUB", 
			"EQUAL", "ARROW", "AND", "OR", "NOT", "BOOLEAN", "GT", "LT", "GE", "LE", 
			"NUMBER", "REAL", "WHITESPACE", "LETTER", "LET", "IN", "END", "VAL", 
			"LOCAL", "FUN", "FN", "OPAR", "CPAR", "OBRACE", "CBRACE", "DOUBLEQUOTE", 
			"ASSIGNMEMT", "IF", "THEN", "ELSE", "WHILE", "DO", "CHAR", "STRING", 
			"INT", "BOOL", "REALNUM", "Stringliteral", "ID"
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
			setState(36);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << NOT) | (1L << BOOLEAN) | (1L << NUMBER) | (1L << REAL) | (1L << LET) | (1L << VAL) | (1L << LOCAL) | (1L << FUN) | (1L << FN) | (1L << OPAR) | (1L << IF) | (1L << WHILE) | (1L << Stringliteral))) != 0)) {
				{
				setState(34);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__2:
				case NOT:
				case BOOLEAN:
				case NUMBER:
				case REAL:
				case LET:
				case VAL:
				case LOCAL:
				case FN:
				case OPAR:
				case IF:
				case WHILE:
				case Stringliteral:
					{
					setState(32);
					statement();
					}
					break;
				case FUN:
					{
					setState(33);
					function();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(38);
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
			setState(45);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(39);
				ifThenElseStatement();
				}
				break;
			case WHILE:
				enterOuterAlt(_localctx, 2);
				{
				setState(40);
				whileStatement();
				}
				break;
			case VAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(41);
				variableDeclaration();
				}
				break;
			case LOCAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(42);
				localDeclaration();
				}
				break;
			case LET:
				enterOuterAlt(_localctx, 5);
				{
				setState(43);
				letDeclaration();
				}
				break;
			case T__2:
			case NOT:
			case BOOLEAN:
			case NUMBER:
			case REAL:
			case FN:
			case OPAR:
			case Stringliteral:
				enterOuterAlt(_localctx, 6);
				{
				setState(44);
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
			setState(47);
			match(IF);
			setState(48);
			match(OPAR);
			setState(49);
			((IfThenElseConditionContext)_localctx).test = expression(0);
			setState(50);
			match(CPAR);
			setState(51);
			match(THEN);
			setState(52);
			((IfThenElseConditionContext)_localctx).consequent = statement();
			setState(53);
			match(ELSE);
			setState(54);
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
			setState(56);
			match(WHILE);
			setState(57);
			((WhileConditionContext)_localctx).test = expression(0);
			setState(58);
			match(DO);
			setState(59);
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
			setState(61);
			match(VAL);
			setState(62);
			((VariableDeclarationContext)_localctx).left = match(Stringliteral);
			setState(63);
			((VariableDeclarationContext)_localctx).operator = match(EQUAL);
			setState(64);
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
			setState(66);
			match(LOCAL);
			setState(67);
			((LocalDeclarationContext)_localctx).del = declarationlist();
			setState(68);
			match(IN);
			setState(69);
			((LocalDeclarationContext)_localctx).delist = declarationlist();
			setState(70);
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
			setState(72);
			match(LET);
			setState(73);
			((LetDeclarationContext)_localctx).del = declarationType();
			setState(74);
			match(IN);
			setState(75);
			((LetDeclarationContext)_localctx).delist = declarationlist();
			setState(76);
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
			setState(81);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(78);
				variableDeclaration();
				}
				break;
			case LOCAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(79);
				localDeclaration();
				}
				break;
			case LET:
				enterOuterAlt(_localctx, 3);
				{
				setState(80);
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
			setState(86);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LET) | (1L << VAL) | (1L << LOCAL))) != 0)) {
				{
				{
				setState(83);
				declarationType();
				}
				}
				setState(88);
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
		public IdentifierContext name;
		public IdentifierContext params;
		public Token operator;
		public StatementContext body;
		public TerminalNode FUN() { return getToken(CalcParser.FUN, 0); }
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public TerminalNode EQUAL() { return getToken(CalcParser.EQUAL, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public FunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function; }
	}

	public final FunctionContext function() throws RecognitionException {
		FunctionContext _localctx = new FunctionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_function);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			match(FUN);
			setState(90);
			((FunctionContext)_localctx).name = identifier();
			setState(91);
			((FunctionContext)_localctx).params = identifier();
			setState(92);
			((FunctionContext)_localctx).operator = match(EQUAL);
			setState(93);
			((FunctionContext)_localctx).body = statement();
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
		enterRule(_localctx, 22, RULE_identifier);
		try {
			setState(99);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Stringliteral:
				_localctx = new StringContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(95);
				match(Stringliteral);
				}
				break;
			case NUMBER:
				_localctx = new NumberContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(96);
				match(NUMBER);
				}
				break;
			case REAL:
				_localctx = new RealContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(97);
				match(REAL);
				}
				break;
			case BOOLEAN:
				_localctx = new BooleanContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(98);
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
		enterRule(_localctx, 24, RULE_elements);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			expression(0);
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(102);
				match(T__1);
				setState(103);
				expression(0);
				}
				}
				setState(108);
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
			setState(109);
			expression(0);
			setState(110);
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
	public static class ListContext extends ExpressionContext {
		public ElementsContext element;
		public ElementsContext elements() {
			return getRuleContext(ElementsContext.class,0);
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
			setState(135);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				_localctx = new IdentifiersContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(113);
				identifier();
				}
				break;
			case 2:
				{
				_localctx = new ParenthesesContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(114);
				match(OPAR);
				setState(115);
				((ParenthesesContext)_localctx).inner = expression(0);
				setState(116);
				match(CPAR);
				}
				break;
			case 3:
				{
				_localctx = new FunctionCallContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(118);
				((FunctionCallContext)_localctx).name = identifier();
				setState(119);
				((FunctionCallContext)_localctx).params = identifier();
				}
				break;
			case 4:
				{
				_localctx = new NotLogicalContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(121);
				match(NOT);
				setState(122);
				((NotLogicalContext)_localctx).left = expression(4);
				}
				break;
			case 5:
				{
				_localctx = new ListContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(123);
				match(T__2);
				setState(125);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << NOT) | (1L << BOOLEAN) | (1L << NUMBER) | (1L << REAL) | (1L << FN) | (1L << OPAR) | (1L << Stringliteral))) != 0)) {
					{
					setState(124);
					((ListContext)_localctx).element = elements();
					}
				}

				setState(127);
				match(T__3);
				}
				break;
			case 6:
				{
				_localctx = new AssignmentContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(128);
				((AssignmentContext)_localctx).left = match(Stringliteral);
				setState(129);
				((AssignmentContext)_localctx).operator = match(ASSIGNMEMT);
				setState(130);
				((AssignmentContext)_localctx).right = expression(2);
				}
				break;
			case 7:
				{
				_localctx = new LambdaContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(131);
				match(FN);
				setState(132);
				((LambdaContext)_localctx).name = match(Stringliteral);
				setState(133);
				((LambdaContext)_localctx).operator = match(ARROW);
				setState(134);
				((LambdaContext)_localctx).right = expression(1);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(178);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(176);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
					case 1:
						{
						_localctx = new PowerContext(new ExpressionContext(_parentctx, _parentState));
						((PowerContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(137);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(138);
						((PowerContext)_localctx).operator = match(POW);
						setState(139);
						((PowerContext)_localctx).right = expression(18);
						}
						break;
					case 2:
						{
						_localctx = new MultiplicationContext(new ExpressionContext(_parentctx, _parentState));
						((MultiplicationContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(140);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(141);
						((MultiplicationContext)_localctx).operator = match(MUL);
						setState(142);
						((MultiplicationContext)_localctx).right = expression(17);
						}
						break;
					case 3:
						{
						_localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState));
						((DivisionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(143);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(144);
						((DivisionContext)_localctx).operator = match(DIV);
						setState(145);
						((DivisionContext)_localctx).right = expression(16);
						}
						break;
					case 4:
						{
						_localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState));
						((AdditionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(146);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(147);
						((AdditionContext)_localctx).operator = match(ADD);
						setState(148);
						((AdditionContext)_localctx).right = expression(15);
						}
						break;
					case 5:
						{
						_localctx = new SubtractionContext(new ExpressionContext(_parentctx, _parentState));
						((SubtractionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(149);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(150);
						((SubtractionContext)_localctx).operator = match(SUB);
						setState(151);
						((SubtractionContext)_localctx).right = expression(14);
						}
						break;
					case 6:
						{
						_localctx = new ModulusContext(new ExpressionContext(_parentctx, _parentState));
						((ModulusContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(152);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(153);
						((ModulusContext)_localctx).operator = match(MOD);
						setState(154);
						((ModulusContext)_localctx).right = expression(13);
						}
						break;
					case 7:
						{
						_localctx = new EqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((EqualComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(155);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(156);
						((EqualComparatorContext)_localctx).operator = match(EQUAL);
						setState(157);
						((EqualComparatorContext)_localctx).right = expression(12);
						}
						break;
					case 8:
						{
						_localctx = new GreaterComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((GreaterComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(158);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(159);
						((GreaterComparatorContext)_localctx).operator = match(GT);
						setState(160);
						((GreaterComparatorContext)_localctx).right = expression(11);
						}
						break;
					case 9:
						{
						_localctx = new LesserComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((LesserComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(161);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(162);
						((LesserComparatorContext)_localctx).operator = match(LT);
						setState(163);
						((LesserComparatorContext)_localctx).right = expression(10);
						}
						break;
					case 10:
						{
						_localctx = new GreaterEqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((GreaterEqualComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(164);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(165);
						((GreaterEqualComparatorContext)_localctx).operator = match(GE);
						setState(166);
						((GreaterEqualComparatorContext)_localctx).right = expression(9);
						}
						break;
					case 11:
						{
						_localctx = new LesserEqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((LesserEqualComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(167);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(168);
						((LesserEqualComparatorContext)_localctx).operator = match(LE);
						setState(169);
						((LesserEqualComparatorContext)_localctx).right = expression(8);
						}
						break;
					case 12:
						{
						_localctx = new AndLogicalContext(new ExpressionContext(_parentctx, _parentState));
						((AndLogicalContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(170);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(171);
						((AndLogicalContext)_localctx).operator = match(AND);
						setState(172);
						((AndLogicalContext)_localctx).right = expression(7);
						}
						break;
					case 13:
						{
						_localctx = new OrLogicalContext(new ExpressionContext(_parentctx, _parentState));
						((OrLogicalContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(173);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(174);
						((OrLogicalContext)_localctx).operator = match(OR);
						setState(175);
						((OrLogicalContext)_localctx).right = expression(6);
						}
						break;
					}
					} 
				}
				setState(180);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
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
			return precpred(_ctx, 17);
		case 1:
			return precpred(_ctx, 16);
		case 2:
			return precpred(_ctx, 15);
		case 3:
			return precpred(_ctx, 14);
		case 4:
			return precpred(_ctx, 13);
		case 5:
			return precpred(_ctx, 12);
		case 6:
			return precpred(_ctx, 11);
		case 7:
			return precpred(_ctx, 10);
		case 8:
			return precpred(_ctx, 9);
		case 9:
			return precpred(_ctx, 8);
		case 10:
			return precpred(_ctx, 7);
		case 11:
			return precpred(_ctx, 6);
		case 12:
			return precpred(_ctx, 5);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\63\u00b8\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\3\2\3\3\3\3\7"+
		"\3%\n\3\f\3\16\3(\13\3\3\4\3\4\3\4\3\4\3\4\3\4\5\4\60\n\4\3\5\3\5\3\5"+
		"\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\5\nT\n\n\3\13\7"+
		"\13W\n\13\f\13\16\13Z\13\13\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\5"+
		"\rf\n\r\3\16\3\16\3\16\7\16k\n\16\f\16\16\16n\13\16\3\17\3\17\3\17\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\5\20\u0080"+
		"\n\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\5\20\u008a\n\20\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\7\20\u00b3\n\20\f\20\16"+
		"\20\u00b6\13\20\3\20\2\3\36\21\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36"+
		"\2\2\2\u00ca\2 \3\2\2\2\4&\3\2\2\2\6/\3\2\2\2\b\61\3\2\2\2\n:\3\2\2\2"+
		"\f?\3\2\2\2\16D\3\2\2\2\20J\3\2\2\2\22S\3\2\2\2\24X\3\2\2\2\26[\3\2\2"+
		"\2\30e\3\2\2\2\32g\3\2\2\2\34o\3\2\2\2\36\u0089\3\2\2\2 !\7\3\2\2!\3\3"+
		"\2\2\2\"%\5\6\4\2#%\5\26\f\2$\"\3\2\2\2$#\3\2\2\2%(\3\2\2\2&$\3\2\2\2"+
		"&\'\3\2\2\2\'\5\3\2\2\2(&\3\2\2\2)\60\5\b\5\2*\60\5\n\6\2+\60\5\f\7\2"+
		",\60\5\16\b\2-\60\5\20\t\2.\60\5\34\17\2/)\3\2\2\2/*\3\2\2\2/+\3\2\2\2"+
		"/,\3\2\2\2/-\3\2\2\2/.\3\2\2\2\60\7\3\2\2\2\61\62\7(\2\2\62\63\7\"\2\2"+
		"\63\64\5\36\20\2\64\65\7#\2\2\65\66\7)\2\2\66\67\5\6\4\2\678\7*\2\289"+
		"\5\6\4\29\t\3\2\2\2:;\7+\2\2;<\5\36\20\2<=\7,\2\2=>\5\6\4\2>\13\3\2\2"+
		"\2?@\7\36\2\2@A\7\62\2\2AB\7\r\2\2BC\5\36\20\2C\r\3\2\2\2DE\7\37\2\2E"+
		"F\5\24\13\2FG\7\34\2\2GH\5\24\13\2HI\7\35\2\2I\17\3\2\2\2JK\7\33\2\2K"+
		"L\5\22\n\2LM\7\34\2\2MN\5\24\13\2NO\7\35\2\2O\21\3\2\2\2PT\5\f\7\2QT\5"+
		"\16\b\2RT\5\20\t\2SP\3\2\2\2SQ\3\2\2\2SR\3\2\2\2T\23\3\2\2\2UW\5\22\n"+
		"\2VU\3\2\2\2WZ\3\2\2\2XV\3\2\2\2XY\3\2\2\2Y\25\3\2\2\2ZX\3\2\2\2[\\\7"+
		" \2\2\\]\5\30\r\2]^\5\30\r\2^_\7\r\2\2_`\5\6\4\2`\27\3\2\2\2af\7\62\2"+
		"\2bf\7\27\2\2cf\7\30\2\2df\7\22\2\2ea\3\2\2\2eb\3\2\2\2ec\3\2\2\2ed\3"+
		"\2\2\2f\31\3\2\2\2gl\5\36\20\2hi\7\4\2\2ik\5\36\20\2jh\3\2\2\2kn\3\2\2"+
		"\2lj\3\2\2\2lm\3\2\2\2m\33\3\2\2\2nl\3\2\2\2op\5\36\20\2pq\7\3\2\2q\35"+
		"\3\2\2\2rs\b\20\1\2s\u008a\5\30\r\2tu\7\"\2\2uv\5\36\20\2vw\7#\2\2w\u008a"+
		"\3\2\2\2xy\5\30\r\2yz\5\30\r\2z\u008a\3\2\2\2{|\7\21\2\2|\u008a\5\36\20"+
		"\6}\177\7\5\2\2~\u0080\5\32\16\2\177~\3\2\2\2\177\u0080\3\2\2\2\u0080"+
		"\u0081\3\2\2\2\u0081\u008a\7\6\2\2\u0082\u0083\7\62\2\2\u0083\u0084\7"+
		"\'\2\2\u0084\u008a\5\36\20\4\u0085\u0086\7!\2\2\u0086\u0087\7\62\2\2\u0087"+
		"\u0088\7\16\2\2\u0088\u008a\5\36\20\3\u0089r\3\2\2\2\u0089t\3\2\2\2\u0089"+
		"x\3\2\2\2\u0089{\3\2\2\2\u0089}\3\2\2\2\u0089\u0082\3\2\2\2\u0089\u0085"+
		"\3\2\2\2\u008a\u00b4\3\2\2\2\u008b\u008c\f\23\2\2\u008c\u008d\7\7\2\2"+
		"\u008d\u00b3\5\36\20\24\u008e\u008f\f\22\2\2\u008f\u0090\7\b\2\2\u0090"+
		"\u00b3\5\36\20\23\u0091\u0092\f\21\2\2\u0092\u0093\7\t\2\2\u0093\u00b3"+
		"\5\36\20\22\u0094\u0095\f\20\2\2\u0095\u0096\7\13\2\2\u0096\u00b3\5\36"+
		"\20\21\u0097\u0098\f\17\2\2\u0098\u0099\7\f\2\2\u0099\u00b3\5\36\20\20"+
		"\u009a\u009b\f\16\2\2\u009b\u009c\7\n\2\2\u009c\u00b3\5\36\20\17\u009d"+
		"\u009e\f\r\2\2\u009e\u009f\7\r\2\2\u009f\u00b3\5\36\20\16\u00a0\u00a1"+
		"\f\f\2\2\u00a1\u00a2\7\23\2\2\u00a2\u00b3\5\36\20\r\u00a3\u00a4\f\13\2"+
		"\2\u00a4\u00a5\7\24\2\2\u00a5\u00b3\5\36\20\f\u00a6\u00a7\f\n\2\2\u00a7"+
		"\u00a8\7\25\2\2\u00a8\u00b3\5\36\20\13\u00a9\u00aa\f\t\2\2\u00aa\u00ab"+
		"\7\26\2\2\u00ab\u00b3\5\36\20\n\u00ac\u00ad\f\b\2\2\u00ad\u00ae\7\17\2"+
		"\2\u00ae\u00b3\5\36\20\t\u00af\u00b0\f\7\2\2\u00b0\u00b1\7\20\2\2\u00b1"+
		"\u00b3\5\36\20\b\u00b2\u008b\3\2\2\2\u00b2\u008e\3\2\2\2\u00b2\u0091\3"+
		"\2\2\2\u00b2\u0094\3\2\2\2\u00b2\u0097\3\2\2\2\u00b2\u009a\3\2\2\2\u00b2"+
		"\u009d\3\2\2\2\u00b2\u00a0\3\2\2\2\u00b2\u00a3\3\2\2\2\u00b2\u00a6\3\2"+
		"\2\2\u00b2\u00a9\3\2\2\2\u00b2\u00ac\3\2\2\2\u00b2\u00af\3\2\2\2\u00b3"+
		"\u00b6\3\2\2\2\u00b4\u00b2\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\37\3\2\2"+
		"\2\u00b6\u00b4\3\2\2\2\r$&/SXel\177\u0089\u00b2\u00b4";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}