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
LET: 'let';
VAL: 'val';
LOCAL: 'local val';
OPAR : '(';
CPAR : ')';
OBRACE : '{';
CBRACE : '}';
DOUBLEQUOTE: '"' ;

Stringliteral: [a-zA-Z0-9];

assignmentoperator: '=' | ':=';

emptydeclaration: ';';

IF : 'if';
THEN: 'then';
ELSE : 'else';
WHILE: 'while';
DO: 'do';

CHAR: 'char';
STRING: 'string';
INT: 'int';
BOOL: 'bool';
REALNUM: 'real';



/*
 * Productions
 */
start: (statement| function)*;

statement:
	expressionStatement
	| ifThenElseStatement
	| whileStatement
	| declaration
	| block;

ifThenElseStatement:
	IF test = expression THEN consequent = statement ELSE alternate = statement #IfThenElseCondition;

whileStatement:
	WHILE test = expression DO body = statement #WhileCondition; 

type: 
	CHAR
	| STRING
	| INT
	| BOOL
	| REALNUM;

declaration:
	t = type id = Stringliteral;

block: 
	OBRACE stmts = statement* CBRACE ;

print:
	OPAR DOUBLEQUOTE expr = Stringliteral DOUBLEQUOTE CPAR;

parameters:
	declaration (',' declaration)* ;

function: 
	t=type id=Stringliteral OPAR params = parameters CPAR body = block ; 


expressionStatement: expression ';' ;

expression:
	NUMBER																                        # Number
	| REAL																# Real
	| OPAR inner = expression CPAR 									 	# Parentheses
	| left = expression operator = POW right = expression 				# Power
	| left = expression operator = MUL right = expression 				# Multiplication
	| left = expression operator = DIV right = expression 				# Division
	| left = expression operator = ADD right = expression 				# Addition
	| left = expression operator = SUB right = expression 				# Subtraction
	| left = expression operator = MOD right = expression 				# Modulus
	| LET left = expression operator = EQUAL right = expression 		# LetAssignment
	| VAL left = expression operator = EQUAL right = expression 		# ValAssignment
	| LOCAL left = expression operator = EQUAL right = expression    	# LocalValAssignment
	| left = expression operator = EQUAL right = expression             # EqualComparator
	| left = expression operator = GT right = expression				# GreaterComparator
	| left = expression operator = LT right = expression				# LesserComparator
	| left = expression operator = GE right = expression				# GreaterEqualComparator
	| left = expression operator = LE right = expression				# LesserEqualComparator
	| left = expression operator = AND right = expression				# AndLogical
	| left = expression operator = OR right = expression				# OrLogical
	| NOT left = expression                   							# NotLogical
	| Stringliteral														# String
	| BOOLEAN															# Boolean;
