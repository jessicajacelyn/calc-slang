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

NUMBER: [0-9]+;
WHITESPACE: [ \r\n\t]+ -> skip;
LETTER: [a-zA-Z];

Stringliteral: [a-zA-Z0-9];

fragment Encodingprefix: 'u8' | 'u' | 'U' | 'L';

fragment Rawstring /* '"' dcharsequence? '(' rcharsequence? ')' dcharsequence? '"' */:
	'"' .*? '(' .*? ')' .*? '"';

assignmentoperator: '=' | ':=';

emptydeclaration: ';';

// literal : Stringliteral # String ;

/*
 * Productions
 */
start: expression;

expression:
	NUMBER																# Number
	| '(' inner = expression ')' ';'									# Parentheses
	| left = expression operator = POW right = expression ';'			# Power
	| left = expression operator = MUL right = expression ';'			# Multiplication
	| left = expression operator = DIV right = expression ';'			# Division
	| left = expression operator = ADD right = expression ';'			# Addition
	| left = expression operator = SUB right = expression ';'			# Subtraction
	| left = expression operator = MOD right = expression ';'			# Modulus
	| 'let' left = expression operator = EQUAL right = expression ';'	# LetAssignment
	| 'val' left = expression operator = EQUAL right = expression ';'	# ValAssignment
	| Stringliteral														# String;
