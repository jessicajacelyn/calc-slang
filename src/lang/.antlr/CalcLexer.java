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
		T__0=1, T__1=2, T__2=3, POW=4, MUL=5, DIV=6, MOD=7, ADD=8, SUB=9, EQUAL=10, 
		NUMBER=11, WHITESPACE=12, LETTER=13, Stringliteral=14;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "POW", "MUL", "DIV", "MOD", "ADD", "SUB", "EQUAL", 
			"NUMBER", "WHITESPACE", "LETTER", "Stringliteral", "Encodingprefix", 
			"Rawstring"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "':='", "'('", "')'", "'^'", "'*'", "'/'", "'%'", "'+'", "'-'", 
			"'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "POW", "MUL", "DIV", "MOD", "ADD", "SUB", "EQUAL", 
			"NUMBER", "WHITESPACE", "LETTER", "Stringliteral"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\20g\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\3\2\3\2\3"+
		"\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13"+
		"\3\13\3\f\6\f:\n\f\r\f\16\f;\3\r\6\r?\n\r\r\r\16\r@\3\r\3\r\3\16\3\16"+
		"\3\17\6\17H\n\17\r\17\16\17I\3\20\3\20\3\20\5\20O\n\20\3\21\3\21\7\21"+
		"S\n\21\f\21\16\21V\13\21\3\21\3\21\7\21Z\n\21\f\21\16\21]\13\21\3\21\3"+
		"\21\7\21a\n\21\f\21\16\21d\13\21\3\21\3\21\5T[b\2\22\3\3\5\4\7\5\t\6\13"+
		"\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\2!\2\3\2\7\3\2\62"+
		";\5\2\13\f\17\17\"\"\4\2C\\c|\5\2\62;C\\c|\5\2NNWWww\2k\2\3\3\2\2\2\2"+
		"\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2"+
		"\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2"+
		"\33\3\2\2\2\2\35\3\2\2\2\3#\3\2\2\2\5&\3\2\2\2\7(\3\2\2\2\t*\3\2\2\2\13"+
		",\3\2\2\2\r.\3\2\2\2\17\60\3\2\2\2\21\62\3\2\2\2\23\64\3\2\2\2\25\66\3"+
		"\2\2\2\279\3\2\2\2\31>\3\2\2\2\33D\3\2\2\2\35G\3\2\2\2\37N\3\2\2\2!P\3"+
		"\2\2\2#$\7<\2\2$%\7?\2\2%\4\3\2\2\2&\'\7*\2\2\'\6\3\2\2\2()\7+\2\2)\b"+
		"\3\2\2\2*+\7`\2\2+\n\3\2\2\2,-\7,\2\2-\f\3\2\2\2./\7\61\2\2/\16\3\2\2"+
		"\2\60\61\7\'\2\2\61\20\3\2\2\2\62\63\7-\2\2\63\22\3\2\2\2\64\65\7/\2\2"+
		"\65\24\3\2\2\2\66\67\7?\2\2\67\26\3\2\2\28:\t\2\2\298\3\2\2\2:;\3\2\2"+
		"\2;9\3\2\2\2;<\3\2\2\2<\30\3\2\2\2=?\t\3\2\2>=\3\2\2\2?@\3\2\2\2@>\3\2"+
		"\2\2@A\3\2\2\2AB\3\2\2\2BC\b\r\2\2C\32\3\2\2\2DE\t\4\2\2E\34\3\2\2\2F"+
		"H\t\5\2\2GF\3\2\2\2HI\3\2\2\2IG\3\2\2\2IJ\3\2\2\2J\36\3\2\2\2KL\7w\2\2"+
		"LO\7:\2\2MO\t\6\2\2NK\3\2\2\2NM\3\2\2\2O \3\2\2\2PT\7$\2\2QS\13\2\2\2"+
		"RQ\3\2\2\2SV\3\2\2\2TU\3\2\2\2TR\3\2\2\2UW\3\2\2\2VT\3\2\2\2W[\7*\2\2"+
		"XZ\13\2\2\2YX\3\2\2\2Z]\3\2\2\2[\\\3\2\2\2[Y\3\2\2\2\\^\3\2\2\2][\3\2"+
		"\2\2^b\7+\2\2_a\13\2\2\2`_\3\2\2\2ad\3\2\2\2bc\3\2\2\2b`\3\2\2\2ce\3\2"+
		"\2\2db\3\2\2\2ef\7$\2\2f\"\3\2\2\2\n\2;@INT[b\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}