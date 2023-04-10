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
  public static readonly T__3 = 4
  public static readonly POW = 5
  public static readonly MUL = 6
  public static readonly DIV = 7
  public static readonly MOD = 8
  public static readonly ADD = 9
  public static readonly SUB = 10
  public static readonly EQUAL = 11
  public static readonly ARROW = 12
  public static readonly AND = 13
  public static readonly OR = 14
  public static readonly NOT = 15
  public static readonly BOOLEAN = 16
  public static readonly GT = 17
  public static readonly LT = 18
  public static readonly GE = 19
  public static readonly LE = 20
  public static readonly NUMBER = 21
  public static readonly REAL = 22
  public static readonly WHITESPACE = 23
  public static readonly LETTER = 24
  public static readonly LET = 25
  public static readonly IN = 26
  public static readonly END = 27
  public static readonly VAL = 28
  public static readonly LOCAL = 29
  public static readonly FUN = 30
  public static readonly FN = 31
  public static readonly OPAR = 32
  public static readonly CPAR = 33
  public static readonly OBRACE = 34
  public static readonly CBRACE = 35
  public static readonly DOUBLEQUOTE = 36
  public static readonly ASSIGNMEMT = 37
  public static readonly IF = 38
  public static readonly THEN = 39
  public static readonly ELSE = 40
  public static readonly WHILE = 41
  public static readonly DO = 42
  public static readonly CHAR = 43
  public static readonly STRING = 44
  public static readonly INT = 45
  public static readonly BOOL = 46
  public static readonly REALNUM = 47
  public static readonly Stringliteral = 48
  public static readonly RULE_emptydeclaration = 0
  public static readonly RULE_start = 1
  public static readonly RULE_statement = 2
  public static readonly RULE_ifThenElseStatement = 3
  public static readonly RULE_whileStatement = 4
  public static readonly RULE_variableDeclaration = 5
  public static readonly RULE_localDeclaration = 6
  public static readonly RULE_letDeclaration = 7
  public static readonly RULE_declarationType = 8
  public static readonly RULE_declarationlist = 9
  public static readonly RULE_identifier = 10
  public static readonly RULE_elements = 11
  public static readonly RULE_expressionStatement = 12
  public static readonly RULE_expression = 13
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'emptydeclaration',
    'start',
    'statement',
    'ifThenElseStatement',
    'whileStatement',
    'variableDeclaration',
    'localDeclaration',
    'letDeclaration',
    'declarationType',
    'declarationlist',
    'identifier',
    'elements',
    'expressionStatement',
    'expression'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "';'",
    "','",
    "'['",
    "']'",
    "'^'",
    "'*'",
    "'/'",
    "'%'",
    "'+'",
    "'-'",
    "'='",
    "'=>'",
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
    "'local'",
    "'fun'",
    "'fn'",
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
    undefined,
    undefined,
    'POW',
    'MUL',
    'DIV',
    'MOD',
    'ADD',
    'SUB',
    'EQUAL',
    'ARROW',
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
    'FUN',
    'FN',
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
  public emptydeclaration(): EmptydeclarationContext {
    const _localctx: EmptydeclarationContext = new EmptydeclarationContext(this._ctx, this.state)
    this.enterRule(_localctx, 0, CalcParser.RULE_emptydeclaration)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 28
        this.match(CalcParser.T__0)
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
    this.enterRule(_localctx, 2, CalcParser.RULE_start)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 33
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << CalcParser.T__2) |
                (1 << CalcParser.NOT) |
                (1 << CalcParser.BOOLEAN) |
                (1 << CalcParser.NUMBER) |
                (1 << CalcParser.REAL) |
                (1 << CalcParser.LET) |
                (1 << CalcParser.VAL) |
                (1 << CalcParser.LOCAL) |
                (1 << CalcParser.FN))) !==
              0) ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (CalcParser.OPAR - 32)) |
                (1 << (CalcParser.DOUBLEQUOTE - 32)) |
                (1 << (CalcParser.IF - 32)) |
                (1 << (CalcParser.WHILE - 32)) |
                (1 << (CalcParser.Stringliteral - 32)))) !==
              0)
        ) {
          {
            {
              this.state = 30
              this.statement()
            }
          }
          this.state = 35
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
    this.enterRule(_localctx, 4, CalcParser.RULE_statement)
    try {
      this.state = 42
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.IF:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 36
            this.ifThenElseStatement()
          }
          break
        case CalcParser.WHILE:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 37
            this.whileStatement()
          }
          break
        case CalcParser.VAL:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 38
            this.variableDeclaration()
          }
          break
        case CalcParser.LOCAL:
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 39
            this.localDeclaration()
          }
          break
        case CalcParser.LET:
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 40
            this.letDeclaration()
          }
          break
        case CalcParser.T__2:
        case CalcParser.NOT:
        case CalcParser.BOOLEAN:
        case CalcParser.NUMBER:
        case CalcParser.REAL:
        case CalcParser.FN:
        case CalcParser.OPAR:
        case CalcParser.DOUBLEQUOTE:
        case CalcParser.Stringliteral:
          this.enterOuterAlt(_localctx, 6)
          {
            this.state = 41
            this.expressionStatement()
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
    this.enterRule(_localctx, 6, CalcParser.RULE_ifThenElseStatement)
    try {
      _localctx = new IfThenElseConditionContext(_localctx)
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 44
        this.match(CalcParser.IF)
        this.state = 45
        this.match(CalcParser.OPAR)
        this.state = 46
        ;(_localctx as IfThenElseConditionContext)._test = this.expression(0)
        this.state = 47
        this.match(CalcParser.CPAR)
        this.state = 48
        this.match(CalcParser.THEN)
        this.state = 49
        ;(_localctx as IfThenElseConditionContext)._consequent = this.statement()
        this.state = 50
        this.match(CalcParser.ELSE)
        this.state = 51
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
    this.enterRule(_localctx, 8, CalcParser.RULE_whileStatement)
    try {
      _localctx = new WhileConditionContext(_localctx)
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 53
        this.match(CalcParser.WHILE)
        this.state = 54
        ;(_localctx as WhileConditionContext)._test = this.expression(0)
        this.state = 55
        this.match(CalcParser.DO)
        this.state = 56
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
  public variableDeclaration(): VariableDeclarationContext {
    const _localctx: VariableDeclarationContext = new VariableDeclarationContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 10, CalcParser.RULE_variableDeclaration)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 58
        this.match(CalcParser.VAL)
        this.state = 59
        _localctx._left = this.match(CalcParser.Stringliteral)
        this.state = 60
        _localctx._operator = this.match(CalcParser.EQUAL)
        this.state = 61
        _localctx._right = this.expression(0)
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
  public localDeclaration(): LocalDeclarationContext {
    const _localctx: LocalDeclarationContext = new LocalDeclarationContext(this._ctx, this.state)
    this.enterRule(_localctx, 12, CalcParser.RULE_localDeclaration)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 63
        this.match(CalcParser.LOCAL)
        this.state = 64
        _localctx._del = this.declarationlist()
        this.state = 65
        this.match(CalcParser.IN)
        this.state = 66
        _localctx._delist = this.declarationlist()
        this.state = 67
        this.match(CalcParser.END)
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
  public letDeclaration(): LetDeclarationContext {
    const _localctx: LetDeclarationContext = new LetDeclarationContext(this._ctx, this.state)
    this.enterRule(_localctx, 14, CalcParser.RULE_letDeclaration)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 69
        this.match(CalcParser.LET)
        this.state = 70
        _localctx._del = this.declarationType()
        this.state = 71
        this.match(CalcParser.IN)
        this.state = 72
        _localctx._delist = this.declarationlist()
        this.state = 73
        this.match(CalcParser.END)
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
  public declarationType(): DeclarationTypeContext {
    const _localctx: DeclarationTypeContext = new DeclarationTypeContext(this._ctx, this.state)
    this.enterRule(_localctx, 16, CalcParser.RULE_declarationType)
    try {
      this.state = 78
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.VAL:
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 75
            this.variableDeclaration()
          }
          break
        case CalcParser.LOCAL:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 76
            this.localDeclaration()
          }
          break
        case CalcParser.LET:
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 77
            this.letDeclaration()
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
  public declarationlist(): DeclarationlistContext {
    const _localctx: DeclarationlistContext = new DeclarationlistContext(this._ctx, this.state)
    this.enterRule(_localctx, 18, CalcParser.RULE_declarationlist)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 83
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << CalcParser.LET) | (1 << CalcParser.VAL) | (1 << CalcParser.LOCAL))) !==
            0
        ) {
          {
            {
              this.state = 80
              this.declarationType()
            }
          }
          this.state = 85
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
  public identifier(): IdentifierContext {
    let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 20, CalcParser.RULE_identifier)
    try {
      this.state = 90
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.Stringliteral:
          _localctx = new IDContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 86
            this.match(CalcParser.Stringliteral)
          }
          break
        case CalcParser.NUMBER:
          _localctx = new NumberContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 87
            this.match(CalcParser.NUMBER)
          }
          break
        case CalcParser.REAL:
          _localctx = new RealContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 88
            this.match(CalcParser.REAL)
          }
          break
        case CalcParser.BOOLEAN:
          _localctx = new BooleanContext(_localctx)
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 89
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
  public elements(): ElementsContext {
    const _localctx: ElementsContext = new ElementsContext(this._ctx, this.state)
    this.enterRule(_localctx, 22, CalcParser.RULE_elements)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 92
        this.expression(0)
        this.state = 97
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === CalcParser.T__1) {
          {
            {
              this.state = 93
              this.match(CalcParser.T__1)
              this.state = 94
              this.expression(0)
            }
          }
          this.state = 99
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
  public expressionStatement(): ExpressionStatementContext {
    const _localctx: ExpressionStatementContext = new ExpressionStatementContext(
      this._ctx,
      this.state
    )
    this.enterRule(_localctx, 24, CalcParser.RULE_expressionStatement)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 100
        this.expression(0)
        this.state = 101
        this.match(CalcParser.T__0)
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
    const _startState: number = 26
    this.enterRecursionRule(_localctx, 26, CalcParser.RULE_expression, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 140
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
          case 1:
            {
              _localctx = new IdentifiersContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 104
              this.identifier()
            }
            break

          case 2:
            {
              _localctx = new StringContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 105
              this.match(CalcParser.DOUBLEQUOTE)
              this.state = 106
              this.match(CalcParser.Stringliteral)
              this.state = 107
              this.match(CalcParser.DOUBLEQUOTE)
            }
            break

          case 3:
            {
              _localctx = new ParenthesesContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 108
              this.match(CalcParser.OPAR)
              this.state = 109
              ;(_localctx as ParenthesesContext)._inner = this.expression(0)
              this.state = 110
              this.match(CalcParser.CPAR)
            }
            break

          case 4:
            {
              _localctx = new TupleContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 112
              this.match(CalcParser.OPAR)
              this.state = 113
              this.expression(0)
              this.state = 118
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              while (_la === CalcParser.T__1) {
                {
                  {
                    this.state = 114
                    this.match(CalcParser.T__1)
                    this.state = 115
                    this.expression(0)
                  }
                }
                this.state = 120
                this._errHandler.sync(this)
                _la = this._input.LA(1)
              }
              this.state = 121
              this.match(CalcParser.CPAR)
            }
            break

          case 5:
            {
              _localctx = new FunctionCallContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 123
              ;(_localctx as FunctionCallContext)._name = this.identifier()
              this.state = 124
              ;(_localctx as FunctionCallContext)._params = this.identifier()
            }
            break

          case 6:
            {
              _localctx = new NotLogicalContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 126
              this.match(CalcParser.NOT)
              this.state = 127
              ;(_localctx as NotLogicalContext)._left = this.expression(4)
            }
            break

          case 7:
            {
              _localctx = new ListContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 128
              this.match(CalcParser.T__2)
              this.state = 130
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              if (
                ((_la & ~0x1f) === 0 &&
                  ((1 << _la) &
                    ((1 << CalcParser.T__2) |
                      (1 << CalcParser.NOT) |
                      (1 << CalcParser.BOOLEAN) |
                      (1 << CalcParser.NUMBER) |
                      (1 << CalcParser.REAL) |
                      (1 << CalcParser.FN))) !==
                    0) ||
                (((_la - 32) & ~0x1f) === 0 &&
                  ((1 << (_la - 32)) &
                    ((1 << (CalcParser.OPAR - 32)) |
                      (1 << (CalcParser.DOUBLEQUOTE - 32)) |
                      (1 << (CalcParser.Stringliteral - 32)))) !==
                    0)
              ) {
                {
                  this.state = 129
                  ;(_localctx as ListContext)._element = this.elements()
                }
              }

              this.state = 132
              this.match(CalcParser.T__3)
            }
            break

          case 8:
            {
              _localctx = new AssignmentContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 133
              ;(_localctx as AssignmentContext)._left = this.match(CalcParser.Stringliteral)
              this.state = 134
              ;(_localctx as AssignmentContext)._operator = this.match(CalcParser.ASSIGNMEMT)
              this.state = 135
              ;(_localctx as AssignmentContext)._right = this.expression(2)
            }
            break

          case 9:
            {
              _localctx = new LambdaContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 136
              this.match(CalcParser.FN)
              this.state = 137
              ;(_localctx as LambdaContext)._name = this.match(CalcParser.Stringliteral)
              this.state = 138
              ;(_localctx as LambdaContext)._operator = this.match(CalcParser.ARROW)
              this.state = 139
              ;(_localctx as LambdaContext)._right = this.expression(1)
            }
            break
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 183
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 181
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                  {
                    _localctx = new PowerContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as PowerContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 142
                    if (!this.precpred(this._ctx, 17)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 17)')
                    }
                    this.state = 143
                    ;(_localctx as PowerContext)._operator = this.match(CalcParser.POW)
                    this.state = 144
                    ;(_localctx as PowerContext)._right = this.expression(18)
                  }
                  break

                case 2:
                  {
                    _localctx = new MultiplicationContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as MultiplicationContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 145
                    if (!this.precpred(this._ctx, 16)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 16)')
                    }
                    this.state = 146
                    ;(_localctx as MultiplicationContext)._operator = this.match(CalcParser.MUL)
                    this.state = 147
                    ;(_localctx as MultiplicationContext)._right = this.expression(17)
                  }
                  break

                case 3:
                  {
                    _localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as DivisionContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 148
                    if (!this.precpred(this._ctx, 15)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 15)')
                    }
                    this.state = 149
                    ;(_localctx as DivisionContext)._operator = this.match(CalcParser.DIV)
                    this.state = 150
                    ;(_localctx as DivisionContext)._right = this.expression(16)
                  }
                  break

                case 4:
                  {
                    _localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as AdditionContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 151
                    if (!this.precpred(this._ctx, 14)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 14)')
                    }
                    this.state = 152
                    ;(_localctx as AdditionContext)._operator = this.match(CalcParser.ADD)
                    this.state = 153
                    ;(_localctx as AdditionContext)._right = this.expression(15)
                  }
                  break

                case 5:
                  {
                    _localctx = new SubtractionContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as SubtractionContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 154
                    if (!this.precpred(this._ctx, 13)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 13)')
                    }
                    this.state = 155
                    ;(_localctx as SubtractionContext)._operator = this.match(CalcParser.SUB)
                    this.state = 156
                    ;(_localctx as SubtractionContext)._right = this.expression(14)
                  }
                  break

                case 6:
                  {
                    _localctx = new ModulusContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as ModulusContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 157
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 12)')
                    }
                    this.state = 158
                    ;(_localctx as ModulusContext)._operator = this.match(CalcParser.MOD)
                    this.state = 159
                    ;(_localctx as ModulusContext)._right = this.expression(13)
                  }
                  break

                case 7:
                  {
                    _localctx = new EqualComparatorContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as EqualComparatorContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 160
                    if (!this.precpred(this._ctx, 11)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 11)')
                    }
                    this.state = 161
                    ;(_localctx as EqualComparatorContext)._operator = this.match(CalcParser.EQUAL)
                    this.state = 162
                    ;(_localctx as EqualComparatorContext)._right = this.expression(12)
                  }
                  break

                case 8:
                  {
                    _localctx = new GreaterComparatorContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as GreaterComparatorContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 163
                    if (!this.precpred(this._ctx, 10)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 10)')
                    }
                    this.state = 164
                    ;(_localctx as GreaterComparatorContext)._operator = this.match(CalcParser.GT)
                    this.state = 165
                    ;(_localctx as GreaterComparatorContext)._right = this.expression(11)
                  }
                  break

                case 9:
                  {
                    _localctx = new LesserComparatorContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as LesserComparatorContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 166
                    if (!this.precpred(this._ctx, 9)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 9)')
                    }
                    this.state = 167
                    ;(_localctx as LesserComparatorContext)._operator = this.match(CalcParser.LT)
                    this.state = 168
                    ;(_localctx as LesserComparatorContext)._right = this.expression(10)
                  }
                  break

                case 10:
                  {
                    _localctx = new GreaterEqualComparatorContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as GreaterEqualComparatorContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 169
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 8)')
                    }
                    this.state = 170
                    ;(_localctx as GreaterEqualComparatorContext)._operator = this.match(
                      CalcParser.GE
                    )
                    this.state = 171
                    ;(_localctx as GreaterEqualComparatorContext)._right = this.expression(9)
                  }
                  break

                case 11:
                  {
                    _localctx = new LesserEqualComparatorContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as LesserEqualComparatorContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 172
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 7)')
                    }
                    this.state = 173
                    ;(_localctx as LesserEqualComparatorContext)._operator = this.match(
                      CalcParser.LE
                    )
                    this.state = 174
                    ;(_localctx as LesserEqualComparatorContext)._right = this.expression(8)
                  }
                  break

                case 12:
                  {
                    _localctx = new AndLogicalContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as AndLogicalContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 175
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)')
                    }
                    this.state = 176
                    ;(_localctx as AndLogicalContext)._operator = this.match(CalcParser.AND)
                    this.state = 177
                    ;(_localctx as AndLogicalContext)._right = this.expression(7)
                  }
                  break

                case 13:
                  {
                    _localctx = new OrLogicalContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as OrLogicalContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 178
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)')
                    }
                    this.state = 179
                    ;(_localctx as OrLogicalContext)._operator = this.match(CalcParser.OR)
                    this.state = 180
                    ;(_localctx as OrLogicalContext)._right = this.expression(6)
                  }
                  break
              }
            }
          }
          this.state = 185
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx)
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
      case 13:
        return this.expression_sempred(_localctx as ExpressionContext, predIndex)
    }
    return true
  }
  private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 17)

      case 1:
        return this.precpred(this._ctx, 16)

      case 2:
        return this.precpred(this._ctx, 15)

      case 3:
        return this.precpred(this._ctx, 14)

      case 4:
        return this.precpred(this._ctx, 13)

      case 5:
        return this.precpred(this._ctx, 12)

      case 6:
        return this.precpred(this._ctx, 11)

      case 7:
        return this.precpred(this._ctx, 10)

      case 8:
        return this.precpred(this._ctx, 9)

      case 9:
        return this.precpred(this._ctx, 8)

      case 10:
        return this.precpred(this._ctx, 7)

      case 11:
        return this.precpred(this._ctx, 6)

      case 12:
        return this.precpred(this._ctx, 5)
    }
    return true
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x032\xBD\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x03\x07\x03"\n\x03\f\x03' +
    '\x0E\x03%\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04' +
    '-\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05' +
    '\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07' +
    '\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t' +
    '\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x05\nQ\n\n\x03\v\x07\vT\n\v\f\v\x0E' +
    '\vW\v\v\x03\f\x03\f\x03\f\x03\f\x05\f]\n\f\x03\r\x03\r\x03\r\x07\rb\n' +
    '\r\f\r\x0E\re\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03' +
    '\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03' +
    '\x0F\x07\x0Fw\n\x0F\f\x0F\x0E\x0Fz\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F' +
    '\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x85\n\x0F\x03\x0F\x03' +
    '\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x8F\n\x0F' +
    '\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F' +
    '\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F' +
    '\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F' +
    '\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F' +
    '\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xB8\n\x0F\f\x0F\x0E\x0F\xBB\v\x0F\x03' +
    '\x0F\x02\x02\x03\x1C\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E' +
    '\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x02\x02' +
    '\xD2\x02\x1E\x03\x02\x02\x02\x04#\x03\x02\x02\x02\x06,\x03\x02\x02\x02' +
    '\b.\x03\x02\x02\x02\n7\x03\x02\x02\x02\f<\x03\x02\x02\x02\x0EA\x03\x02' +
    '\x02\x02\x10G\x03\x02\x02\x02\x12P\x03\x02\x02\x02\x14U\x03\x02\x02\x02' +
    '\x16\\\x03\x02\x02\x02\x18^\x03\x02\x02\x02\x1Af\x03\x02\x02\x02\x1C\x8E' +
    '\x03\x02\x02\x02\x1E\x1F\x07\x03\x02\x02\x1F\x03\x03\x02\x02\x02 "\x05' +
    '\x06\x04\x02! \x03\x02\x02\x02"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$' +
    '\x03\x02\x02\x02$\x05\x03\x02\x02\x02%#\x03\x02\x02\x02&-\x05\b\x05\x02' +
    "'-\x05\n\x06\x02(-\x05\f\x07\x02)-\x05\x0E\b\x02*-\x05\x10\t\x02+-\x05" +
    "\x1A\x0E\x02,&\x03\x02\x02\x02,'\x03\x02\x02\x02,(\x03\x02\x02\x02,)" +
    '\x03\x02\x02\x02,*\x03\x02\x02\x02,+\x03\x02\x02\x02-\x07\x03\x02\x02' +
    '\x02./\x07(\x02\x02/0\x07"\x02\x0201\x05\x1C\x0F\x0212\x07#\x02\x022' +
    '3\x07)\x02\x0234\x05\x06\x04\x0245\x07*\x02\x0256\x05\x06\x04\x026\t\x03' +
    '\x02\x02\x0278\x07+\x02\x0289\x05\x1C\x0F\x029:\x07,\x02\x02:;\x05\x06' +
    '\x04\x02;\v\x03\x02\x02\x02<=\x07\x1E\x02\x02=>\x072\x02\x02>?\x07\r\x02' +
    '\x02?@\x05\x1C\x0F\x02@\r\x03\x02\x02\x02AB\x07\x1F\x02\x02BC\x05\x14' +
    '\v\x02CD\x07\x1C\x02\x02DE\x05\x14\v\x02EF\x07\x1D\x02\x02F\x0F\x03\x02' +
    '\x02\x02GH\x07\x1B\x02\x02HI\x05\x12\n\x02IJ\x07\x1C\x02\x02JK\x05\x14' +
    '\v\x02KL\x07\x1D\x02\x02L\x11\x03\x02\x02\x02MQ\x05\f\x07\x02NQ\x05\x0E' +
    '\b\x02OQ\x05\x10\t\x02PM\x03\x02\x02\x02PN\x03\x02\x02\x02PO\x03\x02\x02' +
    '\x02Q\x13\x03\x02\x02\x02RT\x05\x12\n\x02SR\x03\x02\x02\x02TW\x03\x02' +
    '\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02V\x15\x03\x02\x02\x02WU\x03' +
    '\x02\x02\x02X]\x072\x02\x02Y]\x07\x17\x02\x02Z]\x07\x18\x02\x02[]\x07' +
    '\x12\x02\x02\\X\x03\x02\x02\x02\\Y\x03\x02\x02\x02\\Z\x03\x02\x02\x02' +
    '\\[\x03\x02\x02\x02]\x17\x03\x02\x02\x02^c\x05\x1C\x0F\x02_`\x07\x04\x02' +
    '\x02`b\x05\x1C\x0F\x02a_\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03\x02\x02' +
    '\x02cd\x03\x02\x02\x02d\x19\x03\x02\x02\x02ec\x03\x02\x02\x02fg\x05\x1C' +
    '\x0F\x02gh\x07\x03\x02\x02h\x1B\x03\x02\x02\x02ij\b\x0F\x01\x02j\x8F\x05' +
    '\x16\f\x02kl\x07&\x02\x02lm\x072\x02\x02m\x8F\x07&\x02\x02no\x07"\x02' +
    '\x02op\x05\x1C\x0F\x02pq\x07#\x02\x02q\x8F\x03\x02\x02\x02rs\x07"\x02' +
    '\x02sx\x05\x1C\x0F\x02tu\x07\x04\x02\x02uw\x05\x1C\x0F\x02vt\x03\x02\x02' +
    '\x02wz\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02\x02y{\x03\x02\x02' +
    '\x02zx\x03\x02\x02\x02{|\x07#\x02\x02|\x8F\x03\x02\x02\x02}~\x05\x16\f' +
    '\x02~\x7F\x05\x16\f\x02\x7F\x8F\x03\x02\x02\x02\x80\x81\x07\x11\x02\x02' +
    '\x81\x8F\x05\x1C\x0F\x06\x82\x84\x07\x05\x02\x02\x83\x85\x05\x18\r\x02' +
    '\x84\x83\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02' +
    "\x86\x8F\x07\x06\x02\x02\x87\x88\x072\x02\x02\x88\x89\x07'\x02\x02\x89" +
    '\x8F\x05\x1C\x0F\x04\x8A\x8B\x07!\x02\x02\x8B\x8C\x072\x02\x02\x8C\x8D' +
    '\x07\x0E\x02\x02\x8D\x8F\x05\x1C\x0F\x03\x8Ei\x03\x02\x02\x02\x8Ek\x03' +
    '\x02\x02\x02\x8En\x03\x02\x02\x02\x8Er\x03\x02\x02\x02\x8E}\x03\x02\x02' +
    '\x02\x8E\x80\x03\x02\x02\x02\x8E\x82\x03\x02\x02\x02\x8E\x87\x03\x02\x02' +
    '\x02\x8E\x8A\x03\x02\x02\x02\x8F\xB9\x03\x02\x02\x02\x90\x91\f\x13\x02' +
    '\x02\x91\x92\x07\x07\x02\x02\x92\xB8\x05\x1C\x0F\x14\x93\x94\f\x12\x02' +
    '\x02\x94\x95\x07\b\x02\x02\x95\xB8\x05\x1C\x0F\x13\x96\x97\f\x11\x02\x02' +
    '\x97\x98\x07\t\x02\x02\x98\xB8\x05\x1C\x0F\x12\x99\x9A\f\x10\x02\x02\x9A' +
    '\x9B\x07\v\x02\x02\x9B\xB8\x05\x1C\x0F\x11\x9C\x9D\f\x0F\x02\x02\x9D\x9E' +
    '\x07\f\x02\x02\x9E\xB8\x05\x1C\x0F\x10\x9F\xA0\f\x0E\x02\x02\xA0\xA1\x07' +
    '\n\x02\x02\xA1\xB8\x05\x1C\x0F\x0F\xA2\xA3\f\r\x02\x02\xA3\xA4\x07\r\x02' +
    '\x02\xA4\xB8\x05\x1C\x0F\x0E\xA5\xA6\f\f\x02\x02\xA6\xA7\x07\x13\x02\x02' +
    '\xA7\xB8\x05\x1C\x0F\r\xA8\xA9\f\v\x02\x02\xA9\xAA\x07\x14\x02\x02\xAA' +
    '\xB8\x05\x1C\x0F\f\xAB\xAC\f\n\x02\x02\xAC\xAD\x07\x15\x02\x02\xAD\xB8' +
    '\x05\x1C\x0F\v\xAE\xAF\f\t\x02\x02\xAF\xB0\x07\x16\x02\x02\xB0\xB8\x05' +
    '\x1C\x0F\n\xB1\xB2\f\b\x02\x02\xB2\xB3\x07\x0F\x02\x02\xB3\xB8\x05\x1C' +
    '\x0F\t\xB4\xB5\f\x07\x02\x02\xB5\xB6\x07\x10\x02\x02\xB6\xB8\x05\x1C\x0F' +
    '\b\xB7\x90\x03\x02\x02\x02\xB7\x93\x03\x02\x02\x02\xB7\x96\x03\x02\x02' +
    '\x02\xB7\x99\x03\x02\x02\x02\xB7\x9C\x03\x02\x02\x02\xB7\x9F\x03\x02\x02' +
    '\x02\xB7\xA2\x03\x02\x02\x02\xB7\xA5\x03\x02\x02\x02\xB7\xA8\x03\x02\x02' +
    '\x02\xB7\xAB\x03\x02\x02\x02\xB7\xAE\x03\x02\x02\x02\xB7\xB1\x03\x02\x02' +
    '\x02\xB7\xB4\x03\x02\x02\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02\x02' +
    '\x02\xB9\xBA\x03\x02\x02\x02\xBA\x1D\x03\x02\x02\x02\xBB\xB9\x03\x02\x02' +
    '\x02\r#,PU\\cx\x84\x8E\xB7\xB9'
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
  public localDeclaration(): LocalDeclarationContext | undefined {
    return this.tryGetRuleContext(0, LocalDeclarationContext)
  }
  public letDeclaration(): LetDeclarationContext | undefined {
    return this.tryGetRuleContext(0, LetDeclarationContext)
  }
  public expressionStatement(): ExpressionStatementContext | undefined {
    return this.tryGetRuleContext(0, ExpressionStatementContext)
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

export class VariableDeclarationContext extends ParserRuleContext {
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
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_variableDeclaration
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterVariableDeclaration) {
      listener.enterVariableDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitVariableDeclaration) {
      listener.exitVariableDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitVariableDeclaration) {
      return visitor.visitVariableDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LocalDeclarationContext extends ParserRuleContext {
  public _del!: DeclarationlistContext
  public _delist!: DeclarationlistContext
  public LOCAL(): TerminalNode {
    return this.getToken(CalcParser.LOCAL, 0)
  }
  public IN(): TerminalNode {
    return this.getToken(CalcParser.IN, 0)
  }
  public END(): TerminalNode {
    return this.getToken(CalcParser.END, 0)
  }
  public declarationlist(): DeclarationlistContext[]
  public declarationlist(i: number): DeclarationlistContext
  public declarationlist(i?: number): DeclarationlistContext | DeclarationlistContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DeclarationlistContext)
    } else {
      return this.getRuleContext(i, DeclarationlistContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_localDeclaration
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLocalDeclaration) {
      listener.enterLocalDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLocalDeclaration) {
      listener.exitLocalDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLocalDeclaration) {
      return visitor.visitLocalDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LetDeclarationContext extends ParserRuleContext {
  public _del!: DeclarationTypeContext
  public _delist!: DeclarationlistContext
  public LET(): TerminalNode {
    return this.getToken(CalcParser.LET, 0)
  }
  public IN(): TerminalNode {
    return this.getToken(CalcParser.IN, 0)
  }
  public END(): TerminalNode {
    return this.getToken(CalcParser.END, 0)
  }
  public declarationType(): DeclarationTypeContext {
    return this.getRuleContext(0, DeclarationTypeContext)
  }
  public declarationlist(): DeclarationlistContext {
    return this.getRuleContext(0, DeclarationlistContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_letDeclaration
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

export class DeclarationTypeContext extends ParserRuleContext {
  public variableDeclaration(): VariableDeclarationContext | undefined {
    return this.tryGetRuleContext(0, VariableDeclarationContext)
  }
  public localDeclaration(): LocalDeclarationContext | undefined {
    return this.tryGetRuleContext(0, LocalDeclarationContext)
  }
  public letDeclaration(): LetDeclarationContext | undefined {
    return this.tryGetRuleContext(0, LetDeclarationContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_declarationType
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDeclarationType) {
      listener.enterDeclarationType(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDeclarationType) {
      listener.exitDeclarationType(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDeclarationType) {
      return visitor.visitDeclarationType(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationlistContext extends ParserRuleContext {
  public declarationType(): DeclarationTypeContext[]
  public declarationType(i: number): DeclarationTypeContext
  public declarationType(i?: number): DeclarationTypeContext | DeclarationTypeContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DeclarationTypeContext)
    } else {
      return this.getRuleContext(i, DeclarationTypeContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_declarationlist
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDeclarationlist) {
      listener.enterDeclarationlist(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDeclarationlist) {
      listener.exitDeclarationlist(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDeclarationlist) {
      return visitor.visitDeclarationlist(this)
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
export class IDContext extends IdentifierContext {
  public Stringliteral(): TerminalNode {
    return this.getToken(CalcParser.Stringliteral, 0)
  }
  constructor(ctx: IdentifierContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterID) {
      listener.enterID(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitID) {
      listener.exitID(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitID) {
      return visitor.visitID(this)
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

export class ElementsContext extends ParserRuleContext {
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_elements
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterElements) {
      listener.enterElements(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitElements) {
      listener.exitElements(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitElements) {
      return visitor.visitElements(this)
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
export class StringContext extends ExpressionContext {
  public DOUBLEQUOTE(): TerminalNode[]
  public DOUBLEQUOTE(i: number): TerminalNode
  public DOUBLEQUOTE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(CalcParser.DOUBLEQUOTE)
    } else {
      return this.getToken(CalcParser.DOUBLEQUOTE, i)
    }
  }
  public Stringliteral(): TerminalNode {
    return this.getToken(CalcParser.Stringliteral, 0)
  }
  constructor(ctx: ExpressionContext) {
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
export class TupleContext extends ExpressionContext {
  public OPAR(): TerminalNode {
    return this.getToken(CalcParser.OPAR, 0)
  }
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public CPAR(): TerminalNode {
    return this.getToken(CalcParser.CPAR, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterTuple) {
      listener.enterTuple(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitTuple) {
      listener.exitTuple(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitTuple) {
      return visitor.visitTuple(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class FunctionCallContext extends ExpressionContext {
  public _name!: IdentifierContext
  public _params!: IdentifierContext
  public identifier(): IdentifierContext[]
  public identifier(i: number): IdentifierContext
  public identifier(i?: number): IdentifierContext | IdentifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdentifierContext)
    } else {
      return this.getRuleContext(i, IdentifierContext)
    }
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterFunctionCall) {
      listener.enterFunctionCall(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitFunctionCall) {
      listener.exitFunctionCall(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitFunctionCall) {
      return visitor.visitFunctionCall(this)
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
export class ListContext extends ExpressionContext {
  public _element!: ElementsContext
  public elements(): ElementsContext | undefined {
    return this.tryGetRuleContext(0, ElementsContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterList) {
      listener.enterList(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitList) {
      listener.exitList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitList) {
      return visitor.visitList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class AssignmentContext extends ExpressionContext {
  public _left!: Token
  public _operator!: Token
  public _right!: ExpressionContext
  public Stringliteral(): TerminalNode {
    return this.getToken(CalcParser.Stringliteral, 0)
  }
  public ASSIGNMEMT(): TerminalNode {
    return this.getToken(CalcParser.ASSIGNMEMT, 0)
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
    if (listener.enterAssignment) {
      listener.enterAssignment(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitAssignment) {
      listener.exitAssignment(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitAssignment) {
      return visitor.visitAssignment(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class LambdaContext extends ExpressionContext {
  public _name!: Token
  public _operator!: Token
  public _right!: ExpressionContext
  public FN(): TerminalNode {
    return this.getToken(CalcParser.FN, 0)
  }
  public Stringliteral(): TerminalNode {
    return this.getToken(CalcParser.Stringliteral, 0)
  }
  public ARROW(): TerminalNode {
    return this.getToken(CalcParser.ARROW, 0)
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
    if (listener.enterLambda) {
      listener.enterLambda(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLambda) {
      listener.exitLambda(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLambda) {
      return visitor.visitLambda(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
