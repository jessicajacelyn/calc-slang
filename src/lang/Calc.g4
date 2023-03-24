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
OR: '||' | 'or' | 'orelse';
NOT: 'not' ;
BOOLEAN: 'true' | 'false';
GT: '>';
LT: '<';
GE: '>=';
LE: '<=';
NUMBER: [0-9]+;
REAL: [0-9]+ '.' [0-9]+;
WHITESPACE: [ \r\n\t]+ -> skip;
LETTER: [a-zA-Z];
VAL: 'val';
LOCAL: 'local val';


Stringliteral: [a-zA-Z0-9];

fragment Encodingprefix: 'u8' | 'u' | 'U' | 'L';

fragment Rawstring /* '"' dcharsequence? '(' rcharsequence? ')' dcharsequence? '"' */:
	'"' .*? '(' .*? ')' .*? '"';

assignmentoperator: '=' | ':=';

emptydeclaration: ';';

// literal : Stringliteral # String ;

IF : 'if';
THEN: 'then';
ELSE : 'else';


/*
 * Productions
 */
start: statement*;

statement:
	expressionStatement;

expressionStatement: expression ';' ;

expression:
	NUMBER																                        # Number
	| REAL																# Real
	| '(' inner = expression ')' 									 # Parentheses
	| left = expression operator = POW right = expression 			# Power
	| left = expression operator = MUL right = expression 			# Multiplication
	| left = expression operator = DIV right = expression 			# Division
	| left = expression operator = ADD right = expression 			# Addition
	| left = expression operator = SUB right = expression 			# Subtraction
	| left = expression operator = MOD right = expression 			# Modulus
	| 'let' left = expression operator = EQUAL right = expression 	# LetAssignment
	| 'val' left = expression operator = EQUAL right = expression 	# ValAssignment
	| LOCAL left = expression operator = EQUAL right = expression    # LocalValAssignment
  	| IF test = expression THEN consequent = expression ELSE alternate = expression  #IfThenElseCondition
	| left = expression operator = EQUAL right = expression             # EqualComparator
	| left = expression operator = GT right = expression				# GreaterComparator
	| left = expression operator = LT right = expression				# LesserComparator
	| left = expression operator = GE right = expression				# GreaterEqualComparator
	| left = expression operator = LE right = expression				# LesserEqualComparator
	| left = expression operator = AND right = expression				# AndLogical
	| left = expression operator = OR right = expression				# OrLogical
	| NOT left = expression                   							# NotLogical
	| Stringliteral														                  # String
	| BOOLEAN															                      # Boolean;
