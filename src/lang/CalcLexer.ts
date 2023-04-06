// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator'
import { CharStream } from 'antlr4ts/CharStream'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { Lexer } from 'antlr4ts/Lexer'
import * as Utils from 'antlr4ts/misc/Utils'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

export class CalcLexer extends Lexer {
  public static readonly T__0 = 1
  public static readonly T__1 = 2
  public static readonly POW = 3
  public static readonly MUL = 4
  public static readonly DIV = 5
  public static readonly MOD = 6
  public static readonly ADD = 7
  public static readonly SUB = 8
  public static readonly EQUAL = 9
  public static readonly AND = 10
  public static readonly OR = 11
  public static readonly NOT = 12
  public static readonly BOOLEAN = 13
  public static readonly GT = 14
  public static readonly LT = 15
  public static readonly GE = 16
  public static readonly LE = 17
  public static readonly NUMBER = 18
  public static readonly REAL = 19
  public static readonly WHITESPACE = 20
  public static readonly LETTER = 21
  public static readonly LET = 22
  public static readonly IN = 23
  public static readonly END = 24
  public static readonly VAL = 25
  public static readonly LOCAL = 26
  public static readonly OPAR = 27
  public static readonly CPAR = 28
  public static readonly OBRACE = 29
  public static readonly CBRACE = 30
  public static readonly DOUBLEQUOTE = 31
  public static readonly ASSIGNMEMT = 32
  public static readonly IF = 33
  public static readonly THEN = 34
  public static readonly ELSE = 35
  public static readonly WHILE = 36
  public static readonly DO = 37
  public static readonly CHAR = 38
  public static readonly STRING = 39
  public static readonly INT = 40
  public static readonly BOOL = 41
  public static readonly REALNUM = 42
  public static readonly Stringliteral = 43

  // tslint:disable:no-trailing-whitespace
  public static readonly channelNames: string[] = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN']

  // tslint:disable:no-trailing-whitespace
  public static readonly modeNames: string[] = ['DEFAULT_MODE']

