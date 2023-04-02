// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException'
import * as Utils from 'antlr4ts/misc/Utils'
import { NoViableAltException } from 'antlr4ts/NoViableAltException'
import { Parser } from 'antlr4ts/Parser'
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext'
import { RecognitionException } from 'antlr4ts/RecognitionException'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Token } from 'antlr4ts/Token'
import { TokenStream } from 'antlr4ts/TokenStream'
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

import { CalcListener } from './CalcListener'
import { CalcVisitor } from './CalcVisitor'

export class CalcParser extends Parser {
  public static readonly T__0 = 1
  public static readonly T__1 = 2
  public static readonly T__2 = 3
  public static readonly POW = 4
  public static readonly MUL = 5
  public static readonly DIV = 6
  public static readonly MOD = 7
  public static readonly ADD = 8
  public static readonly SUB = 9
  public static readonly EQUAL = 10
  public static readonly AND = 11
  public static readonly OR = 12
  public static readonly NOT = 13
  public static readonly BOOLEAN = 14
  public static readonly GT = 15
  public static readonly LT = 16
  public static readonly GE = 17
  public static readonly LE = 18
  public static readonly NUMBER = 19
  public static readonly REAL = 20
  public static readonly WHITESPACE = 21
  public static readonly LETTER = 22
  public static readonly LET = 23
  public static readonly VAL = 24
  public static readonly LOCAL = 25
  public static readonly OPAR = 26
  public static readonly CPAR = 27
  public static readonly OBRACE = 28
  public static readonly CBRACE = 29
  public static readonly DOUBLEQUOTE = 30
  public static readonly IF = 31
  public static readonly THEN = 32
  public static readonly ELSE = 33
  public static readonly WHILE = 34
  public static readonly DO = 35
  public static readonly CHAR = 36
  public static readonly STRING = 37
  public static readonly INT = 38
  public static readonly BOOL = 39
  public static readonly REALNUM = 40
  public static readonly Stringliteral = 41
  public static readonly RULE_assignmentoperator = 0
  public static readonly RULE_emptydeclaration = 1
  public static readonly RULE_start = 2
  public static readonly RULE_statement = 3
  public static readonly RULE_ifThenElseStatement = 4
  public static readonly RULE_whileStatement = 5
  public static readonly RULE_type = 6
  public static readonly RULE_declaration = 7
  public static readonly RULE_variableDeclaration = 8
  public static readonly RULE_localValDeclaration = 9
  public static readonly RULE_block = 10
  public static readonly RULE_print = 11
  public static readonly RULE_parameters = 12
  public static readonly RULE_function = 13
  public static readonly RULE_identifier = 14
  public static readonly RULE_expressionStatement = 15
  public static readonly RULE_expression = 16
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'assignmentoperator',
    'emptydeclaration',
    'start',
    'statement',
    'ifThenElseStatement',
    'whileStatement',
    'type',
    'declaration',
    'variableDeclaration',
    'localValDeclaration',
    'block',
    'print',
    'parameters',
    'function',
    'identifier',
    'expressionStatement',
    'expression'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "':='",
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
    "'val'",
    "'local val'",
    "'('",
    "')'",
    "'{'",
    "'}'",
    "'\"'",
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
    'VAL',
    'LOCAL',
    'OPAR',
    'CPAR',
    'OBRACE',
    'CBRACE',
    'DOUBLEQUOTE',
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
    CalcParser._LITERAL_NAMES,
    CalcParser._SYMBOLIC_NAMES,
    []
  )

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return CalcParser.VOCABULARY
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'Calc.g4'
  }

  // @Override
  public get ruleNames(): string[] {
    return CalcParser.ruleNames
  }

  // @Override
  public get serializedATN(): string {
    return CalcParser._serializedATN
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message)
  }

  constructor(input: TokenStream) {
    super(input)
    this._interp = new ParserATNSimulator(CalcParser._ATN, this)
  }
  // @RuleVersion(0)
  public assignmentoperator(): AssignmentoperatorContext {
    const _localctx: AssignmentoperatorContext = new AssignmentoperatorContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 0, CalcParser.RULE_assignmentoperator)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 34
        _la = this._input.LA(1)
        if (!(_la === CalcParser.T__0 || _la === CalcParser.EQUAL)) {
          this._errHandler.recoverInline(this)
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true
          }

          this._errHandler.reportMatch(this)
          this.consume()
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public emptydeclaration(): EmptydeclarationContext {
    const _localctx: EmptydeclarationContext = new EmptydeclarationContext(this._ctx, this.state)
    this.enterRule(_localctx, 2, CalcParser.RULE_emptydeclaration)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 36
        this.match(CalcParser.T__1)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public start(): StartContext {
    const _localctx: StartContext = new StartContext(this._ctx, this.state)
    this.enterRule(_localctx, 4, CalcParser.RULE_start)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 42
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          ((_la - 13) & ~0x1f) === 0 &&
          ((1 << (_la - 13)) &
            ((1 << (CalcParser.NOT - 13)) |
              (1 << (CalcParser.BOOLEAN - 13)) |
              (1 << (CalcParser.NUMBER - 13)) |
              (1 << (CalcParser.REAL - 13)) |
              (1 << (CalcParser.LET - 13)) |
              (1 << (CalcParser.VAL - 13)) |
              (1 << (CalcParser.LOCAL - 13)) |
              (1 << (CalcParser.OPAR - 13)) |
              (1 << (CalcParser.OBRACE - 13)) |
              (1 << (CalcParser.IF - 13)) |
              (1 << (CalcParser.WHILE - 13)) |
              (1 << (CalcParser.CHAR - 13)) |
              (1 << (CalcParser.STRING - 13)) |
              (1 << (CalcParser.INT - 13)) |
              (1 << (CalcParser.BOOL - 13)) |
              (1 << (CalcParser.REALNUM - 13)) |
              (1 << (CalcParser.Stringliteral - 13)))) !==
            0
        ) {
          {
            this.state = 40
            this._errHandler.sync(this)
            switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
              case 1:
                {
                  this.state = 38
                  this.statement()
                }
                break

              case 2:
                {
                  this.state = 39
                  this.function()
                }
                break
            }
          }
          this.state = 44
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public statement(): StatementContext {
    const _localctx: StatementContext = new StatementContext(this._ctx, this.state)
    this.enterRule(_localctx, 6, CalcParser.RULE_statement)
    try {
      this.state = 52
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.IF:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 45
            this.ifThenElseStatement()
          }
          break
        case CalcParser.WHILE:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 46
            this.whileStatement()
          }
          break
        case CalcParser.LET:
        case CalcParser.VAL:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 47
            this.variableDeclaration()
          }
          break
        case CalcParser.LOCAL:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 48
            this.localValDeclaration()
          }
          break
        case CalcParser.CHAR:
        case CalcParser.STRING:
        case CalcParser.INT:
        case CalcParser.BOOL:
        case CalcParser.REALNUM:
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 49
            this.declaration()
          }
          break
        case CalcParser.NOT:
        case CalcParser.BOOLEAN:
        case CalcParser.NUMBER:
        case CalcParser.REAL:
        case CalcParser.OPAR:
        case CalcParser.Stringliteral:
          this.enterOuterAlt(_localctx, 6)
          {
            this.state = 50
            this.expressionStatement()
          }
          break
        case CalcParser.OBRACE:
          this.enterOuterAlt(_localctx, 7)
          {
            this.state = 51
            this.block()
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public ifThenElseStatement(): IfThenElseStatementContext {
    let _localctx: IfThenElseStatementContext = new IfThenElseStatementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 8, CalcParser.RULE_ifThenElseStatement)
    try {
      _localctx = new IfThenElseConditionContext(_localctx)
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 54
        this.match(CalcParser.IF)
        this.state = 55
        this.match(CalcParser.OPAR)
        this.state = 56
        ;(_localctx as IfThenElseConditionContext)._test = this.expression(0)
        this.state = 57
        this.match(CalcParser.CPAR)
        this.state = 58
        this.match(CalcParser.THEN)
        this.state = 59
        ;(_localctx as IfThenElseConditionContext)._consequent = this.statement()
        this.state = 60
        this.match(CalcParser.ELSE)
        this.state = 61
        ;(_localctx as IfThenElseConditionContext)._alternate = this.statement()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public whileStatement(): WhileStatementContext {
    let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state)
    this.enterRule(_localctx, 10, CalcParser.RULE_whileStatement)
    try {
      _localctx = new WhileConditionContext(_localctx)
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 63
        this.match(CalcParser.WHILE)
        this.state = 64
        ;(_localctx as WhileConditionContext)._test = this.expression(0)
        this.state = 65
        this.match(CalcParser.DO)
        this.state = 66
        ;(_localctx as WhileConditionContext)._body = this.statement()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public type(): TypeContext {
    const _localctx: TypeContext = new TypeContext(this._ctx, this.state)
    this.enterRule(_localctx, 12, CalcParser.RULE_type)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 68
        _la = this._input.LA(1)
        if (
          !(
            ((_la - 36) & ~0x1f) === 0 &&
            ((1 << (_la - 36)) &
              ((1 << (CalcParser.CHAR - 36)) |
                (1 << (CalcParser.STRING - 36)) |
                (1 << (CalcParser.INT - 36)) |
                (1 << (CalcParser.BOOL - 36)) |
                (1 << (CalcParser.REALNUM - 36)))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this)
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true
          }

          this._errHandler.reportMatch(this)
          this.consume()
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public declaration(): DeclarationContext {
    const _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state)
    this.enterRule(_localctx, 14, CalcParser.RULE_declaration)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 70
        _localctx._t = this.type()
        this.state = 71
        _localctx._id = this.match(CalcParser.Stringliteral)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public variableDeclaration(): VariableDeclarationContext {
    let _localctx: VariableDeclarationContext = new VariableDeclarationContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 16, CalcParser.RULE_variableDeclaration)
    try {
      this.state = 81
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.LET:
          _localctx = new LetDeclarationContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 73
            this.match(CalcParser.LET)
            this.state = 74
            ;(_localctx as LetDeclarationContext)._left = this.match(CalcParser.Stringliteral)
            this.state = 75
            ;(_localctx as LetDeclarationContext)._operator = this.match(CalcParser.EQUAL)
            this.state = 76
            ;(_localctx as LetDeclarationContext)._right = this.expression(0)
          }
          break
        case CalcParser.VAL:
          _localctx = new ValDeclarationContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 77
            this.match(CalcParser.VAL)
            this.state = 78
            ;(_localctx as ValDeclarationContext)._left = this.match(CalcParser.Stringliteral)
            this.state = 79
            ;(_localctx as ValDeclarationContext)._operator = this.match(CalcParser.EQUAL)
            this.state = 80
            ;(_localctx as ValDeclarationContext)._right = this.expression(0)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public localValDeclaration(): LocalValDeclarationContext {
    let _localctx: LocalValDeclarationContext = new LocalValDeclarationContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 18, CalcParser.RULE_localValDeclaration)
    try {
      _localctx = new LocalValAssignmentContext(_localctx)
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 83
        this.match(CalcParser.LOCAL)
        this.state = 84
        ;(_localctx as LocalValAssignmentContext)._left = this.match(CalcParser.Stringliteral)
        this.state = 85
        ;(_localctx as LocalValAssignmentContext)._operator = this.match(CalcParser.EQUAL)
        this.state = 86
        ;(_localctx as LocalValAssignmentContext)._right = this.expression(0)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public block(): BlockContext {
    const _localctx: BlockContext = new BlockContext(this._ctx, this.state)
    this.enterRule(_localctx, 20, CalcParser.RULE_block)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 88
        this.match(CalcParser.OBRACE)
        this.state = 92
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          ((_la - 13) & ~0x1f) === 0 &&
          ((1 << (_la - 13)) &
            ((1 << (CalcParser.NOT - 13)) |
              (1 << (CalcParser.BOOLEAN - 13)) |
              (1 << (CalcParser.NUMBER - 13)) |
              (1 << (CalcParser.REAL - 13)) |
              (1 << (CalcParser.LET - 13)) |
              (1 << (CalcParser.VAL - 13)) |
              (1 << (CalcParser.LOCAL - 13)) |
              (1 << (CalcParser.OPAR - 13)) |
              (1 << (CalcParser.OBRACE - 13)) |
              (1 << (CalcParser.IF - 13)) |
              (1 << (CalcParser.WHILE - 13)) |
              (1 << (CalcParser.CHAR - 13)) |
              (1 << (CalcParser.STRING - 13)) |
              (1 << (CalcParser.INT - 13)) |
              (1 << (CalcParser.BOOL - 13)) |
              (1 << (CalcParser.REALNUM - 13)) |
              (1 << (CalcParser.Stringliteral - 13)))) !==
            0
        ) {
          {
            {
              this.state = 89
              _localctx._stmts = this.statement()
            }
          }
          this.state = 94
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
        this.state = 95
        this.match(CalcParser.CBRACE)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public print(): PrintContext {
    const _localctx: PrintContext = new PrintContext(this._ctx, this.state)
    this.enterRule(_localctx, 22, CalcParser.RULE_print)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 97
        this.match(CalcParser.OPAR)
        this.state = 98
        this.match(CalcParser.DOUBLEQUOTE)
        this.state = 99
        _localctx._expr = this.match(CalcParser.Stringliteral)
        this.state = 100
        this.match(CalcParser.DOUBLEQUOTE)
        this.state = 101
        this.match(CalcParser.CPAR)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public parameters(): ParametersContext {
    const _localctx: ParametersContext = new ParametersContext(this._ctx, this.state)
    this.enterRule(_localctx, 24, CalcParser.RULE_parameters)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 103
        this.declaration()
        this.state = 108
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === CalcParser.T__2) {
          {
            {
              this.state = 104
              this.match(CalcParser.T__2)
              this.state = 105
              this.declaration()
            }
          }
          this.state = 110
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public function(): FunctionContext {
    const _localctx: FunctionContext = new FunctionContext(this._ctx, this.state)
    this.enterRule(_localctx, 26, CalcParser.RULE_function)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 111
        _localctx._t = this.type()
        this.state = 112
        _localctx._id = this.match(CalcParser.Stringliteral)
        this.state = 113
        this.match(CalcParser.OPAR)
        this.state = 114
        _localctx._params = this.parameters()
        this.state = 115
        this.match(CalcParser.CPAR)
        this.state = 116
        _localctx._body = this.block()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public identifier(): IdentifierContext {
    let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 28, CalcParser.RULE_identifier)
    try {
      this.state = 122
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.Stringliteral:
          _localctx = new StringContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 118
            this.match(CalcParser.Stringliteral)
          }
          break
        case CalcParser.NUMBER:
          _localctx = new NumberContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 119
            this.match(CalcParser.NUMBER)
          }
          break
        case CalcParser.REAL:
          _localctx = new RealContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 120
            this.match(CalcParser.REAL)
          }
          break
        case CalcParser.BOOLEAN:
          _localctx = new BooleanContext(_localctx)
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 121
            this.match(CalcParser.BOOLEAN)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public expressionStatement(): ExpressionStatementContext {
    const _localctx: ExpressionStatementContext = new ExpressionStatementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 30, CalcParser.RULE_expressionStatement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 124
        this.expression(0)
        this.state = 125
        this.match(CalcParser.T__1)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public expression(): ExpressionContext
  public expression(_p: number): ExpressionContext
  // @RuleVersion(0)
  public expression(_p?: number): ExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState)
    let _prevctx: ExpressionContext = _localctx
    const _startState: number = 32
    this.enterRecursionRule(_localctx, 32, CalcParser.RULE_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 135
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case CalcParser.BOOLEAN:
          case CalcParser.NUMBER:
          case CalcParser.REAL:
          case CalcParser.Stringliteral:
            {
              _localctx = new IdentifiersContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 128
              this.identifier()
            }
            break
          case CalcParser.OPAR:
            {
              _localctx = new ParenthesesContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 129
              this.match(CalcParser.OPAR)
              this.state = 130
              ;(_localctx as ParenthesesContext)._inner = this.expression(0)
              this.state = 131
              this.match(CalcParser.CPAR)
            }
            break
          case CalcParser.NOT:
            {
              _localctx = new NotLogicalContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 133
              this.match(CalcParser.NOT)
              this.state = 134
              ;(_localctx as NotLogicalContext)._left = this.expression(1)
            }
            break
          default:
            throw new NoViableAltException(this)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 178
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 176
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                  {
                    _localctx = new PowerContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as PowerContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 137
                    if (!this.precpred(this._ctx, 14)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 14)')
                    }
                    this.state = 138
                    ;(_localctx as PowerContext)._operator = this.match(CalcParser.POW)
                    this.state = 139
                    ;(_localctx as PowerContext)._right = this.expression(15)
                  }
                  break

                case 2:
                  {
                    _localctx = new MultiplicationContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as MultiplicationContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 140
                    if (!this.precpred(this._ctx, 13)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 13)')
                    }
                    this.state = 141
                    ;(_localctx as MultiplicationContext)._operator = this.match(CalcParser.MUL)
                    this.state = 142
                    ;(_localctx as MultiplicationContext)._right = this.expression(14)
                  }
                  break

                case 3:
                  {
                    _localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as DivisionContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 143
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 12)')
                    }
                    this.state = 144
                    ;(_localctx as DivisionContext)._operator = this.match(CalcParser.DIV)
                    this.state = 145
                    ;(_localctx as DivisionContext)._right = this.expression(13)
                  }
                  break

                case 4:
                  {
                    _localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as AdditionContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 146
                    if (!this.precpred(this._ctx, 11)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 11)')
                    }
                    this.state = 147
                    ;(_localctx as AdditionContext)._operator = this.match(CalcParser.ADD)
                    this.state = 148
                    ;(_localctx as AdditionContext)._right = this.expression(12)
                  }
                  break

                case 5:
                  {
                    _localctx = new SubtractionContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as SubtractionContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 149
                    if (!this.precpred(this._ctx, 10)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 10)')
                    }
                    this.state = 150
                    ;(_localctx as SubtractionContext)._operator = this.match(CalcParser.SUB)
                    this.state = 151
                    ;(_localctx as SubtractionContext)._right = this.expression(11)
                  }
                  break

                case 6:
                  {
                    _localctx = new ModulusContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as ModulusContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 152
                    if (!this.precpred(this._ctx, 9)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 9)')
                    }
                    this.state = 153
                    ;(_localctx as ModulusContext)._operator = this.match(CalcParser.MOD)
                    this.state = 154
                    ;(_localctx as ModulusContext)._right = this.expression(10)
                  }
                  break

                case 7:
                  {
                    _localctx = new EqualComparatorContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as EqualComparatorContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 155
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 8)')
                    }
                    this.state = 156
                    ;(_localctx as EqualComparatorContext)._operator = this.match(CalcParser.EQUAL)
                    this.state = 157
                    ;(_localctx as EqualComparatorContext)._right = this.expression(9)
                  }
                  break

                case 8:
                  {
                    _localctx = new GreaterComparatorContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as GreaterComparatorContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 158
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 7)')
                    }
                    this.state = 159
                    ;(_localctx as GreaterComparatorContext)._operator = this.match(CalcParser.GT)
                    this.state = 160
                    ;(_localctx as GreaterComparatorContext)._right = this.expression(8)
                  }
                  break

                case 9:
                  {
                    _localctx = new LesserComparatorContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as LesserComparatorContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 161
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)')
                    }
                    this.state = 162
                    ;(_localctx as LesserComparatorContext)._operator = this.match(CalcParser.LT)
                    this.state = 163
                    ;(_localctx as LesserComparatorContext)._right = this.expression(7)
                  }
                  break

                case 10:
                  {
                    _localctx = new GreaterEqualComparatorContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as GreaterEqualComparatorContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 164
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)')
                    }
                    this.state = 165
                    ;(_localctx as GreaterEqualComparatorContext)._operator = this.match(
                      CalcParser.GE
                    )
                    this.state = 166
                    ;(_localctx as GreaterEqualComparatorContext)._right = this.expression(6)
                  }
                  break

                case 11:
                  {
                    _localctx = new LesserEqualComparatorContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as LesserEqualComparatorContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 167
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 168
                    ;(_localctx as LesserEqualComparatorContext)._operator = this.match(
                      CalcParser.LE
                    )
                    this.state = 169
                    ;(_localctx as LesserEqualComparatorContext)._right = this.expression(5)
                  }
                  break

                case 12:
                  {
                    _localctx = new AndLogicalContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as AndLogicalContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 170
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 171
                    ;(_localctx as AndLogicalContext)._operator = this.match(CalcParser.AND)
                    this.state = 172
                    ;(_localctx as AndLogicalContext)._right = this.expression(4)
                  }
                  break

                case 13:
                  {
                    _localctx = new OrLogicalContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as OrLogicalContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 173
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 174
                    ;(_localctx as OrLogicalContext)._operator = this.match(CalcParser.OR)
                    this.state = 175
                    ;(_localctx as OrLogicalContext)._right = this.expression(3)
                  }
                  break
              }
            }
          }
          this.state = 180
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }

  public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 16:
        return this.expression_sempred(_localctx as ExpressionContext, predIndex)
    }
    return true
  }
  private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 14)

      case 1:
        return this.precpred(this._ctx, 13)

      case 2:
        return this.precpred(this._ctx, 12)

      case 3:
        return this.precpred(this._ctx, 11)

      case 4:
        return this.precpred(this._ctx, 10)

      case 5:
        return this.precpred(this._ctx, 9)

      case 6:
        return this.precpred(this._ctx, 8)

      case 7:
        return this.precpred(this._ctx, 7)

      case 8:
        return this.precpred(this._ctx, 6)

      case 9:
        return this.precpred(this._ctx, 5)

      case 10:
        return this.precpred(this._ctx, 4)

      case 11:
        return this.precpred(this._ctx, 3)

      case 12:
        return this.precpred(this._ctx, 2)
    }
    return true
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03+\xB8\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03' +
    '\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x07\x04+\n\x04\f\x04\x0E' +
    '\x04.\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05' +
    '\x057\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03' +
    '\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t' +
    '\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\nT\n' +
    '\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x07\f]\n\f\f\f\x0E\f`\v\f' +
    '\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E' +
    '\x07\x0Em\n\x0E\f\x0E\x0E\x0Ep\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03' +
    '\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10}\n\x10\x03' +
    '\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03' +
    '\x12\x03\x12\x05\x12\x8A\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\xB3\n' +
    '\x12\f\x12\x0E\x12\xB6\v\x12\x03\x12\x02\x02\x03"\x13\x02\x02\x04\x02' +
    '\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18' +
    '\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02\x02\x04\x04\x02\x03\x03\f\f\x03' +
    '\x02&*\x02\xC3\x02$\x03\x02\x02\x02\x04&\x03\x02\x02\x02\x06,\x03\x02' +
    '\x02\x02\b6\x03\x02\x02\x02\n8\x03\x02\x02\x02\fA\x03\x02\x02\x02\x0E' +
    'F\x03\x02\x02\x02\x10H\x03\x02\x02\x02\x12S\x03\x02\x02\x02\x14U\x03\x02' +
    '\x02\x02\x16Z\x03\x02\x02\x02\x18c\x03\x02\x02\x02\x1Ai\x03\x02\x02\x02' +
    '\x1Cq\x03\x02\x02\x02\x1E|\x03\x02\x02\x02 ~\x03\x02\x02\x02"\x89\x03' +
    "\x02\x02\x02$%\t\x02\x02\x02%\x03\x03\x02\x02\x02&'\x07\x04\x02\x02'" +
    '\x05\x03\x02\x02\x02(+\x05\b\x05\x02)+\x05\x1C\x0F\x02*(\x03\x02\x02\x02' +
    '*)\x03\x02\x02\x02+.\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02' +
    '-\x07\x03\x02\x02\x02.,\x03\x02\x02\x02/7\x05\n\x06\x0207\x05\f\x07\x02' +
    '17\x05\x12\n\x0227\x05\x14\v\x0237\x05\x10\t\x0247\x05 \x11\x0257\x05' +
    '\x16\f\x026/\x03\x02\x02\x0260\x03\x02\x02\x0261\x03\x02\x02\x0262\x03' +
    '\x02\x02\x0263\x03\x02\x02\x0264\x03\x02\x02\x0265\x03\x02\x02\x027\t' +
    '\x03\x02\x02\x0289\x07!\x02\x029:\x07\x1C\x02\x02:;\x05"\x12\x02;<\x07' +
    '\x1D\x02\x02<=\x07"\x02\x02=>\x05\b\x05\x02>?\x07#\x02\x02?@\x05\b\x05' +
    '\x02@\v\x03\x02\x02\x02AB\x07$\x02\x02BC\x05"\x12\x02CD\x07%\x02\x02' +
    'DE\x05\b\x05\x02E\r\x03\x02\x02\x02FG\t\x03\x02\x02G\x0F\x03\x02\x02\x02' +
    'HI\x05\x0E\b\x02IJ\x07+\x02\x02J\x11\x03\x02\x02\x02KL\x07\x19\x02\x02' +
    'LM\x07+\x02\x02MN\x07\f\x02\x02NT\x05"\x12\x02OP\x07\x1A\x02\x02PQ\x07' +
    '+\x02\x02QR\x07\f\x02\x02RT\x05"\x12\x02SK\x03\x02\x02\x02SO\x03\x02' +
    '\x02\x02T\x13\x03\x02\x02\x02UV\x07\x1B\x02\x02VW\x07+\x02\x02WX\x07\f' +
    '\x02\x02XY\x05"\x12\x02Y\x15\x03\x02\x02\x02Z^\x07\x1E\x02\x02[]\x05' +
    '\b\x05\x02\\[\x03\x02\x02\x02]`\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03' +
    '\x02\x02\x02_a\x03\x02\x02\x02`^\x03\x02\x02\x02ab\x07\x1F\x02\x02b\x17' +
    '\x03\x02\x02\x02cd\x07\x1C\x02\x02de\x07 \x02\x02ef\x07+\x02\x02fg\x07' +
    ' \x02\x02gh\x07\x1D\x02\x02h\x19\x03\x02\x02\x02in\x05\x10\t\x02jk\x07' +
    '\x05\x02\x02km\x05\x10\t\x02lj\x03\x02\x02\x02mp\x03\x02\x02\x02nl\x03' +
    '\x02\x02\x02no\x03\x02\x02\x02o\x1B\x03\x02\x02\x02pn\x03\x02\x02\x02' +
    'qr\x05\x0E\b\x02rs\x07+\x02\x02st\x07\x1C\x02\x02tu\x05\x1A\x0E\x02uv' +
    '\x07\x1D\x02\x02vw\x05\x16\f\x02w\x1D\x03\x02\x02\x02x}\x07+\x02\x02y' +
    '}\x07\x15\x02\x02z}\x07\x16\x02\x02{}\x07\x10\x02\x02|x\x03\x02\x02\x02' +
    '|y\x03\x02\x02\x02|z\x03\x02\x02\x02|{\x03\x02\x02\x02}\x1F\x03\x02\x02' +
    '\x02~\x7F\x05"\x12\x02\x7F\x80\x07\x04\x02\x02\x80!\x03\x02\x02\x02\x81' +
    '\x82\b\x12\x01\x02\x82\x8A\x05\x1E\x10\x02\x83\x84\x07\x1C\x02\x02\x84' +
    '\x85\x05"\x12\x02\x85\x86\x07\x1D\x02\x02\x86\x8A\x03\x02\x02\x02\x87' +
    '\x88\x07\x0F\x02\x02\x88\x8A\x05"\x12\x03\x89\x81\x03\x02\x02\x02\x89' +
    '\x83\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x8A\xB4\x03\x02\x02\x02\x8B' +
    '\x8C\f\x10\x02\x02\x8C\x8D\x07\x06\x02\x02\x8D\xB3\x05"\x12\x11\x8E\x8F' +
    '\f\x0F\x02\x02\x8F\x90\x07\x07\x02\x02\x90\xB3\x05"\x12\x10\x91\x92\f' +
    '\x0E\x02\x02\x92\x93\x07\b\x02\x02\x93\xB3\x05"\x12\x0F\x94\x95\f\r\x02' +
    '\x02\x95\x96\x07\n\x02\x02\x96\xB3\x05"\x12\x0E\x97\x98\f\f\x02\x02\x98' +
    '\x99\x07\v\x02\x02\x99\xB3\x05"\x12\r\x9A\x9B\f\v\x02\x02\x9B\x9C\x07' +
    '\t\x02\x02\x9C\xB3\x05"\x12\f\x9D\x9E\f\n\x02\x02\x9E\x9F\x07\f\x02\x02' +
    '\x9F\xB3\x05"\x12\v\xA0\xA1\f\t\x02\x02\xA1\xA2\x07\x11\x02\x02\xA2\xB3' +
    '\x05"\x12\n\xA3\xA4\f\b\x02\x02\xA4\xA5\x07\x12\x02\x02\xA5\xB3\x05"' +
    '\x12\t\xA6\xA7\f\x07\x02\x02\xA7\xA8\x07\x13\x02\x02\xA8\xB3\x05"\x12' +
    '\b\xA9\xAA\f\x06\x02\x02\xAA\xAB\x07\x14\x02\x02\xAB\xB3\x05"\x12\x07' +
    '\xAC\xAD\f\x05\x02\x02\xAD\xAE\x07\r\x02\x02\xAE\xB3\x05"\x12\x06\xAF' +
    '\xB0\f\x04\x02\x02\xB0\xB1\x07\x0E\x02\x02\xB1\xB3\x05"\x12\x05\xB2\x8B' +
    '\x03\x02\x02\x02\xB2\x8E\x03\x02\x02\x02\xB2\x91\x03\x02\x02\x02\xB2\x94' +
    '\x03\x02\x02\x02\xB2\x97\x03\x02\x02\x02\xB2\x9A\x03\x02\x02\x02\xB2\x9D' +
    '\x03\x02\x02\x02\xB2\xA0\x03\x02\x02\x02\xB2\xA3\x03\x02\x02\x02\xB2\xA6' +
    '\x03\x02\x02\x02\xB2\xA9\x03\x02\x02\x02\xB2\xAC\x03\x02\x02\x02\xB2\xAF' +
    '\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5' +
    '\x03\x02\x02\x02\xB5#\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\f*,6S^n' +
    '|\x89\xB2\xB4'
  public static __ATN: ATN
  public static get _ATN(): ATN {
    if (!CalcParser.__ATN) {
      CalcParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(CalcParser._serializedATN)
      )
    }

    return CalcParser.__ATN
  }
}

