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
NOT: 'not';
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
IN: 'inn';
END: 'end';
VAL: 'val';
LOCAL: 'local';
OPAR: '(';
CPAR: ')';
OBRACE: '{';
CBRACE: '}';
DOUBLEQUOTE: '"';
ASSIGNMEMT: ':=';
emptydeclaration: ';';
IF: 'if';
THEN: 'then';
ELSE: 'else';
WHILE: 'while';
DO: 'do';
CHAR: 'char';
STRING: 'string';
INT: 'int';
BOOL: 'bool';
REALNUM: 'real';
Stringliteral: [a-zA-Z] [a-zA-Z0-9]*;

/*
 * Productions
 */
start: (statement | function)*;

statement:
	ifThenElseStatement
	| whileStatement
	| variableDeclaration
	| localDeclaration
	| letDeclaration
	| declaration
	| expressionStatement
	| block;

ifThenElseStatement:
	IF OPAR test = expression CPAR THEN consequent = statement ELSE alternate = statement #
		IfThenElseCondition;

whileStatement:
	WHILE test = expression DO body = statement # WhileCondition;

type: CHAR | STRING | INT | BOOL | REALNUM;

declaration: t = type id = Stringliteral;

variableDeclaration:
	VAL left = Stringliteral operator = EQUAL right = expression;

localDeclaration:
	LOCAL del = declarationlist 'inn' delist = declarationlist END;

letDeclaration:
	LET del = declarationType IN delist = declarationlist END;

declarationType: variableDeclaration | localDeclaration;

declarationlist: declarationType*;

block: OBRACE stmts = statement* CBRACE;

print: OPAR DOUBLEQUOTE expr = Stringliteral DOUBLEQUOTE CPAR;

parameters: declaration (',' declaration)*;

function:
	t = type id = Stringliteral OPAR params = parameters CPAR body = block;

identifier:
	Stringliteral	# String
	| NUMBER		# Number
	| REAL			# Real
	| BOOLEAN		# Boolean;

expressionStatement: expression ';';

expression:
	identifier														# Identifiers
	| OPAR inner = expression CPAR									# Parentheses
	| left = expression operator = POW right = expression			# Power
	| left = expression operator = MUL right = expression			# Multiplication
	| left = expression operator = DIV right = expression			# Division
	| left = expression operator = ADD right = expression			# Addition
	| left = expression operator = SUB right = expression			# Subtraction
	| left = expression operator = MOD right = expression			# Modulus
	| left = expression operator = EQUAL right = expression			# EqualComparator
	| left = expression operator = GT right = expression			# GreaterComparator
	| left = expression operator = LT right = expression			# LesserComparator
	| left = expression operator = GE right = expression			# GreaterEqualComparator
	| left = expression operator = LE right = expression			# LesserEqualComparator
	| left = expression operator = AND right = expression			# AndLogical
	| left = expression operator = OR right = expression			# OrLogical
	| NOT left = expression											# NotLogical
	| left = Stringliteral operator = ASSIGNMEMT right = expression	# Assignment;