  public static readonly ruleNames: string[] = [
    'T__0',
    'T__1',
    'POW',
    'MUL',
    'DIV',
    'MOD',
    'ADD',
    'SUB',
    'EQUAL',
    'AND',
    'OR',
    'NOT',
    'BOOLEAN',
    'GT',
    'LT',
    'GE',
    'LE',
    'NUMBER',
    'REAL',
    'WHITESPACE',
    'LETTER',
    'LET',
    'IN',
    'END',
    'VAL',
    'LOCAL',
    'OPAR',
    'CPAR',
    'OBRACE',
    'CBRACE',
    'DOUBLEQUOTE',
    'ASSIGNMEMT',
    'IF',
    'THEN',
    'ELSE',
    'WHILE',
    'DO',
    'CHAR',
    'STRING',
    'INT',
    'BOOL',
    'REALNUM',
    'Stringliteral'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "';'",
    "','",
    "'^'",
    "'*'",
    "'/'",
    "'%'",
    "'+'",
    "'-'",
    "'='",
    undefined,
    undefined,
    "'not'",
    undefined,
    "'>'",
    "'<'",
    "'>='",
    "'<='",
    undefined,
    undefined,
    undefined,
    undefined,
    "'let'",
    "'in'",
    "'end'",
    "'val'",
    "'local val'",
    "'('",
    "')'",
    "'{'",
    "'}'",
    "'\"'",
    "':='",
    "'if'",
    "'then'",
    "'else'",
    "'while'",
    "'do'",
    "'char'",
    "'string'",
    "'int'",
    "'bool'",
    "'real'"
  ]
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    'POW',
    'MUL',
    'DIV',
    'MOD',
    'ADD',
    'SUB',
    'EQUAL',
    'AND',
    'OR',
    'NOT',
    'BOOLEAN',
    'GT',
    'LT',
    'GE',
    'LE',
    'NUMBER',
    'REAL',
    'WHITESPACE',
    'LETTER',
    'LET',
    'IN',
    'END',
    'VAL',
    'LOCAL',
    'OPAR',
    'CPAR',
    'OBRACE',
    'CBRACE',
    'DOUBLEQUOTE',
    'ASSIGNMEMT',
    'IF',
    'THEN',
    'ELSE',
    'WHILE',
    'DO',
    'CHAR',
    'STRING',
    'INT',
    'BOOL',
    'REALNUM',
    'Stringliteral'
  ]
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    CalcLexer._LITERAL_NAMES,
    CalcLexer._SYMBOLIC_NAMES,
    []
  )

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return CalcLexer.VOCABULARY
  }
  // tslint:enable:no-trailing-whitespace

  constructor(input: CharStream) {
    super(input)
    this._interp = new LexerATNSimulator(CalcLexer._ATN, this)
  }

  // @Override
  public get grammarFileName(): string {
    return 'Calc.g4'
  }

  // @Override
  public get ruleNames(): string[] {
    return CalcLexer.ruleNames
  }

  // @Override
  public get serializedATN(): string {
    return CalcLexer._serializedATN
  }

  // @Override
  public get channelNames(): string[] {
    return CalcLexer.channelNames
  }

  // @Override
  public get modeNames(): string[] {
    return CalcLexer.modeNames
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02-\u0114\b\x01' +
    '\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06' +
    '\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r' +
    '\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t' +
    '\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t' +
    '\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t' +
    '\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t' +
    "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04" +
    '+\t+\x04,\t,\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03' +
    '\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03' +
    '\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03' +
    '\v\x05\vx\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03' +
    '\f\x05\f\x84\n\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E' +
    '\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x93\n\x0E\x03\x0F\x03' +
    '\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03' +
    '\x13\x06\x13\xA0\n\x13\r\x13\x0E\x13\xA1\x03\x14\x06\x14\xA5\n\x14\r\x14' +
    '\x0E\x14\xA6\x03\x14\x03\x14\x06\x14\xAB\n\x14\r\x14\x0E\x14\xAC\x03\x15' +
    '\x06\x15\xB0\n\x15\r\x15\x0E\x15\xB1\x03\x15\x03\x15\x03\x16\x03\x16\x03' +
    '\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03' +
    '\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03' +
    '\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03' +
    '\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03!' +
    '\x03"\x03"\x03"\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03' +
    "%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03'\x03'\x03'\x03'\x03" +
    "'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03*\x03*\x03" +
    '*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x07,\u0110\n,\f,\x0E,\u0113' +
    '\v,\x02\x02\x02-\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07' +
    '\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E' +
    "\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14'\x02" +
    '\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02' +
    '\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02"C\x02#E\x02$G\x02%I\x02&K\x02' +
    "'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-\x03\x02\x06\x03\x022;\x05\x02\v" +
    '\f\x0F\x0F""\x04\x02C\\c|\x05\x022;C\\c|\x02\u011D\x02\x03\x03\x02\x02' +
    '\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02' +
    '\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02' +
    '\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02' +
    '\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02' +
    '\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02' +
    "\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02'\x03\x02\x02\x02\x02)" +
    '\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02' +
    '\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02' +
    '\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03' +
    '\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02' +
    '\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02' +
    'K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02' +
    '\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02' +
    '\x03Y\x03\x02\x02\x02\x05[\x03\x02\x02\x02\x07]\x03\x02\x02\x02\t_\x03' +
    '\x02\x02\x02\va\x03\x02\x02\x02\rc\x03\x02\x02\x02\x0Fe\x03\x02\x02\x02' +
    '\x11g\x03\x02\x02\x02\x13i\x03\x02\x02\x02\x15w\x03\x02\x02\x02\x17\x83' +
    '\x03\x02\x02\x02\x19\x85\x03\x02\x02\x02\x1B\x92\x03\x02\x02\x02\x1D\x94' +
    '\x03\x02\x02\x02\x1F\x96\x03\x02\x02\x02!\x98\x03\x02\x02\x02#\x9B\x03' +
    "\x02\x02\x02%\x9F\x03\x02\x02\x02'\xA4\x03\x02\x02\x02)\xAF\x03\x02\x02" +
    '\x02+\xB5\x03\x02\x02\x02-\xB7\x03\x02\x02\x02/\xBB\x03\x02\x02\x021\xBE' +
    '\x03\x02\x02\x023\xC2\x03\x02\x02\x025\xC6\x03\x02\x02\x027\xD0\x03\x02' +
    '\x02\x029\xD2\x03\x02\x02\x02;\xD4\x03\x02\x02\x02=\xD6\x03\x02\x02\x02' +
    '?\xD8\x03\x02\x02\x02A\xDA\x03\x02\x02\x02C\xDD\x03\x02\x02\x02E\xE0\x03' +
    '\x02\x02\x02G\xE5\x03\x02\x02\x02I\xEA\x03\x02\x02\x02K\xF0\x03\x02\x02' +
    '\x02M\xF3\x03\x02\x02\x02O\xF8\x03\x02\x02\x02Q\xFF\x03\x02\x02\x02S\u0103' +
    '\x03\x02\x02\x02U\u0108\x03\x02\x02\x02W\u010D\x03\x02\x02\x02YZ\x07=' +
    '\x02\x02Z\x04\x03\x02\x02\x02[\\\x07.\x02\x02\\\x06\x03\x02\x02\x02]^' +
    '\x07`\x02\x02^\b\x03\x02\x02\x02_`\x07,\x02\x02`\n\x03\x02\x02\x02ab\x07' +
    "1\x02\x02b\f\x03\x02\x02\x02cd\x07'\x02\x02d\x0E\x03\x02\x02\x02ef\x07" +
    '-\x02\x02f\x10\x03\x02\x02\x02gh\x07/\x02\x02h\x12\x03\x02\x02\x02ij\x07' +
    '?\x02\x02j\x14\x03\x02\x02\x02kl\x07(\x02\x02lx\x07(\x02\x02mn\x07c\x02' +
    '\x02no\x07p\x02\x02ox\x07f\x02\x02pq\x07c\x02\x02qr\x07p\x02\x02rs\x07' +
    'f\x02\x02st\x07c\x02\x02tu\x07n\x02\x02uv\x07u\x02\x02vx\x07q\x02\x02' +
    'wk\x03\x02\x02\x02wm\x03\x02\x02\x02wp\x03\x02\x02\x02x\x16\x03\x02\x02' +
    '\x02yz\x07~\x02\x02z\x84\x07~\x02\x02{|\x07q\x02\x02|\x84\x07t\x02\x02' +
    '}~\x07q\x02\x02~\x7F\x07t\x02\x02\x7F\x80\x07g\x02\x02\x80\x81\x07n\x02' +
    '\x02\x81\x82\x07u\x02\x02\x82\x84\x07g\x02\x02\x83y\x03\x02\x02\x02\x83' +
    '{\x03\x02\x02\x02\x83}\x03\x02\x02\x02\x84\x18\x03\x02\x02\x02\x85\x86' +
    '\x07p\x02\x02\x86\x87\x07q\x02\x02\x87\x88\x07v\x02\x02\x88\x1A\x03\x02' +
    '\x02\x02\x89\x8A\x07v\x02\x02\x8A\x8B\x07t\x02\x02\x8B\x8C\x07w\x02\x02' +
    '\x8C\x93\x07g\x02\x02\x8D\x8E\x07h\x02\x02\x8E\x8F\x07c\x02\x02\x8F\x90' +
    '\x07n\x02\x02\x90\x91\x07u\x02\x02\x91\x93\x07g\x02\x02\x92\x89\x03\x02' +
    '\x02\x02\x92\x8D\x03\x02\x02\x02\x93\x1C\x03\x02\x02\x02\x94\x95\x07@' +
    '\x02\x02\x95\x1E\x03\x02\x02\x02\x96\x97\x07>\x02\x02\x97 \x03\x02\x02' +
    '\x02\x98\x99\x07@\x02\x02\x99\x9A\x07?\x02\x02\x9A"\x03\x02\x02\x02\x9B' +
    '\x9C\x07>\x02\x02\x9C\x9D\x07?\x02\x02\x9D$\x03\x02\x02\x02\x9E\xA0\t' +
    '\x02\x02\x02\x9F\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\x9F\x03' +
    '\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2&\x03\x02\x02\x02\xA3\xA5\t\x02' +
    '\x02\x02\xA4\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA4\x03\x02' +
    '\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAA\x070' +
    '\x02\x02\xA9\xAB\t\x02\x02\x02\xAA\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02' +
    '\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD(\x03\x02' +
    '\x02\x02\xAE\xB0\t\x03\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02' +
    '\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x03\x02' +
    '\x02\x02\xB3\xB4\b\x15\x02\x02\xB4*\x03\x02\x02\x02\xB5\xB6\t\x04\x02' +
    '\x02\xB6,\x03\x02\x02\x02\xB7\xB8\x07n\x02\x02\xB8\xB9\x07g\x02\x02\xB9' +
    '\xBA\x07v\x02\x02\xBA.\x03\x02\x02\x02\xBB\xBC\x07k\x02\x02\xBC\xBD\x07' +
    'p\x02\x02\xBD0\x03\x02\x02\x02\xBE\xBF\x07g\x02\x02\xBF\xC0\x07p\x02\x02' +
    '\xC0\xC1\x07f\x02\x02\xC12\x03\x02\x02\x02\xC2\xC3\x07x\x02\x02\xC3\xC4' +
    '\x07c\x02\x02\xC4\xC5\x07n\x02\x02\xC54\x03\x02\x02\x02\xC6\xC7\x07n\x02' +
    '\x02\xC7\xC8\x07q\x02\x02\xC8\xC9\x07e\x02\x02\xC9\xCA\x07c\x02\x02\xCA' +
    '\xCB\x07n\x02\x02\xCB\xCC\x07"\x02\x02\xCC\xCD\x07x\x02\x02\xCD\xCE\x07' +
    'c\x02\x02\xCE\xCF\x07n\x02\x02\xCF6\x03\x02\x02\x02\xD0\xD1\x07*\x02\x02' +
    '\xD18\x03\x02\x02\x02\xD2\xD3\x07+\x02\x02\xD3:\x03\x02\x02\x02\xD4\xD5' +
    '\x07}\x02\x02\xD5<\x03\x02\x02\x02\xD6\xD7\x07\x7F\x02\x02\xD7>\x03\x02' +
    '\x02\x02\xD8\xD9\x07$\x02\x02\xD9@\x03\x02\x02\x02\xDA\xDB\x07<\x02\x02' +
    '\xDB\xDC\x07?\x02\x02\xDCB\x03\x02\x02\x02\xDD\xDE\x07k\x02\x02\xDE\xDF' +
    '\x07h\x02\x02\xDFD\x03\x02\x02\x02\xE0\xE1\x07v\x02\x02\xE1\xE2\x07j\x02' +
    '\x02\xE2\xE3\x07g\x02\x02\xE3\xE4\x07p\x02\x02\xE4F\x03\x02\x02\x02\xE5' +
    '\xE6\x07g\x02\x02\xE6\xE7\x07n\x02\x02\xE7\xE8\x07u\x02\x02\xE8\xE9\x07' +
    'g\x02\x02\xE9H\x03\x02\x02\x02\xEA\xEB\x07y\x02\x02\xEB\xEC\x07j\x02\x02' +
    '\xEC\xED\x07k\x02\x02\xED\xEE\x07n\x02\x02\xEE\xEF\x07g\x02\x02\xEFJ\x03' +
    '\x02\x02\x02\xF0\xF1\x07f\x02\x02\xF1\xF2\x07q\x02\x02\xF2L\x03\x02\x02' +
    '\x02\xF3\xF4\x07e\x02\x02\xF4\xF5\x07j\x02\x02\xF5\xF6\x07c\x02\x02\xF6' +
    '\xF7\x07t\x02\x02\xF7N\x03\x02\x02\x02\xF8\xF9\x07u\x02\x02\xF9\xFA\x07' +
    'v\x02\x02\xFA\xFB\x07t\x02\x02\xFB\xFC\x07k\x02\x02\xFC\xFD\x07p\x02\x02' +
    '\xFD\xFE\x07i\x02\x02\xFEP\x03\x02\x02\x02\xFF\u0100\x07k\x02\x02\u0100' +
    '\u0101\x07p\x02\x02\u0101\u0102\x07v\x02\x02\u0102R\x03\x02\x02\x02\u0103' +
    '\u0104\x07d\x02\x02\u0104\u0105\x07q\x02\x02\u0105\u0106\x07q\x02\x02' +
    '\u0106\u0107\x07n\x02\x02\u0107T\x03\x02\x02\x02\u0108\u0109\x07t\x02' +
    '\x02\u0109\u010A\x07g\x02\x02\u010A\u010B\x07c\x02\x02\u010B\u010C\x07' +
    'n\x02\x02\u010CV\x03\x02\x02\x02\u010D\u0111\t\x04\x02\x02\u010E\u0110' +
    '\t\x05\x02\x02\u010F\u010E\x03\x02\x02\x02\u0110\u0113\x03\x02\x02\x02' +
    '\u0111\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112X\x03\x02' +
    '\x02\x02\u0113\u0111\x03\x02\x02\x02\v\x02w\x83\x92\xA1\xA6\xAC\xB1\u0111' +
    '\x03\b\x02\x02'
  public static __ATN: ATN
  public static get _ATN(): ATN {
    if (!CalcLexer.__ATN) {
      CalcLexer.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(CalcLexer._serializedATN)
      )
    }

    return CalcLexer.__ATN
  }
}