export class AssignmentoperatorContext extends ParserRuleContext {
  public EQUAL(): TerminalNode {
    return this.getToken(CalcParser.EQUAL, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_assignmentoperator
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterAssignmentoperator) {
      listener.enterAssignmentoperator(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitAssignmentoperator) {
      listener.exitAssignmentoperator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitAssignmentoperator) {
      return visitor.visitAssignmentoperator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class EmptydeclarationContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_emptydeclaration
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterEmptydeclaration) {
      listener.enterEmptydeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitEmptydeclaration) {
      listener.exitEmptydeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitEmptydeclaration) {
      return visitor.visitEmptydeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StartContext extends ParserRuleContext {
  public statement(): StatementContext[]
  public statement(i: number): StatementContext
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    } else {
      return this.getRuleContext(i, StatementContext)
    }
  }
  public function(): FunctionContext[]
  public function(i: number): FunctionContext
  public function(i?: number): FunctionContext | FunctionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(FunctionContext)
    } else {
      return this.getRuleContext(i, FunctionContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_start
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStart) {
      listener.enterStart(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStart) {
      listener.exitStart(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStart) {
      return visitor.visitStart(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StatementContext extends ParserRuleContext {
  public ifThenElseStatement(): IfThenElseStatementContext | undefined {
    return this.tryGetRuleContext(0, IfThenElseStatementContext)
  }
  public whileStatement(): WhileStatementContext | undefined {
    return this.tryGetRuleContext(0, WhileStatementContext)
  }
  public variableDeclaration(): VariableDeclarationContext | undefined {
    return this.tryGetRuleContext(0, VariableDeclarationContext)
  }
  public localValDeclaration(): LocalValDeclarationContext | undefined {
    return this.tryGetRuleContext(0, LocalValDeclarationContext)
  }
  public declaration(): DeclarationContext | undefined {
    return this.tryGetRuleContext(0, DeclarationContext)
  }
  public expressionStatement(): ExpressionStatementContext | undefined {
    return this.tryGetRuleContext(0, ExpressionStatementContext)
  }
  public block(): BlockContext | undefined {
    return this.tryGetRuleContext(0, BlockContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_statement
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStatement) {
      listener.enterStatement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStatement) {
      listener.exitStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStatement) {
      return visitor.visitStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IfThenElseStatementContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_ifThenElseStatement
  }
  public copyFrom(ctx: IfThenElseStatementContext): void {
    super.copyFrom(ctx)
  }
}
export class IfThenElseConditionContext extends IfThenElseStatementContext {
  public _test!: ExpressionContext
  public _consequent!: StatementContext
  public _alternate!: StatementContext
  public IF(): TerminalNode {
    return this.getToken(CalcParser.IF, 0)
  }
  public OPAR(): TerminalNode {
    return this.getToken(CalcParser.OPAR, 0)
  }
  public CPAR(): TerminalNode {
    return this.getToken(CalcParser.CPAR, 0)
  }
  public THEN(): TerminalNode {
    return this.getToken(CalcParser.THEN, 0)
  }
  public ELSE(): TerminalNode {
    return this.getToken(CalcParser.ELSE, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public statement(): StatementContext[]
  public statement(i: number): StatementContext
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    } else {
      return this.getRuleContext(i, StatementContext)
    }
  }
  constructor(ctx: IfThenElseStatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterIfThenElseCondition) {
      listener.enterIfThenElseCondition(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitIfThenElseCondition) {
      listener.exitIfThenElseCondition(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitIfThenElseCondition) {
      return visitor.visitIfThenElseCondition(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class WhileStatementContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_whileStatement
  }
  public copyFrom(ctx: WhileStatementContext): void {
    super.copyFrom(ctx)
  }
}
export class WhileConditionContext extends WhileStatementContext {
  public _test!: ExpressionContext
  public _body!: StatementContext
  public WHILE(): TerminalNode {
    return this.getToken(CalcParser.WHILE, 0)
  }
  public DO(): TerminalNode {
    return this.getToken(CalcParser.DO, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public statement(): StatementContext {
    return this.getRuleContext(0, StatementContext)
  }
  constructor(ctx: WhileStatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterWhileCondition) {
      listener.enterWhileCondition(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitWhileCondition) {
      listener.exitWhileCondition(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitWhileCondition) {
      return visitor.visitWhileCondition(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class TypeContext extends ParserRuleContext {
  public CHAR(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.CHAR, 0)
  }
  public STRING(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.STRING, 0)
  }
  public INT(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.INT, 0)
  }
  public BOOL(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.BOOL, 0)
  }
  public REALNUM(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.REALNUM, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_type
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterType) {
      listener.enterType(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitType) {
      listener.exitType(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitType) {
      return visitor.visitType(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationContext extends ParserRuleContext {
  public _t!: TypeContext
  public _id!: Token
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext)
  }
  public Stringliteral(): TerminalNode {
    return this.getToken(CalcParser.Stringliteral, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_declaration
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDeclaration) {
      listener.enterDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDeclaration) {
      listener.exitDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDeclaration) {
      return visitor.visitDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class VariableDeclarationContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_variableDeclaration
  }
  public copyFrom(ctx: VariableDeclarationContext): void {
    super.copyFrom(ctx)
  }
}
export class LetDeclarationContext extends VariableDeclarationContext {
  public _left!: Token
  public _operator!: Token
  public _right!: ExpressionContext
  public LET(): TerminalNode {
    return this.getToken(CalcParser.LET, 0)
  }
  public Stringliteral(): TerminalNode {
    return this.getToken(CalcParser.Stringliteral, 0)
  }
  public EQUAL(): TerminalNode {
    return this.getToken(CalcParser.EQUAL, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: VariableDeclarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLetDeclaration) {
      listener.enterLetDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLetDeclaration) {
      listener.exitLetDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLetDeclaration) {
      return visitor.visitLetDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ValDeclarationContext extends VariableDeclarationContext {
  public _left!: Token
  public _operator!: Token
  public _right!: ExpressionContext
  public VAL(): TerminalNode {
    return this.getToken(CalcParser.VAL, 0)
  }
  public Stringliteral(): TerminalNode {
    return this.getToken(CalcParser.Stringliteral, 0)
  }
  public EQUAL(): TerminalNode {
    return this.getToken(CalcParser.EQUAL, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: VariableDeclarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterValDeclaration) {
      listener.enterValDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitValDeclaration) {
      listener.exitValDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitValDeclaration) {
      return visitor.visitValDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LocalValDeclarationContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_localValDeclaration
  }
  public copyFrom(ctx: LocalValDeclarationContext): void {
    super.copyFrom(ctx)
  }
}
export class LocalValAssignmentContext extends LocalValDeclarationContext {
  public _left!: Token
  public _operator!: Token
  public _right!: ExpressionContext
  public LOCAL(): TerminalNode {
    return this.getToken(CalcParser.LOCAL, 0)
  }
  public Stringliteral(): TerminalNode {
    return this.getToken(CalcParser.Stringliteral, 0)
  }
  public EQUAL(): TerminalNode {
    return this.getToken(CalcParser.EQUAL, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: LocalValDeclarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLocalValAssignment) {
      listener.enterLocalValAssignment(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLocalValAssignment) {
      listener.exitLocalValAssignment(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLocalValAssignment) {
      return visitor.visitLocalValAssignment(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class BlockContext extends ParserRuleContext {
  public _stmts!: StatementContext
  public OBRACE(): TerminalNode {
    return this.getToken(CalcParser.OBRACE, 0)
  }
  public CBRACE(): TerminalNode {
    return this.getToken(CalcParser.CBRACE, 0)
  }
  public statement(): StatementContext[]
  public statement(i: number): StatementContext
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    } else {
      return this.getRuleContext(i, StatementContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_block
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterBlock) {
      listener.enterBlock(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitBlock) {
      listener.exitBlock(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitBlock) {
      return visitor.visitBlock(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PrintContext extends ParserRuleContext {
  public _expr!: Token
  public OPAR(): TerminalNode {
    return this.getToken(CalcParser.OPAR, 0)
  }
  public DOUBLEQUOTE(): TerminalNode[]
  public DOUBLEQUOTE(i: number): TerminalNode
  public DOUBLEQUOTE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CalcParser.DOUBLEQUOTE)
    } else {
      return this.getToken(CalcParser.DOUBLEQUOTE, i)
    }
  }
  public CPAR(): TerminalNode {
    return this.getToken(CalcParser.CPAR, 0)
  }
  public Stringliteral(): TerminalNode {
    return this.getToken(CalcParser.Stringliteral, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_print
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterPrint) {
      listener.enterPrint(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitPrint) {
      listener.exitPrint(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitPrint) {
      return visitor.visitPrint(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ParametersContext extends ParserRuleContext {
  public declaration(): DeclarationContext[]
  public declaration(i: number): DeclarationContext
  public declaration(i?: number): DeclarationContext | DeclarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DeclarationContext)
    } else {
      return this.getRuleContext(i, DeclarationContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_parameters
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterParameters) {
      listener.enterParameters(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitParameters) {
      listener.exitParameters(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitParameters) {
      return visitor.visitParameters(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class FunctionContext extends ParserRuleContext {
  public _t!: TypeContext
  public _id!: Token
  public _params!: ParametersContext
  public _body!: BlockContext
  public OPAR(): TerminalNode {
    return this.getToken(CalcParser.OPAR, 0)
  }
  public CPAR(): TerminalNode {
    return this.getToken(CalcParser.CPAR, 0)
  }
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext)
  }
  public Stringliteral(): TerminalNode {
    return this.getToken(CalcParser.Stringliteral, 0)
  }
  public parameters(): ParametersContext {
    return this.getRuleContext(0, ParametersContext)
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_function
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterFunction) {
      listener.enterFunction(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitFunction) {
      listener.exitFunction(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitFunction) {
      return visitor.visitFunction(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IdentifierContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_identifier
  }
  public copyFrom(ctx: IdentifierContext): void {
    super.copyFrom(ctx)
  }
}
export class StringContext extends IdentifierContext {
  public Stringliteral(): TerminalNode {
    return this.getToken(CalcParser.Stringliteral, 0)
  }
  constructor(ctx: IdentifierContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterString) {
      listener.enterString(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitString) {
      listener.exitString(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitString) {
      return visitor.visitString(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class NumberContext extends IdentifierContext {
  public NUMBER(): TerminalNode {
    return this.getToken(CalcParser.NUMBER, 0)
  }
  constructor(ctx: IdentifierContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterNumber) {
      listener.enterNumber(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitNumber) {
      listener.exitNumber(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitNumber) {
      return visitor.visitNumber(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class RealContext extends IdentifierContext {
  public REAL(): TerminalNode {
    return this.getToken(CalcParser.REAL, 0)
  }
  constructor(ctx: IdentifierContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterReal) {
      listener.enterReal(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitReal) {
      listener.exitReal(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitReal) {
      return visitor.visitReal(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class BooleanContext extends IdentifierContext {
  public BOOLEAN(): TerminalNode {
    return this.getToken(CalcParser.BOOLEAN, 0)
  }
  constructor(ctx: IdentifierContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterBoolean) {
      listener.enterBoolean(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitBoolean) {
      listener.exitBoolean(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitBoolean) {
      return visitor.visitBoolean(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionStatementContext extends ParserRuleContext {
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_expressionStatement
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterExpressionStatement) {
      listener.enterExpressionStatement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitExpressionStatement) {
      listener.exitExpressionStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitExpressionStatement) {
      return visitor.visitExpressionStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_expression
  }
  public copyFrom(ctx: ExpressionContext): void {
    super.copyFrom(ctx)
  }
}
export class IdentifiersContext extends ExpressionContext {
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterIdentifiers) {
      listener.enterIdentifiers(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitIdentifiers) {
      listener.exitIdentifiers(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitIdentifiers) {
      return visitor.visitIdentifiers(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ParenthesesContext extends ExpressionContext {
  public _inner!: ExpressionContext
  public OPAR(): TerminalNode {
    return this.getToken(CalcParser.OPAR, 0)
  }
  public CPAR(): TerminalNode {
    return this.getToken(CalcParser.CPAR, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterParentheses) {
      listener.enterParentheses(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitParentheses) {
      listener.exitParentheses(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitParentheses) {
      return visitor.visitParentheses(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PowerContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public POW(): TerminalNode {
    return this.getToken(CalcParser.POW, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterPower) {
      listener.enterPower(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitPower) {
      listener.exitPower(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitPower) {
      return visitor.visitPower(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class MultiplicationContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public MUL(): TerminalNode {
    return this.getToken(CalcParser.MUL, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterMultiplication) {
      listener.enterMultiplication(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitMultiplication) {
      listener.exitMultiplication(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitMultiplication) {
      return visitor.visitMultiplication(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class DivisionContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public DIV(): TerminalNode {
    return this.getToken(CalcParser.DIV, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDivision) {
      listener.enterDivision(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDivision) {
      listener.exitDivision(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDivision) {
      return visitor.visitDivision(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class AdditionContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public ADD(): TerminalNode {
    return this.getToken(CalcParser.ADD, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterAddition) {
      listener.enterAddition(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitAddition) {
      listener.exitAddition(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitAddition) {
      return visitor.visitAddition(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class SubtractionContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public SUB(): TerminalNode {
    return this.getToken(CalcParser.SUB, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterSubtraction) {
      listener.enterSubtraction(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitSubtraction) {
      listener.exitSubtraction(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitSubtraction) {
      return visitor.visitSubtraction(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ModulusContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public MOD(): TerminalNode {
    return this.getToken(CalcParser.MOD, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterModulus) {
      listener.enterModulus(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitModulus) {
      listener.exitModulus(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitModulus) {
      return visitor.visitModulus(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class EqualComparatorContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public EQUAL(): TerminalNode {
    return this.getToken(CalcParser.EQUAL, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterEqualComparator) {
      listener.enterEqualComparator(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitEqualComparator) {
      listener.exitEqualComparator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitEqualComparator) {
      return visitor.visitEqualComparator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class GreaterComparatorContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public GT(): TerminalNode {
    return this.getToken(CalcParser.GT, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterGreaterComparator) {
      listener.enterGreaterComparator(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitGreaterComparator) {
      listener.exitGreaterComparator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitGreaterComparator) {
      return visitor.visitGreaterComparator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class LesserComparatorContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public LT(): TerminalNode {
    return this.getToken(CalcParser.LT, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLesserComparator) {
      listener.enterLesserComparator(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLesserComparator) {
      listener.exitLesserComparator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLesserComparator) {
      return visitor.visitLesserComparator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class GreaterEqualComparatorContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public GE(): TerminalNode {
    return this.getToken(CalcParser.GE, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterGreaterEqualComparator) {
      listener.enterGreaterEqualComparator(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitGreaterEqualComparator) {
      listener.exitGreaterEqualComparator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitGreaterEqualComparator) {
      return visitor.visitGreaterEqualComparator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class LesserEqualComparatorContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public LE(): TerminalNode {
    return this.getToken(CalcParser.LE, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLesserEqualComparator) {
      listener.enterLesserEqualComparator(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLesserEqualComparator) {
      listener.exitLesserEqualComparator(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLesserEqualComparator) {
      return visitor.visitLesserEqualComparator(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class AndLogicalContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public AND(): TerminalNode {
    return this.getToken(CalcParser.AND, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterAndLogical) {
      listener.enterAndLogical(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitAndLogical) {
      listener.exitAndLogical(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitAndLogical) {
      return visitor.visitAndLogical(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class OrLogicalContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public OR(): TerminalNode {
    return this.getToken(CalcParser.OR, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterOrLogical) {
      listener.enterOrLogical(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitOrLogical) {
      listener.exitOrLogical(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitOrLogical) {
      return visitor.visitOrLogical(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class NotLogicalContext extends ExpressionContext {
  public _left!: ExpressionContext
  public NOT(): TerminalNode {
    return this.getToken(CalcParser.NOT, 0)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterNotLogical) {
      listener.enterNotLogical(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitNotLogical) {
      listener.exitNotLogical(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitNotLogical) {
      return visitor.visitNotLogical(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
