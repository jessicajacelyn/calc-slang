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
  public static readonly POW = 3
  public static readonly MUL = 4
  public static readonly DIV = 5
  public static readonly MOD = 6
  public static readonly ADD = 7
  public static readonly SUB = 8
  public static readonly NUMBER = 9
  public static readonly WHITESPACE = 10
  public static readonly LETTER = 11
  public static readonly Stringliteral = 12
  public static readonly GT = 13
  public static readonly LT = 14
  public static readonly GE = 15
  public static readonly LE = 16
  public static readonly RULE_start = 0
  public static readonly RULE_expression = 1
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = ['start', 'expression']

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'('",
    "')'",
    "'^'",
    "'*'",
    "'/'",
    "'%'",
    "'+'",
    "'-'",
    undefined,
    undefined,
    undefined,
    undefined,
    "'>'",
    "'<'",
    "'>='",
    "'<='"
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
    'NUMBER',
    'WHITESPACE',
    'LETTER',
    'Stringliteral',
    'GT',
    'LT',
    'GE',
    'LE'
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
  public start(): StartContext {
    const _localctx: StartContext = new StartContext(this._ctx, this.state)
    this.enterRule(_localctx, 0, CalcParser.RULE_start)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 4
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
    const _startState: number = 2
    this.enterRecursionRule(_localctx, 2, CalcParser.RULE_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 13
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case CalcParser.NUMBER:
            {
              _localctx = new NumberContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 7
              this.match(CalcParser.NUMBER)
            }
            break
          case CalcParser.T__0:
            {
              _localctx = new ParenthesesContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 8
              this.match(CalcParser.T__0)
              this.state = 9
              ;(_localctx as ParenthesesContext)._inner = this.expression(0)
              this.state = 10
              this.match(CalcParser.T__1)
            }
            break
          case CalcParser.Stringliteral:
            {
              _localctx = new StringContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 12
              this.match(CalcParser.Stringliteral)
            }
            break
          default:
            throw new NoViableAltException(this)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 50
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 48
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                  {
                    _localctx = new PowerContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as PowerContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 15
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 12)')
                    }
                    this.state = 16
                    ;(_localctx as PowerContext)._operator = this.match(CalcParser.POW)
                    this.state = 17
                    ;(_localctx as PowerContext)._right = this.expression(13)
                  }
                  break

                case 2:
                  {
                    _localctx = new MultiplicationContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as MultiplicationContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 18
                    if (!this.precpred(this._ctx, 11)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 11)')
                    }
                    this.state = 19
                    ;(_localctx as MultiplicationContext)._operator = this.match(CalcParser.MUL)
                    this.state = 20
                    ;(_localctx as MultiplicationContext)._right = this.expression(12)
                  }
                  break

                case 3:
                  {
                    _localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as DivisionContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 21
                    if (!this.precpred(this._ctx, 10)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 10)')
                    }
                    this.state = 22
                    ;(_localctx as DivisionContext)._operator = this.match(CalcParser.DIV)
                    this.state = 23
                    ;(_localctx as DivisionContext)._right = this.expression(11)
                  }
                  break

                case 4:
                  {
                    _localctx = new ModulusContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as ModulusContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 24
                    if (!this.precpred(this._ctx, 9)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 9)')
                    }
                    this.state = 25
                    ;(_localctx as ModulusContext)._operator = this.match(CalcParser.MOD)
                    this.state = 26
                    ;(_localctx as ModulusContext)._right = this.expression(10)
                  }
                  break

                case 5:
                  {
                    _localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as AdditionContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 27
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 8)')
                    }
                    this.state = 28
                    ;(_localctx as AdditionContext)._operator = this.match(CalcParser.ADD)
                    this.state = 29
                    ;(_localctx as AdditionContext)._right = this.expression(9)
                  }
                  break

                case 6:
                  {
                    _localctx = new SubtractionContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as SubtractionContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 30
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 7)')
                    }
                    this.state = 31
                    ;(_localctx as SubtractionContext)._operator = this.match(CalcParser.SUB)
                    this.state = 32
                    ;(_localctx as SubtractionContext)._right = this.expression(8)
                  }
                  break

                case 7:
                  {
                    _localctx = new ModulusContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as ModulusContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 33
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)')
                    }
                    this.state = 34
                    ;(_localctx as ModulusContext)._operator = this.match(CalcParser.MOD)
                    this.state = 35
                    ;(_localctx as ModulusContext)._right = this.expression(7)
                  }
                  break

                case 8:
                  {
                    _localctx = new GreaterComparatorContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as GreaterComparatorContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 36
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)')
                    }
                    this.state = 37
                    ;(_localctx as GreaterComparatorContext)._op = this.match(CalcParser.GT)
                    this.state = 38
                    ;(_localctx as GreaterComparatorContext)._right = this.expression(6)
                  }
                  break

                case 9:
                  {
                    _localctx = new LesserComparatorContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as LesserComparatorContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 39
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 40
                    ;(_localctx as LesserComparatorContext)._op = this.match(CalcParser.LT)
                    this.state = 41
                    ;(_localctx as LesserComparatorContext)._right = this.expression(5)
                  }
                  break

                case 10:
                  {
                    _localctx = new GreaterEqualComparatorContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as GreaterEqualComparatorContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 42
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 43
                    ;(_localctx as GreaterEqualComparatorContext)._op = this.match(CalcParser.GE)
                    this.state = 44
                    ;(_localctx as GreaterEqualComparatorContext)._right = this.expression(4)
                  }
                  break

                case 11:
                  {
                    _localctx = new LesserEqualComparatorContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as LesserEqualComparatorContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 45
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 46
                    ;(_localctx as LesserEqualComparatorContext)._op = this.match(CalcParser.LE)
                    this.state = 47
                    ;(_localctx as LesserEqualComparatorContext)._right = this.expression(3)
                  }
                  break
              }
            }
          }
          this.state = 52
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
      case 1:
        return this.expression_sempred(_localctx as ExpressionContext, predIndex)
    }
    return true
  }
  private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 12)

      case 1:
        return this.precpred(this._ctx, 11)

      case 2:
        return this.precpred(this._ctx, 10)

      case 3:
        return this.precpred(this._ctx, 9)

      case 4:
        return this.precpred(this._ctx, 8)

      case 5:
        return this.precpred(this._ctx, 7)

      case 6:
        return this.precpred(this._ctx, 6)

      case 7:
        return this.precpred(this._ctx, 5)

      case 8:
        return this.precpred(this._ctx, 4)

      case 9:
        return this.precpred(this._ctx, 3)

      case 10:
        return this.precpred(this._ctx, 2)
    }
    return true
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x128\x04\x02' +
    '\t\x02\x04\x03\t\x03\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03' +
    '\x03\x03\x03\x03\x03\x05\x03\x10\n\x03\x03\x03\x03\x03\x03\x03\x03\x03' +
    '\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03' +
    '\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03' +
    '\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03' +
    '\x03\x03\x03\x03\x07\x033\n\x03\f\x03\x0E\x036\v\x03\x03\x03\x02\x02\x03' +
    '\x04\x04\x02\x02\x04\x02\x02\x02\x02B\x02\x06\x03\x02\x02\x02\x04\x0F' +
    '\x03\x02\x02\x02\x06\x07\x05\x04\x03\x02\x07\x03\x03\x02\x02\x02\b\t\b' +
    '\x03\x01\x02\t\x10\x07\v\x02\x02\n\v\x07\x03\x02\x02\v\f\x05\x04\x03\x02' +
    '\f\r\x07\x04\x02\x02\r\x10\x03\x02\x02\x02\x0E\x10\x07\x0E\x02\x02\x0F' +
    '\b\x03\x02\x02\x02\x0F\n\x03\x02\x02\x02\x0F\x0E\x03\x02\x02\x02\x104' +
    '\x03\x02\x02\x02\x11\x12\f\x0E\x02\x02\x12\x13\x07\x05\x02\x02\x133\x05' +
    '\x04\x03\x0F\x14\x15\f\r\x02\x02\x15\x16\x07\x06\x02\x02\x163\x05\x04' +
    '\x03\x0E\x17\x18\f\f\x02\x02\x18\x19\x07\x07\x02\x02\x193\x05\x04\x03' +
    '\r\x1A\x1B\f\v\x02\x02\x1B\x1C\x07\b\x02\x02\x1C3\x05\x04\x03\f\x1D\x1E' +
    '\f\n\x02\x02\x1E\x1F\x07\t\x02\x02\x1F3\x05\x04\x03\v !\f\t\x02\x02!"' +
    '\x07\n\x02\x02"3\x05\x04\x03\n#$\f\b\x02\x02$%\x07\b\x02\x02%3\x05\x04' +
    "\x03\t&'\f\x07\x02\x02'(\x07\x0F\x02\x02(3\x05\x04\x03\b)*\f\x06\x02" +
    '\x02*+\x07\x10\x02\x02+3\x05\x04\x03\x07,-\f\x05\x02\x02-.\x07\x11\x02' +
    '\x02.3\x05\x04\x03\x06/0\f\x04\x02\x0201\x07\x12\x02\x0213\x05\x04\x03' +
    '\x052\x11\x03\x02\x02\x022\x14\x03\x02\x02\x022\x17\x03\x02\x02\x022\x1A' +
    '\x03\x02\x02\x022\x1D\x03\x02\x02\x022 \x03\x02\x02\x022#\x03\x02\x02' +
    '\x022&\x03\x02\x02\x022)\x03\x02\x02\x022,\x03\x02\x02\x022/\x03\x02\x02' +
    '\x0236\x03\x02\x02\x0242\x03\x02\x02\x0245\x03\x02\x02\x025\x05\x03\x02' +
    '\x02\x0264\x03\x02\x02\x02\x05\x0F24'
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
export class GreaterComparatorContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _op!: Token
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
  public _op!: Token
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
  public _op!: Token
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
  public _op!: Token
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
