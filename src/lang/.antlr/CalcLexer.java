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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, POW=7, MUL=8, DIV=9, MOD=10, 
		ADD=11, SUB=12, EQUAL=13, NUMBER=14, WHITESPACE=15, LETTER=16, Stringliteral=17;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "POW", "MUL", "DIV", 
			"MOD", "ADD", "SUB", "EQUAL", "NUMBER", "WHITESPACE", "LETTER", "Stringliteral", 
			"Encodingprefix", "Rawstring"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "':='", "';'", "'('", "')'", "'let'", "'val'", "'^'", "'*'", "'/'", 
			"'%'", "'+'", "'-'", "'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, "POW", "MUL", "DIV", "MOD", 
			"ADD", "SUB", "EQUAL", "NUMBER", "WHITESPACE", "LETTER", "Stringliteral"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\23t\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\3\2\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\6\3"+
		"\6\3\7\3\7\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3"+
		"\16\3\16\3\17\6\17J\n\17\r\17\16\17K\3\20\6\20O\n\20\r\20\16\20P\3\20"+
		"\3\20\3\21\3\21\3\22\3\22\3\23\3\23\3\23\5\23\\\n\23\3\24\3\24\7\24`\n"+
		"\24\f\24\16\24c\13\24\3\24\3\24\7\24g\n\24\f\24\16\24j\13\24\3\24\3\24"+
		"\7\24n\n\24\f\24\16\24q\13\24\3\24\3\24\5aho\2\25\3\3\5\4\7\5\t\6\13\7"+
		"\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\2\'\2"+
		"\3\2\7\3\2\62;\5\2\13\f\17\17\"\"\4\2C\\c|\5\2\62;C\\c|\5\2NNWWww\2w\2"+
		"\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2"+
		"\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2"+
		"\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2"+
		"\2\3)\3\2\2\2\5,\3\2\2\2\7.\3\2\2\2\t\60\3\2\2\2\13\62\3\2\2\2\r\66\3"+
		"\2\2\2\17:\3\2\2\2\21<\3\2\2\2\23>\3\2\2\2\25@\3\2\2\2\27B\3\2\2\2\31"+
		"D\3\2\2\2\33F\3\2\2\2\35I\3\2\2\2\37N\3\2\2\2!T\3\2\2\2#V\3\2\2\2%[\3"+
		"\2\2\2\']\3\2\2\2)*\7<\2\2*+\7?\2\2+\4\3\2\2\2,-\7=\2\2-\6\3\2\2\2./\7"+
		"*\2\2/\b\3\2\2\2\60\61\7+\2\2\61\n\3\2\2\2\62\63\7n\2\2\63\64\7g\2\2\64"+
		"\65\7v\2\2\65\f\3\2\2\2\66\67\7x\2\2\678\7c\2\289\7n\2\29\16\3\2\2\2:"+
		";\7`\2\2;\20\3\2\2\2<=\7,\2\2=\22\3\2\2\2>?\7\61\2\2?\24\3\2\2\2@A\7\'"+
		"\2\2A\26\3\2\2\2BC\7-\2\2C\30\3\2\2\2DE\7/\2\2E\32\3\2\2\2FG\7?\2\2G\34"+
		"\3\2\2\2HJ\t\2\2\2IH\3\2\2\2JK\3\2\2\2KI\3\2\2\2KL\3\2\2\2L\36\3\2\2\2"+
		"MO\t\3\2\2NM\3\2\2\2OP\3\2\2\2PN\3\2\2\2PQ\3\2\2\2QR\3\2\2\2RS\b\20\2"+
		"\2S \3\2\2\2TU\t\4\2\2U\"\3\2\2\2VW\t\5\2\2W$\3\2\2\2XY\7w\2\2Y\\\7:\2"+
		"\2Z\\\t\6\2\2[X\3\2\2\2[Z\3\2\2\2\\&\3\2\2\2]a\7$\2\2^`\13\2\2\2_^\3\2"+
		"\2\2`c\3\2\2\2ab\3\2\2\2a_\3\2\2\2bd\3\2\2\2ca\3\2\2\2dh\7*\2\2eg\13\2"+
		"\2\2fe\3\2\2\2gj\3\2\2\2hi\3\2\2\2hf\3\2\2\2ik\3\2\2\2jh\3\2\2\2ko\7+"+
		"\2\2ln\13\2\2\2ml\3\2\2\2nq\3\2\2\2op\3\2\2\2om\3\2\2\2pr\3\2\2\2qo\3"+
		"\2\2\2rs\7$\2\2s(\3\2\2\2\t\2KP[aho\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}