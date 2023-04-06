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
		WHITESPACE=20, LETTER=21, LET=22, IN=23, END=24, VAL=25, LOCAL=26, OPAR=27, 
		CPAR=28, OBRACE=29, CBRACE=30, DOUBLEQUOTE=31, ASSIGNMEMT=32, IF=33, THEN=34, 
		ELSE=35, WHILE=36, DO=37, CHAR=38, STRING=39, INT=40, BOOL=41, REALNUM=42, 
		Stringliteral=43;
	public static final int
		RULE_emptydeclaration = 0, RULE_start = 1, RULE_statement = 2, RULE_ifThenElseStatement = 3, 
		RULE_whileStatement = 4, RULE_type = 5, RULE_declaration = 6, RULE_variableDeclaration = 7, 
		RULE_localDeclaration = 8, RULE_letDeclaration = 9, RULE_declarationType = 10, 
		RULE_declarationlist = 11, RULE_block = 12, RULE_print = 13, RULE_parameters = 14, 
		RULE_function = 15, RULE_identifier = 16, RULE_expressionStatement = 17, 
		RULE_expression = 18;
	private static String[] makeRuleNames() {
		return new String[] {
			"emptydeclaration", "start", "statement", "ifThenElseStatement", "whileStatement", 
			"type", "declaration", "variableDeclaration", "localDeclaration", "letDeclaration", 
			"declarationType", "declarationlist", "block", "print", "parameters", 
			"function", "identifier", "expressionStatement", "expression"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "','", "'^'", "'*'", "'/'", "'%'", "'+'", "'-'", "'='", 
			null, null, "'not'", null, "'>'", "'<'", "'>='", "'<='", null, null, 
			null, null, "'let'", "'inn'", "'end'", "'val'", "'local'", "'('", "')'", 
			"'{'", "'}'", "'\"'", "':='", "'if'", "'then'", "'else'", "'while'", 
			"'do'", "'char'", "'string'", "'int'", "'bool'", "'real'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "POW", "MUL", "DIV", "MOD", "ADD", "SUB", "EQUAL", 
			"AND", "OR", "NOT", "BOOLEAN", "GT", "LT", "GE", "LE", "NUMBER", "REAL", 
			"WHITESPACE", "LETTER", "LET", "IN", "END", "VAL", "LOCAL", "OPAR", "CPAR", 
			"OBRACE", "CBRACE", "DOUBLEQUOTE", "ASSIGNMEMT", "IF", "THEN", "ELSE", 
			"WHILE", "DO", "CHAR", "STRING", "INT", "BOOL", "REALNUM", "Stringliteral"
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
			setState(38);
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
			setState(44);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NOT) | (1L << BOOLEAN) | (1L << NUMBER) | (1L << REAL) | (1L << LET) | (1L << VAL) | (1L << LOCAL) | (1L << OPAR) | (1L << OBRACE) | (1L << IF) | (1L << WHILE) | (1L << CHAR) | (1L << STRING) | (1L << INT) | (1L << BOOL) | (1L << REALNUM) | (1L << Stringliteral))) != 0)) {
				{
				setState(42);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(40);
					statement();
					}
					break;
				case 2:
					{
					setState(41);
					function();
					}
					break;
				}
				}
				setState(46);
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
			setState(55);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(47);
				ifThenElseStatement();
				}
				break;
			case WHILE:
				enterOuterAlt(_localctx, 2);
				{
				setState(48);
				whileStatement();
				}
				break;
			case VAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(49);
				variableDeclaration();
				}
				break;
			case LOCAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(50);
				localDeclaration();
				}
				break;
			case LET:
				enterOuterAlt(_localctx, 5);
				{
				setState(51);
				letDeclaration();
				}
				break;
			case CHAR:
			case STRING:
			case INT:
			case BOOL:
			case REALNUM:
				enterOuterAlt(_localctx, 6);
				{
				setState(52);
				declaration();
				}
				break;
			case NOT:
			case BOOLEAN:
			case NUMBER:
			case REAL:
			case OPAR:
			case Stringliteral:
				enterOuterAlt(_localctx, 7);
				{
				setState(53);
				expressionStatement();
				}
				break;
			case OBRACE:
				enterOuterAlt(_localctx, 8);
				{
				setState(54);
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
			setState(57);
			match(IF);
			setState(58);
			match(OPAR);
			setState(59);
			((IfThenElseConditionContext)_localctx).test = expression(0);
			setState(60);
			match(CPAR);
			setState(61);
			match(THEN);
			setState(62);
			((IfThenElseConditionContext)_localctx).consequent = statement();
			setState(63);
			match(ELSE);
			setState(64);
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
			setState(66);
			match(WHILE);
			setState(67);
			((WhileConditionContext)_localctx).test = expression(0);
			setState(68);
			match(DO);
			setState(69);
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
			setState(71);
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
			setState(73);
			((DeclarationContext)_localctx).t = type();
			setState(74);
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
		enterRule(_localctx, 14, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			match(VAL);
			setState(77);
			((VariableDeclarationContext)_localctx).left = match(Stringliteral);
			setState(78);
			((VariableDeclarationContext)_localctx).operator = match(EQUAL);
			setState(79);
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
		enterRule(_localctx, 16, RULE_localDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(81);
			match(LOCAL);
			setState(82);
			((LocalDeclarationContext)_localctx).del = declarationlist();
			setState(83);
			match(IN);
			setState(84);
			((LocalDeclarationContext)_localctx).delist = declarationlist();
			setState(85);
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
		enterRule(_localctx, 18, RULE_letDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(87);
			match(LET);
			setState(88);
			((LetDeclarationContext)_localctx).del = declarationType();
			setState(89);
			match(IN);
			setState(90);
			((LetDeclarationContext)_localctx).delist = declarationlist();
			setState(91);
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
		public DeclarationTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declarationType; }
	}

	public final DeclarationTypeContext declarationType() throws RecognitionException {
		DeclarationTypeContext _localctx = new DeclarationTypeContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_declarationType);
		try {
			setState(95);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(93);
				variableDeclaration();
				}
				break;
			case LOCAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(94);
				localDeclaration();
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
		enterRule(_localctx, 22, RULE_declarationlist);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(100);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==VAL || _la==LOCAL) {
				{
				{
				setState(97);
				declarationType();
				}
				}
				setState(102);
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
		enterRule(_localctx, 24, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			match(OBRACE);
			setState(107);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NOT) | (1L << BOOLEAN) | (1L << NUMBER) | (1L << REAL) | (1L << LET) | (1L << VAL) | (1L << LOCAL) | (1L << OPAR) | (1L << OBRACE) | (1L << IF) | (1L << WHILE) | (1L << CHAR) | (1L << STRING) | (1L << INT) | (1L << BOOL) | (1L << REALNUM) | (1L << Stringliteral))) != 0)) {
				{
				{
				setState(104);
				((BlockContext)_localctx).stmts = statement();
				}
				}
				setState(109);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(110);
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
		enterRule(_localctx, 26, RULE_print);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(112);
			match(OPAR);
			setState(113);
			match(DOUBLEQUOTE);
			setState(114);
			((PrintContext)_localctx).expr = match(Stringliteral);
			setState(115);
			match(DOUBLEQUOTE);
			setState(116);
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
		enterRule(_localctx, 28, RULE_parameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			declaration();
			setState(123);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(119);
				match(T__1);
				setState(120);
				declaration();
				}
				}
				setState(125);
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
		enterRule(_localctx, 30, RULE_function);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(126);
			((FunctionContext)_localctx).t = type();
			setState(127);
			((FunctionContext)_localctx).id = match(Stringliteral);
			setState(128);
			match(OPAR);
			setState(129);
			((FunctionContext)_localctx).params = parameters();
			setState(130);
			match(CPAR);
			setState(131);
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
		enterRule(_localctx, 32, RULE_identifier);
		try {
			setState(137);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Stringliteral:
				_localctx = new StringContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(133);
				match(Stringliteral);
				}
				break;
			case NUMBER:
				_localctx = new NumberContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(134);
				match(NUMBER);
				}
				break;
			case REAL:
				_localctx = new RealContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(135);
				match(REAL);
				}
				break;
			case BOOLEAN:
				_localctx = new BooleanContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(136);
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
		enterRule(_localctx, 34, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(139);
			expression(0);
			setState(140);
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
		int _startState = 36;
		enterRecursionRule(_localctx, 36, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(153);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				_localctx = new IdentifiersContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(143);
				identifier();
				}
				break;
			case 2:
				{
				_localctx = new ParenthesesContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(144);
				match(OPAR);
				setState(145);
				((ParenthesesContext)_localctx).inner = expression(0);
				setState(146);
				match(CPAR);
				}
				break;
			case 3:
				{
				_localctx = new NotLogicalContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(148);
				match(NOT);
				setState(149);
				((NotLogicalContext)_localctx).left = expression(2);
				}
				break;
			case 4:
				{
				_localctx = new AssignmentContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(150);
				((AssignmentContext)_localctx).left = match(Stringliteral);
				setState(151);
				((AssignmentContext)_localctx).operator = match(ASSIGNMEMT);
				setState(152);
				((AssignmentContext)_localctx).right = expression(1);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(196);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(194);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
					case 1:
						{
						_localctx = new PowerContext(new ExpressionContext(_parentctx, _parentState));
						((PowerContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(155);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(156);
						((PowerContext)_localctx).operator = match(POW);
						setState(157);
						((PowerContext)_localctx).right = expression(16);
						}
						break;
					case 2:
						{
						_localctx = new MultiplicationContext(new ExpressionContext(_parentctx, _parentState));
						((MultiplicationContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(158);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(159);
						((MultiplicationContext)_localctx).operator = match(MUL);
						setState(160);
						((MultiplicationContext)_localctx).right = expression(15);
						}
						break;
					case 3:
						{
						_localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState));
						((DivisionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(161);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(162);
						((DivisionContext)_localctx).operator = match(DIV);
						setState(163);
						((DivisionContext)_localctx).right = expression(14);
						}
						break;
					case 4:
						{
						_localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState));
						((AdditionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(164);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(165);
						((AdditionContext)_localctx).operator = match(ADD);
						setState(166);
						((AdditionContext)_localctx).right = expression(13);
						}
						break;
					case 5:
						{
						_localctx = new SubtractionContext(new ExpressionContext(_parentctx, _parentState));
						((SubtractionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(167);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(168);
						((SubtractionContext)_localctx).operator = match(SUB);
						setState(169);
						((SubtractionContext)_localctx).right = expression(12);
						}
						break;
					case 6:
						{
						_localctx = new ModulusContext(new ExpressionContext(_parentctx, _parentState));
						((ModulusContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(170);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(171);
						((ModulusContext)_localctx).operator = match(MOD);
						setState(172);
						((ModulusContext)_localctx).right = expression(11);
						}
						break;
					case 7:
						{
						_localctx = new EqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((EqualComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(173);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(174);
						((EqualComparatorContext)_localctx).operator = match(EQUAL);
						setState(175);
						((EqualComparatorContext)_localctx).right = expression(10);
						}
						break;
					case 8:
						{
						_localctx = new GreaterComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((GreaterComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(176);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(177);
						((GreaterComparatorContext)_localctx).operator = match(GT);
						setState(178);
						((GreaterComparatorContext)_localctx).right = expression(9);
						}
						break;
					case 9:
						{
						_localctx = new LesserComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((LesserComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(179);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(180);
						((LesserComparatorContext)_localctx).operator = match(LT);
						setState(181);
						((LesserComparatorContext)_localctx).right = expression(8);
						}
						break;
					case 10:
						{
						_localctx = new GreaterEqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((GreaterEqualComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(182);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(183);
						((GreaterEqualComparatorContext)_localctx).operator = match(GE);
						setState(184);
						((GreaterEqualComparatorContext)_localctx).right = expression(7);
						}
						break;
					case 11:
						{
						_localctx = new LesserEqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((LesserEqualComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(185);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(186);
						((LesserEqualComparatorContext)_localctx).operator = match(LE);
						setState(187);
						((LesserEqualComparatorContext)_localctx).right = expression(6);
						}
						break;
					case 12:
						{
						_localctx = new AndLogicalContext(new ExpressionContext(_parentctx, _parentState));
						((AndLogicalContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(188);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(189);
						((AndLogicalContext)_localctx).operator = match(AND);
						setState(190);
						((AndLogicalContext)_localctx).right = expression(5);
						}
						break;
					case 13:
						{
						_localctx = new OrLogicalContext(new ExpressionContext(_parentctx, _parentState));
						((OrLogicalContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(191);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(192);
						((OrLogicalContext)_localctx).operator = match(OR);
						setState(193);
						((OrLogicalContext)_localctx).right = expression(4);
						}
						break;
					}
					} 
				}
				setState(198);
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
		case 18:
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3-\u00ca\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\3\2\3\2\3\3\3\3\7\3-\n\3\f\3\16\3\60\13\3\3\4\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\5\4:\n\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3"+
		"\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\5\fb\n\f\3\r\7\r"+
		"e\n\r\f\r\16\rh\13\r\3\16\3\16\7\16l\n\16\f\16\16\16o\13\16\3\16\3\16"+
		"\3\17\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\7\20|\n\20\f\20\16\20\177"+
		"\13\20\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\5\22\u008c"+
		"\n\22\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\24\5\24\u009c\n\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\24\7\24\u00c5\n\24\f\24\16\24\u00c8\13\24\3\24\2\3&\25\2\4\6\b\n\f"+
		"\16\20\22\24\26\30\32\34\36 \"$&\2\3\3\2(,\2\u00d6\2(\3\2\2\2\4.\3\2\2"+
		"\2\69\3\2\2\2\b;\3\2\2\2\nD\3\2\2\2\fI\3\2\2\2\16K\3\2\2\2\20N\3\2\2\2"+
		"\22S\3\2\2\2\24Y\3\2\2\2\26a\3\2\2\2\30f\3\2\2\2\32i\3\2\2\2\34r\3\2\2"+
		"\2\36x\3\2\2\2 \u0080\3\2\2\2\"\u008b\3\2\2\2$\u008d\3\2\2\2&\u009b\3"+
		"\2\2\2()\7\3\2\2)\3\3\2\2\2*-\5\6\4\2+-\5 \21\2,*\3\2\2\2,+\3\2\2\2-\60"+
		"\3\2\2\2.,\3\2\2\2./\3\2\2\2/\5\3\2\2\2\60.\3\2\2\2\61:\5\b\5\2\62:\5"+
		"\n\6\2\63:\5\20\t\2\64:\5\22\n\2\65:\5\24\13\2\66:\5\16\b\2\67:\5$\23"+
		"\28:\5\32\16\29\61\3\2\2\29\62\3\2\2\29\63\3\2\2\29\64\3\2\2\29\65\3\2"+
		"\2\29\66\3\2\2\29\67\3\2\2\298\3\2\2\2:\7\3\2\2\2;<\7#\2\2<=\7\35\2\2"+
		"=>\5&\24\2>?\7\36\2\2?@\7$\2\2@A\5\6\4\2AB\7%\2\2BC\5\6\4\2C\t\3\2\2\2"+
		"DE\7&\2\2EF\5&\24\2FG\7\'\2\2GH\5\6\4\2H\13\3\2\2\2IJ\t\2\2\2J\r\3\2\2"+
		"\2KL\5\f\7\2LM\7-\2\2M\17\3\2\2\2NO\7\33\2\2OP\7-\2\2PQ\7\13\2\2QR\5&"+
		"\24\2R\21\3\2\2\2ST\7\34\2\2TU\5\30\r\2UV\7\31\2\2VW\5\30\r\2WX\7\32\2"+
		"\2X\23\3\2\2\2YZ\7\30\2\2Z[\5\26\f\2[\\\7\31\2\2\\]\5\30\r\2]^\7\32\2"+
		"\2^\25\3\2\2\2_b\5\20\t\2`b\5\22\n\2a_\3\2\2\2a`\3\2\2\2b\27\3\2\2\2c"+
		"e\5\26\f\2dc\3\2\2\2eh\3\2\2\2fd\3\2\2\2fg\3\2\2\2g\31\3\2\2\2hf\3\2\2"+
		"\2im\7\37\2\2jl\5\6\4\2kj\3\2\2\2lo\3\2\2\2mk\3\2\2\2mn\3\2\2\2np\3\2"+
		"\2\2om\3\2\2\2pq\7 \2\2q\33\3\2\2\2rs\7\35\2\2st\7!\2\2tu\7-\2\2uv\7!"+
		"\2\2vw\7\36\2\2w\35\3\2\2\2x}\5\16\b\2yz\7\4\2\2z|\5\16\b\2{y\3\2\2\2"+
		"|\177\3\2\2\2}{\3\2\2\2}~\3\2\2\2~\37\3\2\2\2\177}\3\2\2\2\u0080\u0081"+
		"\5\f\7\2\u0081\u0082\7-\2\2\u0082\u0083\7\35\2\2\u0083\u0084\5\36\20\2"+
		"\u0084\u0085\7\36\2\2\u0085\u0086\5\32\16\2\u0086!\3\2\2\2\u0087\u008c"+
		"\7-\2\2\u0088\u008c\7\24\2\2\u0089\u008c\7\25\2\2\u008a\u008c\7\17\2\2"+
		"\u008b\u0087\3\2\2\2\u008b\u0088\3\2\2\2\u008b\u0089\3\2\2\2\u008b\u008a"+
		"\3\2\2\2\u008c#\3\2\2\2\u008d\u008e\5&\24\2\u008e\u008f\7\3\2\2\u008f"+
		"%\3\2\2\2\u0090\u0091\b\24\1\2\u0091\u009c\5\"\22\2\u0092\u0093\7\35\2"+
		"\2\u0093\u0094\5&\24\2\u0094\u0095\7\36\2\2\u0095\u009c\3\2\2\2\u0096"+
		"\u0097\7\16\2\2\u0097\u009c\5&\24\4\u0098\u0099\7-\2\2\u0099\u009a\7\""+
		"\2\2\u009a\u009c\5&\24\3\u009b\u0090\3\2\2\2\u009b\u0092\3\2\2\2\u009b"+
		"\u0096\3\2\2\2\u009b\u0098\3\2\2\2\u009c\u00c6\3\2\2\2\u009d\u009e\f\21"+
		"\2\2\u009e\u009f\7\5\2\2\u009f\u00c5\5&\24\22\u00a0\u00a1\f\20\2\2\u00a1"+
		"\u00a2\7\6\2\2\u00a2\u00c5\5&\24\21\u00a3\u00a4\f\17\2\2\u00a4\u00a5\7"+
		"\7\2\2\u00a5\u00c5\5&\24\20\u00a6\u00a7\f\16\2\2\u00a7\u00a8\7\t\2\2\u00a8"+
		"\u00c5\5&\24\17\u00a9\u00aa\f\r\2\2\u00aa\u00ab\7\n\2\2\u00ab\u00c5\5"+
		"&\24\16\u00ac\u00ad\f\f\2\2\u00ad\u00ae\7\b\2\2\u00ae\u00c5\5&\24\r\u00af"+
		"\u00b0\f\13\2\2\u00b0\u00b1\7\13\2\2\u00b1\u00c5\5&\24\f\u00b2\u00b3\f"+
		"\n\2\2\u00b3\u00b4\7\20\2\2\u00b4\u00c5\5&\24\13\u00b5\u00b6\f\t\2\2\u00b6"+
		"\u00b7\7\21\2\2\u00b7\u00c5\5&\24\n\u00b8\u00b9\f\b\2\2\u00b9\u00ba\7"+
		"\22\2\2\u00ba\u00c5\5&\24\t\u00bb\u00bc\f\7\2\2\u00bc\u00bd\7\23\2\2\u00bd"+
		"\u00c5\5&\24\b\u00be\u00bf\f\6\2\2\u00bf\u00c0\7\f\2\2\u00c0\u00c5\5&"+
		"\24\7\u00c1\u00c2\f\5\2\2\u00c2\u00c3\7\r\2\2\u00c3\u00c5\5&\24\6\u00c4"+
		"\u009d\3\2\2\2\u00c4\u00a0\3\2\2\2\u00c4\u00a3\3\2\2\2\u00c4\u00a6\3\2"+
		"\2\2\u00c4\u00a9\3\2\2\2\u00c4\u00ac\3\2\2\2\u00c4\u00af\3\2\2\2\u00c4"+
		"\u00b2\3\2\2\2\u00c4\u00b5\3\2\2\2\u00c4\u00b8\3\2\2\2\u00c4\u00bb\3\2"+
		"\2\2\u00c4\u00be\3\2\2\2\u00c4\u00c1\3\2\2\2\u00c5\u00c8\3\2\2\2\u00c6"+
		"\u00c4\3\2\2\2\u00c6\u00c7\3\2\2\2\u00c7\'\3\2\2\2\u00c8\u00c6\3\2\2\2"+
		"\r,.9afm}\u008b\u009b\u00c4\u00c6";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}