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
		T__0=1, T__1=2, T__2=3, POW=4, MUL=5, DIV=6, MOD=7, ADD=8, SUB=9, EQUAL=10, 
		AND=11, OR=12, NOT=13, BOOLEAN=14, GT=15, LT=16, GE=17, LE=18, NUMBER=19, 
		REAL=20, WHITESPACE=21, LETTER=22, LET=23, IN=24, END=25, VAL=26, LOCAL=27, 
		OPAR=28, CPAR=29, OBRACE=30, CBRACE=31, DOUBLEQUOTE=32, IF=33, THEN=34, 
		ELSE=35, WHILE=36, DO=37, CHAR=38, STRING=39, INT=40, BOOL=41, REALNUM=42, 
		Stringliteral=43;
	public static final int
		RULE_assignmentoperator = 0, RULE_emptydeclaration = 1, RULE_start = 2, 
		RULE_statement = 3, RULE_ifThenElseStatement = 4, RULE_whileStatement = 5, 
		RULE_type = 6, RULE_declaration = 7, RULE_variableDeclaration = 8, RULE_localValDeclaration = 9, 
		RULE_letDeclaration = 10, RULE_block = 11, RULE_print = 12, RULE_parameters = 13, 
		RULE_function = 14, RULE_identifier = 15, RULE_expressionStatement = 16, 
		RULE_expression = 17;
	private static String[] makeRuleNames() {
		return new String[] {
			"assignmentoperator", "emptydeclaration", "start", "statement", "ifThenElseStatement", 
			"whileStatement", "type", "declaration", "variableDeclaration", "localValDeclaration", 
			"letDeclaration", "block", "print", "parameters", "function", "identifier", 
			"expressionStatement", "expression"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "':='", "';'", "','", "'^'", "'*'", "'/'", "'%'", "'+'", "'-'", 
			"'='", null, null, "'not'", null, "'>'", "'<'", "'>='", "'<='", null, 
			null, null, null, "'let'", "'in'", "'end'", "'val'", "'local val'", "'('", 
			"')'", "'{'", "'}'", "'\"'", "'if'", "'then'", "'else'", "'while'", "'do'", 
			"'char'", "'string'", "'int'", "'bool'", "'real'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "POW", "MUL", "DIV", "MOD", "ADD", "SUB", "EQUAL", 
			"AND", "OR", "NOT", "BOOLEAN", "GT", "LT", "GE", "LE", "NUMBER", "REAL", 
			"WHITESPACE", "LETTER", "LET", "IN", "END", "VAL", "LOCAL", "OPAR", "CPAR", 
			"OBRACE", "CBRACE", "DOUBLEQUOTE", "IF", "THEN", "ELSE", "WHILE", "DO", 
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

	public static class AssignmentoperatorContext extends ParserRuleContext {
		public TerminalNode EQUAL() { return getToken(CalcParser.EQUAL, 0); }
		public AssignmentoperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentoperator; }
	}

	public final AssignmentoperatorContext assignmentoperator() throws RecognitionException {
		AssignmentoperatorContext _localctx = new AssignmentoperatorContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_assignmentoperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(36);
			_la = _input.LA(1);
			if ( !(_la==T__0 || _la==EQUAL) ) {
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

	public static class EmptydeclarationContext extends ParserRuleContext {
		public EmptydeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_emptydeclaration; }
	}

	public final EmptydeclarationContext emptydeclaration() throws RecognitionException {
		EmptydeclarationContext _localctx = new EmptydeclarationContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_emptydeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			match(T__1);
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
		enterRule(_localctx, 4, RULE_start);
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
		public LocalValDeclarationContext localValDeclaration() {
			return getRuleContext(LocalValDeclarationContext.class,0);
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
		enterRule(_localctx, 6, RULE_statement);
		try {
			setState(55);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(47);
				ifThenElseStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(48);
				whileStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(49);
				variableDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(50);
				localValDeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(51);
				letDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(52);
				declaration();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(53);
				expressionStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(54);
				block();
				}
				break;
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
		enterRule(_localctx, 8, RULE_ifThenElseStatement);
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
		enterRule(_localctx, 10, RULE_whileStatement);
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
		enterRule(_localctx, 12, RULE_type);
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
		enterRule(_localctx, 14, RULE_declaration);
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
		enterRule(_localctx, 16, RULE_variableDeclaration);
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

	public static class LocalValDeclarationContext extends ParserRuleContext {
		public Token left;
		public Token operator;
		public ExpressionContext right;
		public TerminalNode LOCAL() { return getToken(CalcParser.LOCAL, 0); }
		public TerminalNode Stringliteral() { return getToken(CalcParser.Stringliteral, 0); }
		public TerminalNode EQUAL() { return getToken(CalcParser.EQUAL, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public LocalValDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_localValDeclaration; }
	}

	public final LocalValDeclarationContext localValDeclaration() throws RecognitionException {
		LocalValDeclarationContext _localctx = new LocalValDeclarationContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_localValDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(81);
			match(LOCAL);
			setState(82);
			((LocalValDeclarationContext)_localctx).left = match(Stringliteral);
			setState(83);
			((LocalValDeclarationContext)_localctx).operator = match(EQUAL);
			setState(84);
			((LocalValDeclarationContext)_localctx).right = expression(0);
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
		public VariableDeclarationContext del;
		public VariableDeclarationContext declarationlist;
		public TerminalNode LET() { return getToken(CalcParser.LET, 0); }
		public TerminalNode IN() { return getToken(CalcParser.IN, 0); }
		public List<VariableDeclarationContext> variableDeclaration() {
			return getRuleContexts(VariableDeclarationContext.class);
		}
		public VariableDeclarationContext variableDeclaration(int i) {
			return getRuleContext(VariableDeclarationContext.class,i);
		}
		public LocalValDeclarationContext localValDeclaration() {
			return getRuleContext(LocalValDeclarationContext.class,0);
		}
		public TerminalNode END() { return getToken(CalcParser.END, 0); }
		public LetDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_letDeclaration; }
	}

	public final LetDeclarationContext letDeclaration() throws RecognitionException {
		LetDeclarationContext _localctx = new LetDeclarationContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_letDeclaration);
		try {
			setState(94);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LET:
				enterOuterAlt(_localctx, 1);
				{
				setState(86);
				match(LET);
				setState(87);
				((LetDeclarationContext)_localctx).del = variableDeclaration();
				setState(88);
				match(IN);
				setState(89);
				((LetDeclarationContext)_localctx).declarationlist = variableDeclaration();
				}
				break;
			case LOCAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(91);
				localValDeclaration();
				setState(92);
				match(END);
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
		enterRule(_localctx, 22, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(96);
			match(OBRACE);
			setState(100);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NOT) | (1L << BOOLEAN) | (1L << NUMBER) | (1L << REAL) | (1L << LET) | (1L << VAL) | (1L << LOCAL) | (1L << OPAR) | (1L << OBRACE) | (1L << IF) | (1L << WHILE) | (1L << CHAR) | (1L << STRING) | (1L << INT) | (1L << BOOL) | (1L << REALNUM) | (1L << Stringliteral))) != 0)) {
				{
				{
				setState(97);
				((BlockContext)_localctx).stmts = statement();
				}
				}
				setState(102);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(103);
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
		enterRule(_localctx, 24, RULE_print);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			match(OPAR);
			setState(106);
			match(DOUBLEQUOTE);
			setState(107);
			((PrintContext)_localctx).expr = match(Stringliteral);
			setState(108);
			match(DOUBLEQUOTE);
			setState(109);
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
		enterRule(_localctx, 26, RULE_parameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(111);
			declaration();
			setState(116);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__2) {
				{
				{
				setState(112);
				match(T__2);
				setState(113);
				declaration();
				}
				}
				setState(118);
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
		enterRule(_localctx, 28, RULE_function);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			((FunctionContext)_localctx).t = type();
			setState(120);
			((FunctionContext)_localctx).id = match(Stringliteral);
			setState(121);
			match(OPAR);
			setState(122);
			((FunctionContext)_localctx).params = parameters();
			setState(123);
			match(CPAR);
			setState(124);
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
		enterRule(_localctx, 30, RULE_identifier);
		try {
			setState(130);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Stringliteral:
				_localctx = new StringContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(126);
				match(Stringliteral);
				}
				break;
			case NUMBER:
				_localctx = new NumberContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(127);
				match(NUMBER);
				}
				break;
			case REAL:
				_localctx = new RealContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(128);
				match(REAL);
				}
				break;
			case BOOLEAN:
				_localctx = new BooleanContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(129);
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
		enterRule(_localctx, 32, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(132);
			expression(0);
			setState(133);
			match(T__1);
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
		int _startState = 34;
		enterRecursionRule(_localctx, 34, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(143);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOLEAN:
			case NUMBER:
			case REAL:
			case Stringliteral:
				{
				_localctx = new IdentifiersContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(136);
				identifier();
				}
				break;
			case OPAR:
				{
				_localctx = new ParenthesesContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(137);
				match(OPAR);
				setState(138);
				((ParenthesesContext)_localctx).inner = expression(0);
				setState(139);
				match(CPAR);
				}
				break;
			case NOT:
				{
				_localctx = new NotLogicalContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(141);
				match(NOT);
				setState(142);
				((NotLogicalContext)_localctx).left = expression(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(186);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(184);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
					case 1:
						{
						_localctx = new PowerContext(new ExpressionContext(_parentctx, _parentState));
						((PowerContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(145);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(146);
						((PowerContext)_localctx).operator = match(POW);
						setState(147);
						((PowerContext)_localctx).right = expression(15);
						}
						break;
					case 2:
						{
						_localctx = new MultiplicationContext(new ExpressionContext(_parentctx, _parentState));
						((MultiplicationContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(148);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(149);
						((MultiplicationContext)_localctx).operator = match(MUL);
						setState(150);
						((MultiplicationContext)_localctx).right = expression(14);
						}
						break;
					case 3:
						{
						_localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState));
						((DivisionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(151);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(152);
						((DivisionContext)_localctx).operator = match(DIV);
						setState(153);
						((DivisionContext)_localctx).right = expression(13);
						}
						break;
					case 4:
						{
						_localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState));
						((AdditionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(154);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(155);
						((AdditionContext)_localctx).operator = match(ADD);
						setState(156);
						((AdditionContext)_localctx).right = expression(12);
						}
						break;
					case 5:
						{
						_localctx = new SubtractionContext(new ExpressionContext(_parentctx, _parentState));
						((SubtractionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(157);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(158);
						((SubtractionContext)_localctx).operator = match(SUB);
						setState(159);
						((SubtractionContext)_localctx).right = expression(11);
						}
						break;
					case 6:
						{
						_localctx = new ModulusContext(new ExpressionContext(_parentctx, _parentState));
						((ModulusContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(160);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(161);
						((ModulusContext)_localctx).operator = match(MOD);
						setState(162);
						((ModulusContext)_localctx).right = expression(10);
						}
						break;
					case 7:
						{
						_localctx = new EqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((EqualComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(163);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(164);
						((EqualComparatorContext)_localctx).operator = match(EQUAL);
						setState(165);
						((EqualComparatorContext)_localctx).right = expression(9);
						}
						break;
					case 8:
						{
						_localctx = new GreaterComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((GreaterComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(166);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(167);
						((GreaterComparatorContext)_localctx).operator = match(GT);
						setState(168);
						((GreaterComparatorContext)_localctx).right = expression(8);
						}
						break;
					case 9:
						{
						_localctx = new LesserComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((LesserComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(169);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(170);
						((LesserComparatorContext)_localctx).operator = match(LT);
						setState(171);
						((LesserComparatorContext)_localctx).right = expression(7);
						}
						break;
					case 10:
						{
						_localctx = new GreaterEqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((GreaterEqualComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(172);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(173);
						((GreaterEqualComparatorContext)_localctx).operator = match(GE);
						setState(174);
						((GreaterEqualComparatorContext)_localctx).right = expression(6);
						}
						break;
					case 11:
						{
						_localctx = new LesserEqualComparatorContext(new ExpressionContext(_parentctx, _parentState));
						((LesserEqualComparatorContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(175);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(176);
						((LesserEqualComparatorContext)_localctx).operator = match(LE);
						setState(177);
						((LesserEqualComparatorContext)_localctx).right = expression(5);
						}
						break;
					case 12:
						{
						_localctx = new AndLogicalContext(new ExpressionContext(_parentctx, _parentState));
						((AndLogicalContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(178);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(179);
						((AndLogicalContext)_localctx).operator = match(AND);
						setState(180);
						((AndLogicalContext)_localctx).right = expression(4);
						}
						break;
					case 13:
						{
						_localctx = new OrLogicalContext(new ExpressionContext(_parentctx, _parentState));
						((OrLogicalContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(181);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(182);
						((OrLogicalContext)_localctx).operator = match(OR);
						setState(183);
						((OrLogicalContext)_localctx).right = expression(3);
						}
						break;
					}
					} 
				}
				setState(188);
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
		case 17:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 14);
		case 1:
			return precpred(_ctx, 13);
		case 2:
			return precpred(_ctx, 12);
		case 3:
			return precpred(_ctx, 11);
		case 4:
			return precpred(_ctx, 10);
		case 5:
			return precpred(_ctx, 9);
		case 6:
			return precpred(_ctx, 8);
		case 7:
			return precpred(_ctx, 7);
		case 8:
			return precpred(_ctx, 6);
		case 9:
			return precpred(_ctx, 5);
		case 10:
			return precpred(_ctx, 4);
		case 11:
			return precpred(_ctx, 3);
		case 12:
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3-\u00c0\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\3\2\3\2\3\3\3\3\3\4\3\4\7\4-\n\4\f\4\16\4\60\13\4\3\5\3\5\3"+
		"\5\3\5\3\5\3\5\3\5\3\5\5\5:\n\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3"+
		"\7\3\7\3\7\3\7\3\7\3\b\3\b\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3"+
		"\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\5\fa\n\f\3\r\3\r\7\re\n"+
		"\r\f\r\16\rh\13\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17"+
		"\7\17u\n\17\f\17\16\17x\13\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21"+
		"\3\21\3\21\3\21\5\21\u0085\n\21\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\5\23\u0092\n\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\7\23\u00bb\n\23\f\23\16\23\u00be\13\23\3\23\2\3$\24\2"+
		"\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$\2\4\4\2\3\3\f\f\3\2(,\2\u00cb"+
		"\2&\3\2\2\2\4(\3\2\2\2\6.\3\2\2\2\b9\3\2\2\2\n;\3\2\2\2\fD\3\2\2\2\16"+
		"I\3\2\2\2\20K\3\2\2\2\22N\3\2\2\2\24S\3\2\2\2\26`\3\2\2\2\30b\3\2\2\2"+
		"\32k\3\2\2\2\34q\3\2\2\2\36y\3\2\2\2 \u0084\3\2\2\2\"\u0086\3\2\2\2$\u0091"+
		"\3\2\2\2&\'\t\2\2\2\'\3\3\2\2\2()\7\4\2\2)\5\3\2\2\2*-\5\b\5\2+-\5\36"+
		"\20\2,*\3\2\2\2,+\3\2\2\2-\60\3\2\2\2.,\3\2\2\2./\3\2\2\2/\7\3\2\2\2\60"+
		".\3\2\2\2\61:\5\n\6\2\62:\5\f\7\2\63:\5\22\n\2\64:\5\24\13\2\65:\5\26"+
		"\f\2\66:\5\20\t\2\67:\5\"\22\28:\5\30\r\29\61\3\2\2\29\62\3\2\2\29\63"+
		"\3\2\2\29\64\3\2\2\29\65\3\2\2\29\66\3\2\2\29\67\3\2\2\298\3\2\2\2:\t"+
		"\3\2\2\2;<\7#\2\2<=\7\36\2\2=>\5$\23\2>?\7\37\2\2?@\7$\2\2@A\5\b\5\2A"+
		"B\7%\2\2BC\5\b\5\2C\13\3\2\2\2DE\7&\2\2EF\5$\23\2FG\7\'\2\2GH\5\b\5\2"+
		"H\r\3\2\2\2IJ\t\3\2\2J\17\3\2\2\2KL\5\16\b\2LM\7-\2\2M\21\3\2\2\2NO\7"+
		"\34\2\2OP\7-\2\2PQ\7\f\2\2QR\5$\23\2R\23\3\2\2\2ST\7\35\2\2TU\7-\2\2U"+
		"V\7\f\2\2VW\5$\23\2W\25\3\2\2\2XY\7\31\2\2YZ\5\22\n\2Z[\7\32\2\2[\\\5"+
		"\22\n\2\\a\3\2\2\2]^\5\24\13\2^_\7\33\2\2_a\3\2\2\2`X\3\2\2\2`]\3\2\2"+
		"\2a\27\3\2\2\2bf\7 \2\2ce\5\b\5\2dc\3\2\2\2eh\3\2\2\2fd\3\2\2\2fg\3\2"+
		"\2\2gi\3\2\2\2hf\3\2\2\2ij\7!\2\2j\31\3\2\2\2kl\7\36\2\2lm\7\"\2\2mn\7"+
		"-\2\2no\7\"\2\2op\7\37\2\2p\33\3\2\2\2qv\5\20\t\2rs\7\5\2\2su\5\20\t\2"+
		"tr\3\2\2\2ux\3\2\2\2vt\3\2\2\2vw\3\2\2\2w\35\3\2\2\2xv\3\2\2\2yz\5\16"+
		"\b\2z{\7-\2\2{|\7\36\2\2|}\5\34\17\2}~\7\37\2\2~\177\5\30\r\2\177\37\3"+
		"\2\2\2\u0080\u0085\7-\2\2\u0081\u0085\7\25\2\2\u0082\u0085\7\26\2\2\u0083"+
		"\u0085\7\20\2\2\u0084\u0080\3\2\2\2\u0084\u0081\3\2\2\2\u0084\u0082\3"+
		"\2\2\2\u0084\u0083\3\2\2\2\u0085!\3\2\2\2\u0086\u0087\5$\23\2\u0087\u0088"+
		"\7\4\2\2\u0088#\3\2\2\2\u0089\u008a\b\23\1\2\u008a\u0092\5 \21\2\u008b"+
		"\u008c\7\36\2\2\u008c\u008d\5$\23\2\u008d\u008e\7\37\2\2\u008e\u0092\3"+
		"\2\2\2\u008f\u0090\7\17\2\2\u0090\u0092\5$\23\3\u0091\u0089\3\2\2\2\u0091"+
		"\u008b\3\2\2\2\u0091\u008f\3\2\2\2\u0092\u00bc\3\2\2\2\u0093\u0094\f\20"+
		"\2\2\u0094\u0095\7\6\2\2\u0095\u00bb\5$\23\21\u0096\u0097\f\17\2\2\u0097"+
		"\u0098\7\7\2\2\u0098\u00bb\5$\23\20\u0099\u009a\f\16\2\2\u009a\u009b\7"+
		"\b\2\2\u009b\u00bb\5$\23\17\u009c\u009d\f\r\2\2\u009d\u009e\7\n\2\2\u009e"+
		"\u00bb\5$\23\16\u009f\u00a0\f\f\2\2\u00a0\u00a1\7\13\2\2\u00a1\u00bb\5"+
		"$\23\r\u00a2\u00a3\f\13\2\2\u00a3\u00a4\7\t\2\2\u00a4\u00bb\5$\23\f\u00a5"+
		"\u00a6\f\n\2\2\u00a6\u00a7\7\f\2\2\u00a7\u00bb\5$\23\13\u00a8\u00a9\f"+
		"\t\2\2\u00a9\u00aa\7\21\2\2\u00aa\u00bb\5$\23\n\u00ab\u00ac\f\b\2\2\u00ac"+
		"\u00ad\7\22\2\2\u00ad\u00bb\5$\23\t\u00ae\u00af\f\7\2\2\u00af\u00b0\7"+
		"\23\2\2\u00b0\u00bb\5$\23\b\u00b1\u00b2\f\6\2\2\u00b2\u00b3\7\24\2\2\u00b3"+
		"\u00bb\5$\23\7\u00b4\u00b5\f\5\2\2\u00b5\u00b6\7\r\2\2\u00b6\u00bb\5$"+
		"\23\6\u00b7\u00b8\f\4\2\2\u00b8\u00b9\7\16\2\2\u00b9\u00bb\5$\23\5\u00ba"+
		"\u0093\3\2\2\2\u00ba\u0096\3\2\2\2\u00ba\u0099\3\2\2\2\u00ba\u009c\3\2"+
		"\2\2\u00ba\u009f\3\2\2\2\u00ba\u00a2\3\2\2\2\u00ba\u00a5\3\2\2\2\u00ba"+
		"\u00a8\3\2\2\2\u00ba\u00ab\3\2\2\2\u00ba\u00ae\3\2\2\2\u00ba\u00b1\3\2"+
		"\2\2\u00ba\u00b4\3\2\2\2\u00ba\u00b7\3\2\2\2\u00bb\u00be\3\2\2\2\u00bc"+
		"\u00ba\3\2\2\2\u00bc\u00bd\3\2\2\2\u00bd%\3\2\2\2\u00be\u00bc\3\2\2\2"+
		"\f,.9`fv\u0084\u0091\u00ba\u00bc";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}