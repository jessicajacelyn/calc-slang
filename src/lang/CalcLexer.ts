// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class CalcLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly POW = 6;
	public static readonly MUL = 7;
	public static readonly DIV = 8;
	public static readonly MOD = 9;
	public static readonly ADD = 10;
	public static readonly SUB = 11;
	public static readonly EQUAL = 12;
	public static readonly AND = 13;
	public static readonly OR = 14;
	public static readonly BOOLEAN = 15;
	public static readonly GT = 16;
	public static readonly LT = 17;
	public static readonly GE = 18;
	public static readonly LE = 19;
	public static readonly NUMBER = 20;
	public static readonly WHITESPACE = 21;
	public static readonly LETTER = 22;
	public static readonly VAL = 23;
	public static readonly Stringliteral = 24;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "POW", "MUL", "DIV", "MOD", "ADD", 
		"SUB", "EQUAL", "AND", "OR", "BOOLEAN", "GT", "LT", "GE", "LE", "NUMBER", 
		"WHITESPACE", "LETTER", "VAL", "Stringliteral", "Encodingprefix", "Rawstring",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':='", "';'", "'('", "')'", "'let'", "'^'", "'*'", "'/'", 
		"'%'", "'+'", "'-'", "'='", undefined, undefined, undefined, "'>'", "'<'", 
		"'>='", "'<='", undefined, undefined, undefined, "'val'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "POW", 
		"MUL", "DIV", "MOD", "ADD", "SUB", "EQUAL", "AND", "OR", "BOOLEAN", "GT", 
		"LT", "GE", "LE", "NUMBER", "WHITESPACE", "LETTER", "VAL", "Stringliteral",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CalcLexer._LITERAL_NAMES, CalcLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CalcLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CalcLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Calc.g4"; }

	// @Override
	public get ruleNames(): string[] { return CalcLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CalcLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return CalcLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return CalcLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1A\xB1\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03" +
		"\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"_\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0Fk\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10v\n\x10\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x06\x15" +
		"\x83\n\x15\r\x15\x0E\x15\x84\x03\x16\x06\x16\x88\n\x16\r\x16\x0E\x16\x89" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\x99\n\x1A\x03\x1B\x03\x1B\x07" +
		"\x1B\x9D\n\x1B\f\x1B\x0E\x1B\xA0\v\x1B\x03\x1B\x03\x1B\x07\x1B\xA4\n\x1B" +
		"\f\x1B\x0E\x1B\xA7\v\x1B\x03\x1B\x03\x1B\x07\x1B\xAB\n\x1B\f\x1B\x0E\x1B" +
		"\xAE\v\x1B\x03\x1B\x03\x1B\x05\x9E\xA5\xAC\x02\x02\x1C\x03\x02\x03\x05" +
		"\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13" +
		"\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02" +
		"\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/" +
		"\x02\x191\x02\x1A3\x02\x025\x02\x02\x03\x02\x07\x03\x022;\x05\x02\v\f" +
		"\x0F\x0F\"\"\x04\x02C\\c|\x05\x022;C\\c|\x05\x02NNWWww\x02\xB9\x02\x03" +
		"\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t" +
		"\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03" +
		"\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03" +
		"\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03" +
		"\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03" +
		"\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02" +
		"\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02" +
		"/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x037\x03\x02\x02\x02\x05:\x03\x02" +
		"\x02\x02\x07<\x03\x02\x02\x02\t>\x03\x02\x02\x02\v@\x03\x02\x02\x02\r" +
		"D\x03\x02\x02\x02\x0FF\x03\x02\x02\x02\x11H\x03\x02\x02\x02\x13J\x03\x02" +
		"\x02\x02\x15L\x03\x02\x02\x02\x17N\x03\x02\x02\x02\x19P\x03\x02\x02\x02" +
		"\x1B^\x03\x02\x02\x02\x1Dj\x03\x02\x02\x02\x1Fu\x03\x02\x02\x02!w\x03" +
		"\x02\x02\x02#y\x03\x02\x02\x02%{\x03\x02\x02\x02\'~\x03\x02\x02\x02)\x82" +
		"\x03\x02\x02\x02+\x87\x03\x02\x02\x02-\x8D\x03\x02\x02\x02/\x8F\x03\x02" +
		"\x02\x021\x93\x03\x02\x02\x023\x98\x03\x02\x02\x025\x9A\x03\x02\x02\x02" +
		"78\x07<\x02\x0289\x07?\x02\x029\x04\x03\x02\x02\x02:;\x07=\x02\x02;\x06" +
		"\x03\x02\x02\x02<=\x07*\x02\x02=\b\x03\x02\x02\x02>?\x07+\x02\x02?\n\x03" +
		"\x02\x02\x02@A\x07n\x02\x02AB\x07g\x02\x02BC\x07v\x02\x02C\f\x03\x02\x02" +
		"\x02DE\x07`\x02\x02E\x0E\x03\x02\x02\x02FG\x07,\x02\x02G\x10\x03\x02\x02" +
		"\x02HI\x071\x02\x02I\x12\x03\x02\x02\x02JK\x07\'\x02\x02K\x14\x03\x02" +
		"\x02\x02LM\x07-\x02\x02M\x16\x03\x02\x02\x02NO\x07/\x02\x02O\x18\x03\x02" +
		"\x02\x02PQ\x07?\x02\x02Q\x1A\x03\x02\x02\x02RS\x07(\x02\x02S_\x07(\x02" +
		"\x02TU\x07c\x02\x02UV\x07p\x02\x02V_\x07f\x02\x02WX\x07c\x02\x02XY\x07" +
		"p\x02\x02YZ\x07f\x02\x02Z[\x07c\x02\x02[\\\x07n\x02\x02\\]\x07u\x02\x02" +
		"]_\x07q\x02\x02^R\x03\x02\x02\x02^T\x03\x02\x02\x02^W\x03\x02\x02\x02" +
		"_\x1C\x03\x02\x02\x02`a\x07~\x02\x02ak\x07~\x02\x02bc\x07q\x02\x02ck\x07" +
		"t\x02\x02de\x07q\x02\x02ef\x07t\x02\x02fg\x07g\x02\x02gh\x07n\x02\x02" +
		"hi\x07u\x02\x02ik\x07g\x02\x02j`\x03\x02\x02\x02jb\x03\x02\x02\x02jd\x03" +
		"\x02\x02\x02k\x1E\x03\x02\x02\x02lm\x07v\x02\x02mn\x07t\x02\x02no\x07" +
		"w\x02\x02ov\x07g\x02\x02pq\x07h\x02\x02qr\x07c\x02\x02rs\x07n\x02\x02" +
		"st\x07u\x02\x02tv\x07g\x02\x02ul\x03\x02\x02\x02up\x03\x02\x02\x02v \x03" +
		"\x02\x02\x02wx\x07@\x02\x02x\"\x03\x02\x02\x02yz\x07>\x02\x02z$\x03\x02" +
		"\x02\x02{|\x07@\x02\x02|}\x07?\x02\x02}&\x03\x02\x02\x02~\x7F\x07>\x02" +
		"\x02\x7F\x80\x07?\x02\x02\x80(\x03\x02\x02\x02\x81\x83\t\x02\x02\x02\x82" +
		"\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84" +
		"\x85\x03\x02\x02\x02\x85*\x03\x02\x02\x02\x86\x88\t\x03\x02\x02\x87\x86" +
		"\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A" +
		"\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C\b\x16\x02\x02\x8C,\x03" +
		"\x02\x02\x02\x8D\x8E\t\x04\x02\x02\x8E.\x03\x02\x02\x02\x8F\x90\x07x\x02" +
		"\x02\x90\x91\x07c\x02\x02\x91\x92\x07n\x02\x02\x920\x03\x02\x02\x02\x93" +
		"\x94\t\x05\x02\x02\x942\x03\x02\x02\x02\x95\x96\x07w\x02\x02\x96\x99\x07" +
		":\x02\x02\x97\x99\t\x06\x02\x02\x98\x95\x03\x02\x02\x02\x98\x97\x03\x02" +
		"\x02\x02\x994\x03\x02\x02\x02\x9A\x9E\x07$\x02\x02\x9B\x9D\v\x02\x02\x02" +
		"\x9C\x9B\x03\x02\x02\x02\x9D\xA0\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02" +
		"\x9E\x9C\x03\x02\x02\x02\x9F\xA1\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02" +
		"\xA1\xA5\x07*\x02\x02\xA2\xA4\v\x02\x02\x02\xA3\xA2\x03\x02\x02\x02\xA4" +
		"\xA7\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA6" +
		"\xA8\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xAC\x07+\x02\x02\xA9" +
		"\xAB\v\x02\x02\x02\xAA\xA9\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02\xAC" +
		"\xAD\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xAF\x03\x02\x02\x02\xAE" +
		"\xAC\x03\x02\x02\x02\xAF\xB0\x07$\x02\x02\xB06\x03\x02\x02\x02\f\x02^" +
		"ju\x84\x89\x98\x9E\xA5\xAC\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalcLexer.__ATN) {
			CalcLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalcLexer._serializedATN));
		}

		return CalcLexer.__ATN;
	}

}

