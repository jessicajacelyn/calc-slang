// Generated from /Users/jessicajacelyn/cs4215-calc-slang/src/lang/Calc.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CalcLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, POW=6, MUL=7, DIV=8, MOD=9, ADD=10, 
		SUB=11, EQUAL=12, AND=13, OR=14, BOOLEAN=15, GT=16, LT=17, GE=18, LE=19, 
		NUMBER=20, REAL=21, WHITESPACE=22, LETTER=23, VAL=24, Stringliteral=25;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "POW", "MUL", "DIV", "MOD", "ADD", 
			"SUB", "EQUAL", "AND", "OR", "BOOLEAN", "GT", "LT", "GE", "LE", "NUMBER", 
			"REAL", "WHITESPACE", "LETTER", "VAL", "Stringliteral", "Encodingprefix", 
			"Rawstring"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "':='", "';'", "'('", "')'", "'let'", "'^'", "'*'", "'/'", "'%'", 
			"'+'", "'-'", "'='", null, null, null, "'>'", "'<'", "'>='", "'<='", 
			null, null, null, null, "'val'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, "POW", "MUL", "DIV", "MOD", "ADD", 
			"SUB", "EQUAL", "AND", "OR", "BOOLEAN", "GT", "LT", "GE", "LE", "NUMBER", 
			"REAL", "WHITESPACE", "LETTER", "VAL", "Stringliteral"
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


	public CalcLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Calc.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\33\u00be\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\3\2\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3"+
		"\5\3\6\3\6\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3"+
		"\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\5\16"+
		"a\n\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\5\17m\n\17\3"+
		"\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\5\20x\n\20\3\21\3\21\3\22"+
		"\3\22\3\23\3\23\3\23\3\24\3\24\3\24\3\25\6\25\u0085\n\25\r\25\16\25\u0086"+
		"\3\26\6\26\u008a\n\26\r\26\16\26\u008b\3\26\3\26\6\26\u0090\n\26\r\26"+
		"\16\26\u0091\3\27\6\27\u0095\n\27\r\27\16\27\u0096\3\27\3\27\3\30\3\30"+
		"\3\31\3\31\3\31\3\31\3\32\3\32\3\33\3\33\3\33\5\33\u00a6\n\33\3\34\3\34"+
		"\7\34\u00aa\n\34\f\34\16\34\u00ad\13\34\3\34\3\34\7\34\u00b1\n\34\f\34"+
		"\16\34\u00b4\13\34\3\34\3\34\7\34\u00b8\n\34\f\34\16\34\u00bb\13\34\3"+
		"\34\3\34\5\u00ab\u00b2\u00b9\2\35\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23"+
		"\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31"+
		"\61\32\63\33\65\2\67\2\3\2\7\3\2\62;\5\2\13\f\17\17\"\"\4\2C\\c|\5\2\62"+
		";C\\c|\5\2NNWWww\2\u00c8\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2"+
		"\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25"+
		"\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2"+
		"\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2"+
		"\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\39\3\2\2\2\5<\3\2\2"+
		"\2\7>\3\2\2\2\t@\3\2\2\2\13B\3\2\2\2\rF\3\2\2\2\17H\3\2\2\2\21J\3\2\2"+
		"\2\23L\3\2\2\2\25N\3\2\2\2\27P\3\2\2\2\31R\3\2\2\2\33`\3\2\2\2\35l\3\2"+
		"\2\2\37w\3\2\2\2!y\3\2\2\2#{\3\2\2\2%}\3\2\2\2\'\u0080\3\2\2\2)\u0084"+
		"\3\2\2\2+\u0089\3\2\2\2-\u0094\3\2\2\2/\u009a\3\2\2\2\61\u009c\3\2\2\2"+
		"\63\u00a0\3\2\2\2\65\u00a5\3\2\2\2\67\u00a7\3\2\2\29:\7<\2\2:;\7?\2\2"+
		";\4\3\2\2\2<=\7=\2\2=\6\3\2\2\2>?\7*\2\2?\b\3\2\2\2@A\7+\2\2A\n\3\2\2"+
		"\2BC\7n\2\2CD\7g\2\2DE\7v\2\2E\f\3\2\2\2FG\7`\2\2G\16\3\2\2\2HI\7,\2\2"+
		"I\20\3\2\2\2JK\7\61\2\2K\22\3\2\2\2LM\7\'\2\2M\24\3\2\2\2NO\7-\2\2O\26"+
		"\3\2\2\2PQ\7/\2\2Q\30\3\2\2\2RS\7?\2\2S\32\3\2\2\2TU\7(\2\2Ua\7(\2\2V"+
		"W\7c\2\2WX\7p\2\2Xa\7f\2\2YZ\7c\2\2Z[\7p\2\2[\\\7f\2\2\\]\7c\2\2]^\7n"+
		"\2\2^_\7u\2\2_a\7q\2\2`T\3\2\2\2`V\3\2\2\2`Y\3\2\2\2a\34\3\2\2\2bc\7~"+
		"\2\2cm\7~\2\2de\7q\2\2em\7t\2\2fg\7q\2\2gh\7t\2\2hi\7g\2\2ij\7n\2\2jk"+
		"\7u\2\2km\7g\2\2lb\3\2\2\2ld\3\2\2\2lf\3\2\2\2m\36\3\2\2\2no\7v\2\2op"+
		"\7t\2\2pq\7w\2\2qx\7g\2\2rs\7h\2\2st\7c\2\2tu\7n\2\2uv\7u\2\2vx\7g\2\2"+
		"wn\3\2\2\2wr\3\2\2\2x \3\2\2\2yz\7@\2\2z\"\3\2\2\2{|\7>\2\2|$\3\2\2\2"+
		"}~\7@\2\2~\177\7?\2\2\177&\3\2\2\2\u0080\u0081\7>\2\2\u0081\u0082\7?\2"+
		"\2\u0082(\3\2\2\2\u0083\u0085\t\2\2\2\u0084\u0083\3\2\2\2\u0085\u0086"+
		"\3\2\2\2\u0086\u0084\3\2\2\2\u0086\u0087\3\2\2\2\u0087*\3\2\2\2\u0088"+
		"\u008a\t\2\2\2\u0089\u0088\3\2\2\2\u008a\u008b\3\2\2\2\u008b\u0089\3\2"+
		"\2\2\u008b\u008c\3\2\2\2\u008c\u008d\3\2\2\2\u008d\u008f\7\60\2\2\u008e"+
		"\u0090\t\2\2\2\u008f\u008e\3\2\2\2\u0090\u0091\3\2\2\2\u0091\u008f\3\2"+
		"\2\2\u0091\u0092\3\2\2\2\u0092,\3\2\2\2\u0093\u0095\t\3\2\2\u0094\u0093"+
		"\3\2\2\2\u0095\u0096\3\2\2\2\u0096\u0094\3\2\2\2\u0096\u0097\3\2\2\2\u0097"+
		"\u0098\3\2\2\2\u0098\u0099\b\27\2\2\u0099.\3\2\2\2\u009a\u009b\t\4\2\2"+
		"\u009b\60\3\2\2\2\u009c\u009d\7x\2\2\u009d\u009e\7c\2\2\u009e\u009f\7"+
		"n\2\2\u009f\62\3\2\2\2\u00a0\u00a1\t\5\2\2\u00a1\64\3\2\2\2\u00a2\u00a3"+
		"\7w\2\2\u00a3\u00a6\7:\2\2\u00a4\u00a6\t\6\2\2\u00a5\u00a2\3\2\2\2\u00a5"+
		"\u00a4\3\2\2\2\u00a6\66\3\2\2\2\u00a7\u00ab\7$\2\2\u00a8\u00aa\13\2\2"+
		"\2\u00a9\u00a8\3\2\2\2\u00aa\u00ad\3\2\2\2\u00ab\u00ac\3\2\2\2\u00ab\u00a9"+
		"\3\2\2\2\u00ac\u00ae\3\2\2\2\u00ad\u00ab\3\2\2\2\u00ae\u00b2\7*\2\2\u00af"+
		"\u00b1\13\2\2\2\u00b0\u00af\3\2\2\2\u00b1\u00b4\3\2\2\2\u00b2\u00b3\3"+
		"\2\2\2\u00b2\u00b0\3\2\2\2\u00b3\u00b5\3\2\2\2\u00b4\u00b2\3\2\2\2\u00b5"+
		"\u00b9\7+\2\2\u00b6\u00b8\13\2\2\2\u00b7\u00b6\3\2\2\2\u00b8\u00bb\3\2"+
		"\2\2\u00b9\u00ba\3\2\2\2\u00b9\u00b7\3\2\2\2\u00ba\u00bc\3\2\2\2\u00bb"+
		"\u00b9\3\2\2\2\u00bc\u00bd\7$\2\2\u00bd8\3\2\2\2\16\2`lw\u0086\u008b\u0091"+
		"\u0096\u00a5\u00ab\u00b2\u00b9\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}