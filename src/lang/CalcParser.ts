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
  public static readonly T__4 = 5
  public static readonly POW = 6
  public static readonly MUL = 7
  public static readonly DIV = 8
  public static readonly MOD = 9
  public static readonly ADD = 10
  public static readonly SUB = 11
  public static readonly EQUAL = 12
  public static readonly AND = 13
  public static readonly OR = 14
  public static readonly BOOLEAN = 15
  public static readonly GT = 16
  public static readonly LT = 17
  public static readonly GE = 18
  public static readonly LE = 19
  public static readonly NUMBER = 20
  public static readonly WHITESPACE = 21
  public static readonly LETTER = 22
  public static readonly VAL = 23
  public static readonly Stringliteral = 24
  public static readonly RULE_assignmentoperator = 0
  public static readonly RULE_emptydeclaration = 1
  public static readonly RULE_start = 2
  public static readonly RULE_expression = 3
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'assignmentoperator',
    'emptydeclaration',
    'start',
    'expression'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "':='",
    "';'",
    "'('",
    "')'",
    "'let'",
    "'^'",
    "'*'",
    "'/'",
    "'%'",
    "'+'",
    "'-'",
    "'='",
    undefined,
    undefined,
    undefined,
    "'>'",
    "'<'",
    "'>='",
    "'<='",
    undefined,
    undefined,
    undefined,
    "'val'"
  ]
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
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
    'AND',
    'OR',
    'BOOLEAN',
    'GT',
    'LT',
    'GE',
    'LE',
    'NUMBER',
    'WHITESPACE',
    'LETTER',
    'VAL',
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
        this.state = 8
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
        this.state = 10
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
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 12
        this.expression(0)
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
    const _startState: number = 6
    this.enterRecursionRule(_localctx, 6, CalcParser.RULE_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 36
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
          case 1:
            {
              _localctx = new NumberContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 15
              this.match(CalcParser.NUMBER)
            }
            break

          case 2:
            {
              _localctx = new ParenthesesContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 16
              this.match(CalcParser.T__2)
              this.state = 17
              ;(_localctx as ParenthesesContext)._inner = this.expression(0)
              this.state = 18
              this.match(CalcParser.T__3)
              this.state = 19
              this.match(CalcParser.T__1)
            }
            break

          case 3:
            {
              _localctx = new LetAssignmentContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 21
              this.match(CalcParser.T__4)
              this.state = 22
              ;(_localctx as LetAssignmentContext)._left = this.expression(0)
              this.state = 23
              ;(_localctx as LetAssignmentContext)._operator = this.match(CalcParser.EQUAL)
              this.state = 24
              ;(_localctx as LetAssignmentContext)._right = this.expression(0)
              this.state = 25
              this.match(CalcParser.T__1)
            }
            break

          case 4:
            {
              _localctx = new ValAssignmentContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 27
              this.match(CalcParser.VAL)
              this.state = 28
              ;(_localctx as ValAssignmentContext)._left = this.expression(0)
              this.state = 29
              ;(_localctx as ValAssignmentContext)._operator = this.match(CalcParser.EQUAL)
              this.state = 30
              ;(_localctx as ValAssignmentContext)._right = this.expression(0)
              this.state = 31
              this.match(CalcParser.T__1)
            }
            break

          case 5:
            {
              _localctx = new StringContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 33
              this.match(CalcParser.Stringliteral)
            }
            break

          case 6:
            {
              _localctx = new StringContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 34
              this.match(CalcParser.Stringliteral)
            }
            break

          case 7:
            {
              _localctx = new BooleanContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 35
              this.match(CalcParser.BOOLEAN)
            }
            break
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 88
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 86
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                  {
                    _localctx = new GreaterComparatorContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as GreaterComparatorContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 38
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 8)')
                    }
                    this.state = 39
                    ;(_localctx as GreaterComparatorContext)._operator = this.match(CalcParser.GT)
                    this.state = 40
                    ;(_localctx as GreaterComparatorContext)._right = this.expression(9)
                  }
                  break

                case 2:
                  {
                    _localctx = new LesserComparatorContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as LesserComparatorContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 41
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 7)')
                    }
                    this.state = 42
                    ;(_localctx as LesserComparatorContext)._operator = this.match(CalcParser.LT)
                    this.state = 43
                    ;(_localctx as LesserComparatorContext)._right = this.expression(8)
                  }
                  break

                case 3:
                  {
                    _localctx = new GreaterEqualComparatorContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as GreaterEqualComparatorContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 44
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)')
                    }
                    this.state = 45
                    ;(_localctx as GreaterEqualComparatorContext)._operator = this.match(
                      CalcParser.GE
                    )
                    this.state = 46
                    ;(_localctx as GreaterEqualComparatorContext)._right = this.expression(7)
                  }
                  break

                case 4:
                  {
                    _localctx = new LesserEqualComparatorContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as LesserEqualComparatorContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 47
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)')
                    }
                    this.state = 48
                    ;(_localctx as LesserEqualComparatorContext)._operator = this.match(
                      CalcParser.LE
                    )
                    this.state = 49
                    ;(_localctx as LesserEqualComparatorContext)._right = this.expression(6)
                  }
                  break

                case 5:
                  {
                    _localctx = new AndLogicalContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as AndLogicalContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 50
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 51
                    ;(_localctx as AndLogicalContext)._operator = this.match(CalcParser.AND)
                    this.state = 52
                    ;(_localctx as AndLogicalContext)._right = this.expression(5)
                  }
                  break

                case 6:
                  {
                    _localctx = new OrLogicalContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as OrLogicalContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 53
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 54
                    ;(_localctx as OrLogicalContext)._operator = this.match(CalcParser.OR)
                    this.state = 55
                    ;(_localctx as OrLogicalContext)._right = this.expression(4)
                  }
                  break

                case 7:
                  {
                    _localctx = new PowerContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as PowerContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 56
                    if (!this.precpred(this._ctx, 17)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 17)')
                    }
                    this.state = 57
                    ;(_localctx as PowerContext)._operator = this.match(CalcParser.POW)
                    this.state = 58
                    ;(_localctx as PowerContext)._right = this.expression(0)
                    this.state = 59
                    this.match(CalcParser.T__1)
                  }
                  break

                case 8:
                  {
                    _localctx = new MultiplicationContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as MultiplicationContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 61
                    if (!this.precpred(this._ctx, 16)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 16)')
                    }
                    this.state = 62
                    ;(_localctx as MultiplicationContext)._operator = this.match(CalcParser.MUL)
                    this.state = 63
                    ;(_localctx as MultiplicationContext)._right = this.expression(0)
                    this.state = 64
                    this.match(CalcParser.T__1)
                  }
                  break

                case 9:
                  {
                    _localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as DivisionContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 66
                    if (!this.precpred(this._ctx, 15)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 15)')
                    }
                    this.state = 67
                    ;(_localctx as DivisionContext)._operator = this.match(CalcParser.DIV)
                    this.state = 68
                    ;(_localctx as DivisionContext)._right = this.expression(0)
                    this.state = 69
                    this.match(CalcParser.T__1)
                  }
                  break

                case 10:
                  {
                    _localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as AdditionContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 71
                    if (!this.precpred(this._ctx, 14)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 14)')
                    }
                    this.state = 72
                    ;(_localctx as AdditionContext)._operator = this.match(CalcParser.ADD)
                    this.state = 73
                    ;(_localctx as AdditionContext)._right = this.expression(0)
                    this.state = 74
                    this.match(CalcParser.T__1)
                  }
                  break

                case 11:
                  {
                    _localctx = new SubtractionContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as SubtractionContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 76
                    if (!this.precpred(this._ctx, 13)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 13)')
                    }
                    this.state = 77
                    ;(_localctx as SubtractionContext)._operator = this.match(CalcParser.SUB)
                    this.state = 78
                    ;(_localctx as SubtractionContext)._right = this.expression(0)
                    this.state = 79
                    this.match(CalcParser.T__1)
                  }
                  break

                case 12:
                  {
                    _localctx = new ModulusContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as ModulusContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 81
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 12)')
                    }
                    this.state = 82
                    ;(_localctx as ModulusContext)._operator = this.match(CalcParser.MOD)
                    this.state = 83
                    ;(_localctx as ModulusContext)._right = this.expression(0)
                    this.state = 84
                    this.match(CalcParser.T__1)
                  }
                  break
              }
            }
          }
          this.state = 90
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx)
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
      case 3:
        return this.expression_sempred(_localctx as ExpressionContext, predIndex)
    }
    return true
  }
  private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 8)

      case 1:
        return this.precpred(this._ctx, 7)

      case 2:
        return this.precpred(this._ctx, 6)

      case 3:
        return this.precpred(this._ctx, 5)

      case 4:
        return this.precpred(this._ctx, 4)

      case 5:
        return this.precpred(this._ctx, 3)

      case 6:
        return this.precpred(this._ctx, 17)

      case 7:
        return this.precpred(this._ctx, 16)

      case 8:
        return this.precpred(this._ctx, 15)

      case 9:
        return this.precpred(this._ctx, 14)

      case 10:
        return this.precpred(this._ctx, 13)

      case 11:
        return this.precpred(this._ctx, 12)
    }
    return true
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1A^\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x03' +
    '\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05' +
    '\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05' +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05'\n\x05" +
    '\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05' +
    '\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05' +
    '\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05' +
    '\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05' +
    '\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05' +
    '\x03\x05\x03\x05\x03\x05\x07\x05Y\n\x05\f\x05\x0E\x05\\\v\x05\x03\x05' +
    '\x02\x02\x03\b\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x03\x04\x02\x03\x03' +
    '\x0E\x0E\x02k\x02\n\x03\x02\x02\x02\x04\f\x03\x02\x02\x02\x06\x0E\x03' +
    '\x02\x02\x02\b&\x03\x02\x02\x02\n\v\t\x02\x02\x02\v\x03\x03\x02\x02\x02' +
    '\f\r\x07\x04\x02\x02\r\x05\x03\x02\x02\x02\x0E\x0F\x05\b\x05\x02\x0F\x07' +
    "\x03\x02\x02\x02\x10\x11\b\x05\x01\x02\x11'\x07\x16\x02\x02\x12\x13\x07" +
    '\x05\x02\x02\x13\x14\x05\b\x05\x02\x14\x15\x07\x06\x02\x02\x15\x16\x07' +
    "\x04\x02\x02\x16'\x03\x02\x02\x02\x17\x18\x07\x07\x02\x02\x18\x19\x05" +
    '\b\x05\x02\x19\x1A\x07\x0E\x02\x02\x1A\x1B\x05\b\x05\x02\x1B\x1C\x07\x04' +
    "\x02\x02\x1C'\x03\x02\x02\x02\x1D\x1E\x07\x19\x02\x02\x1E\x1F\x05\b\x05" +
    '\x02\x1F \x07\x0E\x02\x02 !\x05\b\x05\x02!"\x07\x04\x02\x02"\'\x03\x02' +
    "\x02\x02#'\x07\x1A\x02\x02$'\x07\x1A\x02\x02%'\x07\x11\x02\x02&\x10" +
    '\x03\x02\x02\x02&\x12\x03\x02\x02\x02&\x17\x03\x02\x02\x02&\x1D\x03\x02' +
    "\x02\x02&#\x03\x02\x02\x02&$\x03\x02\x02\x02&%\x03\x02\x02\x02'Z\x03" +
    '\x02\x02\x02()\f\n\x02\x02)*\x07\x12\x02\x02*Y\x05\b\x05\v+,\f\t\x02\x02' +
    ',-\x07\x13\x02\x02-Y\x05\b\x05\n./\f\b\x02\x02/0\x07\x14\x02\x020Y\x05' +
    '\b\x05\t12\f\x07\x02\x0223\x07\x15\x02\x023Y\x05\b\x05\b45\f\x06\x02\x02' +
    '56\x07\x0F\x02\x026Y\x05\b\x05\x0778\f\x05\x02\x0289\x07\x10\x02\x029' +
    'Y\x05\b\x05\x06:;\f\x13\x02\x02;<\x07\b\x02\x02<=\x05\b\x05\x02=>\x07' +
    '\x04\x02\x02>Y\x03\x02\x02\x02?@\f\x12\x02\x02@A\x07\t\x02\x02AB\x05\b' +
    '\x05\x02BC\x07\x04\x02\x02CY\x03\x02\x02\x02DE\f\x11\x02\x02EF\x07\n\x02' +
    '\x02FG\x05\b\x05\x02GH\x07\x04\x02\x02HY\x03\x02\x02\x02IJ\f\x10\x02\x02' +
    'JK\x07\f\x02\x02KL\x05\b\x05\x02LM\x07\x04\x02\x02MY\x03\x02\x02\x02N' +
    'O\f\x0F\x02\x02OP\x07\r\x02\x02PQ\x05\b\x05\x02QR\x07\x04\x02\x02RY\x03' +
    '\x02\x02\x02ST\f\x0E\x02\x02TU\x07\v\x02\x02UV\x05\b\x05\x02VW\x07\x04' +
    '\x02\x02WY\x03\x02\x02\x02X(\x03\x02\x02\x02X+\x03\x02\x02\x02X.\x03\x02' +
    '\x02\x02X1\x03\x02\x02\x02X4\x03\x02\x02\x02X7\x03\x02\x02\x02X:\x03\x02' +
    '\x02\x02X?\x03\x02\x02\x02XD\x03\x02\x02\x02XI\x03\x02\x02\x02XN\x03\x02' +
    '\x02\x02XS\x03\x02\x02\x02Y\\\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03' +
    '\x02\x02\x02[\t\x03\x02\x02\x02\\Z\x03\x02\x02\x02\x05&XZ'
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
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
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
export class NumberContext extends ExpressionContext {
  public NUMBER(): TerminalNode {
    return this.getToken(CalcParser.NUMBER, 0)
  }
  constructor(ctx: ExpressionContext) {
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
export class ParenthesesContext extends ExpressionContext {
  public _inner!: ExpressionContext
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
export class LetAssignmentContext extends ExpressionContext {
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
    if (listener.enterLetAssignment) {
      listener.enterLetAssignment(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLetAssignment) {
      listener.exitLetAssignment(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLetAssignment) {
      return visitor.visitLetAssignment(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ValAssignmentContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public VAL(): TerminalNode {
    return this.getToken(CalcParser.VAL, 0)
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
  public EQUAL(): TerminalNode {
    return this.getToken(CalcParser.EQUAL, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterValAssignment) {
      listener.enterValAssignment(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitValAssignment) {
      listener.exitValAssignment(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitValAssignment) {
      return visitor.visitValAssignment(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StringContext extends ExpressionContext {
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
export class BooleanContext extends ExpressionContext {
  public BOOLEAN(): TerminalNode {
    return this.getToken(CalcParser.BOOLEAN, 0)
  }
  constructor(ctx: ExpressionContext) {
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
