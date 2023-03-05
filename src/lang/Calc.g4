grammar Calc;

/*
 * Tokens (terminal)
 */
POW: '^';
MUL: '*';
DIV: '/';
MOD: '%';
ADD: '+';
SUB: '-';

NUMBER: [0-9]+;
WHITESPACE: [ \r\n\t]+ -> skip;
LETTER: [a-zA-Z];

Stringliteral
:
	Encodingprefix? '"' Schar* '"'
	| Encodingprefix? 'R' Rawstring
;

fragment
Encodingprefix
:
	'u8'
	| 'u'
	| 'U'
	| 'L'
;

fragment
Schar
:
	[a-zA-Z_]
;


fragment
Rawstring /* '"' dcharsequence? '(' rcharsequence? ')' dcharsequence? '"' */
:
	'"' .*? '(' .*? ')' .*? '"'
;

// literal
// :
// 	Stringliteral # String
// ;

GT: '>';
LT: '<';
GE: '>=';
LE: '<=';

/*
 * Productions
 */
start : expression;

expression
   : NUMBER                                         # Number
   | '(' inner=expression ')'                       # Parentheses
   | left=expression operator=POW right=expression  # Power
   | left=expression operator=MUL right=expression  # Multiplication
   | left=expression operator=DIV right=expression  # Division
   | left=expression operator=MOD right=expression  # Modulus
   | left=expression operator=ADD right=expression  # Addition
   | left=expression operator=SUB right=expression  # Subtraction
   | left=expression operator=MOD right=expression  # Modulus
   | left=expression op=GT right=expression         #GreaterComparator
   | left=expression op=LT right=expression         #LesserComparator
   | left=expression op=GE right=expression         #GreaterEqualComparator
   | left=expression op=LE right=expression         #LesserEqualComparator
   | Stringliteral                                  # String 
   ;

  
  