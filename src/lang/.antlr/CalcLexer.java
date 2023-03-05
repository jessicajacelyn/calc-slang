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
		T__0=1, T__1=2, POW=3, MUL=4, DIV=5, MOD=6, ADD=7, SUB=8, NUMBER=9, WHITESPACE=10, 
		LETTER=11, Stringliteral=12;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "POW", "MUL", "DIV", "MOD", "ADD", "SUB", "NUMBER", "WHITESPACE", 
			"LETTER", "Stringliteral", "Encodingprefix", "Schar", "Rawstring"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'^'", "'*'", "'/'", "'%'", "'+'", "'-'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "POW", "MUL", "DIV", "MOD", "ADD", "SUB", "NUMBER", 
			"WHITESPACE", "LETTER", "Stringliteral"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\16o\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\3\2\3\3\3\3\3\4"+
		"\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\6\n\63\n\n\r\n\16\n\64"+
		"\3\13\6\138\n\13\r\13\16\139\3\13\3\13\3\f\3\f\3\r\5\rA\n\r\3\r\3\r\7"+
		"\rE\n\r\f\r\16\rH\13\r\3\r\3\r\5\rL\n\r\3\r\3\r\5\rP\n\r\3\16\3\16\3\16"+
		"\5\16U\n\16\3\17\3\17\3\20\3\20\7\20[\n\20\f\20\16\20^\13\20\3\20\3\20"+
		"\7\20b\n\20\f\20\16\20e\13\20\3\20\3\20\7\20i\n\20\f\20\16\20l\13\20\3"+
		"\20\3\20\5\\cj\2\21\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r"+
		"\31\16\33\2\35\2\37\2\3\2\7\3\2\62;\5\2\13\f\17\17\"\"\4\2C\\c|\5\2NN"+
		"WWww\5\2C\\aac|\2u\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13"+
		"\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2"+
		"\2\2\27\3\2\2\2\2\31\3\2\2\2\3!\3\2\2\2\5#\3\2\2\2\7%\3\2\2\2\t\'\3\2"+
		"\2\2\13)\3\2\2\2\r+\3\2\2\2\17-\3\2\2\2\21/\3\2\2\2\23\62\3\2\2\2\25\67"+
		"\3\2\2\2\27=\3\2\2\2\31O\3\2\2\2\33T\3\2\2\2\35V\3\2\2\2\37X\3\2\2\2!"+
		"\"\7*\2\2\"\4\3\2\2\2#$\7+\2\2$\6\3\2\2\2%&\7`\2\2&\b\3\2\2\2\'(\7,\2"+
		"\2(\n\3\2\2\2)*\7\61\2\2*\f\3\2\2\2+,\7\'\2\2,\16\3\2\2\2-.\7-\2\2.\20"+
		"\3\2\2\2/\60\7/\2\2\60\22\3\2\2\2\61\63\t\2\2\2\62\61\3\2\2\2\63\64\3"+
		"\2\2\2\64\62\3\2\2\2\64\65\3\2\2\2\65\24\3\2\2\2\668\t\3\2\2\67\66\3\2"+
		"\2\289\3\2\2\29\67\3\2\2\29:\3\2\2\2:;\3\2\2\2;<\b\13\2\2<\26\3\2\2\2"+
		"=>\t\4\2\2>\30\3\2\2\2?A\5\33\16\2@?\3\2\2\2@A\3\2\2\2AB\3\2\2\2BF\7$"+
		"\2\2CE\5\35\17\2DC\3\2\2\2EH\3\2\2\2FD\3\2\2\2FG\3\2\2\2GI\3\2\2\2HF\3"+
		"\2\2\2IP\7$\2\2JL\5\33\16\2KJ\3\2\2\2KL\3\2\2\2LM\3\2\2\2MN\7T\2\2NP\5"+
		"\37\20\2O@\3\2\2\2OK\3\2\2\2P\32\3\2\2\2QR\7w\2\2RU\7:\2\2SU\t\5\2\2T"+
		"Q\3\2\2\2TS\3\2\2\2U\34\3\2\2\2VW\t\6\2\2W\36\3\2\2\2X\\\7$\2\2Y[\13\2"+
		"\2\2ZY\3\2\2\2[^\3\2\2\2\\]\3\2\2\2\\Z\3\2\2\2]_\3\2\2\2^\\\3\2\2\2_c"+
		"\7*\2\2`b\13\2\2\2a`\3\2\2\2be\3\2\2\2cd\3\2\2\2ca\3\2\2\2df\3\2\2\2e"+
		"c\3\2\2\2fj\7+\2\2gi\13\2\2\2hg\3\2\2\2il\3\2\2\2jk\3\2\2\2jh\3\2\2\2"+
		"km\3\2\2\2lj\3\2\2\2mn\7$\2\2n \3\2\2\2\r\2\649@FKOT\\cj\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}