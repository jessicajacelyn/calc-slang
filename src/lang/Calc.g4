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
EQUAL: '=';
AND: '&&' | 'and' | 'andalso';
OR:'||' | 'or' | 'orelse';
BOOLEAN: 'true' | 'false';
GT: '>';
LT: '<';
GE: '>=';
LE: '<=';
NUMBER: [0-9]+;
WHITESPACE: [ \r\n\t]+ -> skip;
LETTER: [a-zA-Z];
VAL: 'val';

Stringliteral
:
  [a-zA-Z0-9]+

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
Rawstring /* '"' dcharsequence? '(' rcharsequence? ')' dcharsequence? '"' */
:
	'"' .*? '(' .*? ')' .*? '"'
;

assignmentoperator
:
	'='
	| ':='
;

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
   | left=expression operator=GT right=expression   # GreaterComparator
   | left=expression operator=LT right=expression   # LesserComparator
   | left=expression operator=GE right=expression   # GreaterEqualComparator
   | left=expression operator=LE right=expression   # LesserEqualComparator
   | left=expression operator=AND right=expression  # AndLogical
   | left=expression operator=OR right=expression   # OrLogical
   | BOOLEAN                                        # Boolean
   | Stringliteral                                  # String 
   | left=expression operator=EQUAL right=expression # Assignment
   ;

  
  