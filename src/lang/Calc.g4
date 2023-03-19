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
BOOLEAN: 'true' | 'false';
GT: '>';
LT: '<';
GE: '>=';
LE: '<=';
NUMBER: [0-9]+;
WHITESPACE: [ \r\n\t]+ -> skip;
LETTER: [a-zA-Z];
VAL: 'val';

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
WHILE : 'while';


/*
 * Productions
 */
start: expression;

expression:
	NUMBER																                        # Number
	| '(' inner = expression ')' ';'									            # Parentheses
	| left = expression operator = POW right = expression ';'			# Power
	| left = expression operator = MUL right = expression ';'			# Multiplication
	| left = expression operator = DIV right = expression ';'			# Division
	| left = expression operator = ADD right = expression ';'			# Addition
	| left = expression operator = SUB right = expression ';'			# Subtraction
	| left = expression operator = MOD right = expression ';'			# Modulus
	| 'let' left = expression operator = EQUAL right = expression ';'	# LetAssignment
	| 'val' left = expression operator = EQUAL right = expression ';'	# ValAssignment
  | IF test = expression THEN consequent = expression ELSE alternate = expression ';' #IfThenElseCondition
	| left = expression operator = GT right = expression				# GreaterComparator
	| left = expression operator = LT right = expression				# LesserComparator
	| left = expression operator = GE right = expression				# GreaterEqualComparator
	| left = expression operator = LE right = expression				# LesserEqualComparator
	| left = expression operator = AND right = expression				# AndLogical
	| left = expression operator = OR right = expression				# OrLogical
	| Stringliteral														                  # String
	| BOOLEAN															                      # Boolean;
