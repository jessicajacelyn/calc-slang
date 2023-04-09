// Generated from /Users/suenkoh/4215_project/calc-slang/src/lang/Calc.g4 by ANTLR 4.9.2
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
		T__0=1, POW=2, MUL=3, DIV=4, MOD=5, ADD=6, SUB=7, EQUAL=8, ARROW=9, AND=10, 
		OR=11, NOT=12, BOOLEAN=13, GT=14, LT=15, GE=16, LE=17, NUMBER=18, REAL=19, 
		WHITESPACE=20, LETTER=21, LET=22, IN=23, END=24, VAL=25, LOCAL=26, FUN=27, 
		FN=28, OPAR=29, CPAR=30, OBRACE=31, CBRACE=32, DOUBLEQUOTE=33, ASSIGNMEMT=34, 
		IF=35, THEN=36, ELSE=37, WHILE=38, DO=39, CHAR=40, STRING=41, INT=42, 
		BOOL=43, REALNUM=44, Stringliteral=45, ID=46;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "POW", "MUL", "DIV", "MOD", "ADD", "SUB", "EQUAL", "ARROW", "AND", 
			"OR", "NOT", "BOOLEAN", "GT", "LT", "GE", "LE", "NUMBER", "REAL", "WHITESPACE", 
			"LETTER", "LET", "IN", "END", "VAL", "LOCAL", "FUN", "FN", "OPAR", "CPAR", 
			"OBRACE", "CBRACE", "DOUBLEQUOTE", "ASSIGNMEMT", "IF", "THEN", "ELSE", 
			"WHILE", "DO", "CHAR", "STRING", "INT", "BOOL", "REALNUM", "Stringliteral", 
			"ID"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "'^'", "'*'", "'/'", "'%'", "'+'", "'-'", "'='", "'=>'", 
			null, null, "'not'", null, "'>'", "'<'", "'>='", "'<='", null, null, 
			null, null, "'let'", "'in'", "'end'", "'val'", "'local'", "'fun'", "'fn'", 
			"'('", "')'", "'{'", "'}'", "'\"'", "':='", "'if'", "'then'", "'else'", 
			"'while'", "'do'", "'char'", "'string'", "'int'", "'bool'", "'real'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, "POW", "MUL", "DIV", "MOD", "ADD", "SUB", "EQUAL", "ARROW", 
			"AND", "OR", "NOT", "BOOLEAN", "GT", "LT", "GE", "LE", "NUMBER", "REAL", 
			"WHITESPACE", "LETTER", "LET", "IN", "END", "VAL", "LOCAL", "FUN", "FN", 
			"OPAR", "CPAR", "OBRACE", "CBRACE", "DOUBLEQUOTE", "ASSIGNMEMT", "IF", 
			"THEN", "ELSE", "WHILE", "DO", "CHAR", "STRING", "INT", "BOOL", "REALNUM", 
			"Stringliteral", "ID"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\60\u0125\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t"+
		" \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t"+
		"+\4,\t,\4-\t-\4.\t.\4/\t/\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7"+
		"\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3"+
		"\13\3\13\3\13\3\13\3\13\5\13\177\n\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f"+
		"\3\f\3\f\5\f\u008b\n\f\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3"+
		"\16\3\16\3\16\5\16\u009a\n\16\3\17\3\17\3\20\3\20\3\21\3\21\3\21\3\22"+
		"\3\22\3\22\3\23\6\23\u00a7\n\23\r\23\16\23\u00a8\3\24\6\24\u00ac\n\24"+
		"\r\24\16\24\u00ad\3\24\3\24\6\24\u00b2\n\24\r\24\16\24\u00b3\3\25\6\25"+
		"\u00b7\n\25\r\25\16\25\u00b8\3\25\3\25\3\26\3\26\3\27\3\27\3\27\3\27\3"+
		"\30\3\30\3\30\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3"+
		"\33\3\33\3\33\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3\36\3\36\3\37\3\37\3"+
		" \3 \3!\3!\3\"\3\"\3#\3#\3#\3$\3$\3$\3%\3%\3%\3%\3%\3&\3&\3&\3&\3&\3\'"+
		"\3\'\3\'\3\'\3\'\3\'\3(\3(\3(\3)\3)\3)\3)\3)\3*\3*\3*\3*\3*\3*\3*\3+\3"+
		"+\3+\3+\3,\3,\3,\3,\3,\3-\3-\3-\3-\3-\3.\3.\7.\u011a\n.\f.\16.\u011d\13"+
		".\3/\3/\7/\u0121\n/\f/\16/\u0124\13/\2\2\60\3\3\5\4\7\5\t\6\13\7\r\b\17"+
		"\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+"+
		"\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+"+
		"U,W-Y.[/]\60\3\2\b\3\2\62;\5\2\13\f\17\17\"\"\4\2C\\c|\5\2\62;C\\c|\6"+
		"\2))C\\aac|\7\2))\62;C\\aac|\2\u012f\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2"+
		"\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23"+
		"\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2"+
		"\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2"+
		"\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3"+
		"\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2"+
		"\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2"+
		"\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2["+
		"\3\2\2\2\2]\3\2\2\2\3_\3\2\2\2\5a\3\2\2\2\7c\3\2\2\2\te\3\2\2\2\13g\3"+
		"\2\2\2\ri\3\2\2\2\17k\3\2\2\2\21m\3\2\2\2\23o\3\2\2\2\25~\3\2\2\2\27\u008a"+
		"\3\2\2\2\31\u008c\3\2\2\2\33\u0099\3\2\2\2\35\u009b\3\2\2\2\37\u009d\3"+
		"\2\2\2!\u009f\3\2\2\2#\u00a2\3\2\2\2%\u00a6\3\2\2\2\'\u00ab\3\2\2\2)\u00b6"+
		"\3\2\2\2+\u00bc\3\2\2\2-\u00be\3\2\2\2/\u00c2\3\2\2\2\61\u00c5\3\2\2\2"+
		"\63\u00c9\3\2\2\2\65\u00cd\3\2\2\2\67\u00d3\3\2\2\29\u00d7\3\2\2\2;\u00da"+
		"\3\2\2\2=\u00dc\3\2\2\2?\u00de\3\2\2\2A\u00e0\3\2\2\2C\u00e2\3\2\2\2E"+
		"\u00e4\3\2\2\2G\u00e7\3\2\2\2I\u00ea\3\2\2\2K\u00ef\3\2\2\2M\u00f4\3\2"+
		"\2\2O\u00fa\3\2\2\2Q\u00fd\3\2\2\2S\u0102\3\2\2\2U\u0109\3\2\2\2W\u010d"+
		"\3\2\2\2Y\u0112\3\2\2\2[\u0117\3\2\2\2]\u011e\3\2\2\2_`\7=\2\2`\4\3\2"+
		"\2\2ab\7`\2\2b\6\3\2\2\2cd\7,\2\2d\b\3\2\2\2ef\7\61\2\2f\n\3\2\2\2gh\7"+
		"\'\2\2h\f\3\2\2\2ij\7-\2\2j\16\3\2\2\2kl\7/\2\2l\20\3\2\2\2mn\7?\2\2n"+
		"\22\3\2\2\2op\7?\2\2pq\7@\2\2q\24\3\2\2\2rs\7(\2\2s\177\7(\2\2tu\7c\2"+
		"\2uv\7p\2\2v\177\7f\2\2wx\7c\2\2xy\7p\2\2yz\7f\2\2z{\7c\2\2{|\7n\2\2|"+
		"}\7u\2\2}\177\7q\2\2~r\3\2\2\2~t\3\2\2\2~w\3\2\2\2\177\26\3\2\2\2\u0080"+
		"\u0081\7~\2\2\u0081\u008b\7~\2\2\u0082\u0083\7q\2\2\u0083\u008b\7t\2\2"+
		"\u0084\u0085\7q\2\2\u0085\u0086\7t\2\2\u0086\u0087\7g\2\2\u0087\u0088"+
		"\7n\2\2\u0088\u0089\7u\2\2\u0089\u008b\7g\2\2\u008a\u0080\3\2\2\2\u008a"+
		"\u0082\3\2\2\2\u008a\u0084\3\2\2\2\u008b\30\3\2\2\2\u008c\u008d\7p\2\2"+
		"\u008d\u008e\7q\2\2\u008e\u008f\7v\2\2\u008f\32\3\2\2\2\u0090\u0091\7"+
		"v\2\2\u0091\u0092\7t\2\2\u0092\u0093\7w\2\2\u0093\u009a\7g\2\2\u0094\u0095"+
		"\7h\2\2\u0095\u0096\7c\2\2\u0096\u0097\7n\2\2\u0097\u0098\7u\2\2\u0098"+
		"\u009a\7g\2\2\u0099\u0090\3\2\2\2\u0099\u0094\3\2\2\2\u009a\34\3\2\2\2"+
		"\u009b\u009c\7@\2\2\u009c\36\3\2\2\2\u009d\u009e\7>\2\2\u009e \3\2\2\2"+
		"\u009f\u00a0\7@\2\2\u00a0\u00a1\7?\2\2\u00a1\"\3\2\2\2\u00a2\u00a3\7>"+
		"\2\2\u00a3\u00a4\7?\2\2\u00a4$\3\2\2\2\u00a5\u00a7\t\2\2\2\u00a6\u00a5"+
		"\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8\u00a6\3\2\2\2\u00a8\u00a9\3\2\2\2\u00a9"+
		"&\3\2\2\2\u00aa\u00ac\t\2\2\2\u00ab\u00aa\3\2\2\2\u00ac\u00ad\3\2\2\2"+
		"\u00ad\u00ab\3\2\2\2\u00ad\u00ae\3\2\2\2\u00ae\u00af\3\2\2\2\u00af\u00b1"+
		"\7\60\2\2\u00b0\u00b2\t\2\2\2\u00b1\u00b0\3\2\2\2\u00b2\u00b3\3\2\2\2"+
		"\u00b3\u00b1\3\2\2\2\u00b3\u00b4\3\2\2\2\u00b4(\3\2\2\2\u00b5\u00b7\t"+
		"\3\2\2\u00b6\u00b5\3\2\2\2\u00b7\u00b8\3\2\2\2\u00b8\u00b6\3\2\2\2\u00b8"+
		"\u00b9\3\2\2\2\u00b9\u00ba\3\2\2\2\u00ba\u00bb\b\25\2\2\u00bb*\3\2\2\2"+
		"\u00bc\u00bd\t\4\2\2\u00bd,\3\2\2\2\u00be\u00bf\7n\2\2\u00bf\u00c0\7g"+
		"\2\2\u00c0\u00c1\7v\2\2\u00c1.\3\2\2\2\u00c2\u00c3\7k\2\2\u00c3\u00c4"+
		"\7p\2\2\u00c4\60\3\2\2\2\u00c5\u00c6\7g\2\2\u00c6\u00c7\7p\2\2\u00c7\u00c8"+
		"\7f\2\2\u00c8\62\3\2\2\2\u00c9\u00ca\7x\2\2\u00ca\u00cb\7c\2\2\u00cb\u00cc"+
		"\7n\2\2\u00cc\64\3\2\2\2\u00cd\u00ce\7n\2\2\u00ce\u00cf\7q\2\2\u00cf\u00d0"+
		"\7e\2\2\u00d0\u00d1\7c\2\2\u00d1\u00d2\7n\2\2\u00d2\66\3\2\2\2\u00d3\u00d4"+
		"\7h\2\2\u00d4\u00d5\7w\2\2\u00d5\u00d6\7p\2\2\u00d68\3\2\2\2\u00d7\u00d8"+
		"\7h\2\2\u00d8\u00d9\7p\2\2\u00d9:\3\2\2\2\u00da\u00db\7*\2\2\u00db<\3"+
		"\2\2\2\u00dc\u00dd\7+\2\2\u00dd>\3\2\2\2\u00de\u00df\7}\2\2\u00df@\3\2"+
		"\2\2\u00e0\u00e1\7\177\2\2\u00e1B\3\2\2\2\u00e2\u00e3\7$\2\2\u00e3D\3"+
		"\2\2\2\u00e4\u00e5\7<\2\2\u00e5\u00e6\7?\2\2\u00e6F\3\2\2\2\u00e7\u00e8"+
		"\7k\2\2\u00e8\u00e9\7h\2\2\u00e9H\3\2\2\2\u00ea\u00eb\7v\2\2\u00eb\u00ec"+
		"\7j\2\2\u00ec\u00ed\7g\2\2\u00ed\u00ee\7p\2\2\u00eeJ\3\2\2\2\u00ef\u00f0"+
		"\7g\2\2\u00f0\u00f1\7n\2\2\u00f1\u00f2\7u\2\2\u00f2\u00f3\7g\2\2\u00f3"+
		"L\3\2\2\2\u00f4\u00f5\7y\2\2\u00f5\u00f6\7j\2\2\u00f6\u00f7\7k\2\2\u00f7"+
		"\u00f8\7n\2\2\u00f8\u00f9\7g\2\2\u00f9N\3\2\2\2\u00fa\u00fb\7f\2\2\u00fb"+
		"\u00fc\7q\2\2\u00fcP\3\2\2\2\u00fd\u00fe\7e\2\2\u00fe\u00ff\7j\2\2\u00ff"+
		"\u0100\7c\2\2\u0100\u0101\7t\2\2\u0101R\3\2\2\2\u0102\u0103\7u\2\2\u0103"+
		"\u0104\7v\2\2\u0104\u0105\7t\2\2\u0105\u0106\7k\2\2\u0106\u0107\7p\2\2"+
		"\u0107\u0108\7i\2\2\u0108T\3\2\2\2\u0109\u010a\7k\2\2\u010a\u010b\7p\2"+
		"\2\u010b\u010c\7v\2\2\u010cV\3\2\2\2\u010d\u010e\7d\2\2\u010e\u010f\7"+
		"q\2\2\u010f\u0110\7q\2\2\u0110\u0111\7n\2\2\u0111X\3\2\2\2\u0112\u0113"+
		"\7t\2\2\u0113\u0114\7g\2\2\u0114\u0115\7c\2\2\u0115\u0116\7n\2\2\u0116"+
		"Z\3\2\2\2\u0117\u011b\t\4\2\2\u0118\u011a\t\5\2\2\u0119\u0118\3\2\2\2"+
		"\u011a\u011d\3\2\2\2\u011b\u0119\3\2\2\2\u011b\u011c\3\2\2\2\u011c\\\3"+
		"\2\2\2\u011d\u011b\3\2\2\2\u011e\u0122\t\6\2\2\u011f\u0121\t\7\2\2\u0120"+
		"\u011f\3\2\2\2\u0121\u0124\3\2\2\2\u0122\u0120\3\2\2\2\u0122\u0123\3\2"+
		"\2\2\u0123^\3\2\2\2\u0124\u0122\3\2\2\2\f\2~\u008a\u0099\u00a8\u00ad\u00b3"+
		"\u00b8\u011b\u0122\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}