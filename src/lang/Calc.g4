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
ARROW: '=>';
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
IN: 'in';
END: 'end';
VAL: 'val';
LOCAL: 'local';
FUN: 'fun';
FN: 'fn';
OPAR: '(';
CPAR: ')';
OBRACE: '{';
CBRACE: '}';
OSQUARE: '[';
CSQUARE: ']';
DOUBLEQUOTE: '"';
ASSIGNMEMT: ':=';
APPEND: '@';
CONS: '::';
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
Stringliteral: [a-zA-Z] [a-zA-Z0-9]+;

/*
 * Productions
 */
start: statement*;

statement:
	ifThenElseStatement
	| whileStatement
	| variableDeclaration
	| localDeclaration
	| letDeclaration
	| expressionStatement;

ifThenElseStatement:
	IF OPAR test = expression CPAR THEN consequent = statement ELSE alternate = statement #
		IfThenElseCondition;

whileStatement:
	WHILE test = expression DO body = statement # WhileCondition;

variableDeclaration:
	VAL left = Stringliteral operator = EQUAL right = expression;

localDeclaration:
	LOCAL del = declarationlist IN delist = declarationlist END;

letDeclaration:
	LET del = declarationType IN delist = declarationlist END;

declarationType:
	variableDeclaration 
	| localDeclaration
	| letDeclaration;

declarationlist: declarationType*;

identifier:
	Stringliteral	# ID
	| NUMBER		# Number
	| REAL			# Real
	| BOOLEAN		# Boolean;

elements : expression (',' expression)*;

listStructure: 
	OSQUARE element = elements? CSQUARE;

listInput:
	listStructure
	| Stringliteral;

expressionStatement: expression ';';

expression:
	identifier												# Identifiers
	| '"' Stringliteral '"'									# String
	| OPAR inner = expression CPAR							# Parentheses
	| OPAR expression (',' expression)* CPAR				# Tuple	
	| name = identifier params = identifier                 # FunctionCall
	| left = expression operator = POW right = expression	# Power
	| left = expression operator = MUL right = expression	# Multiplication
	| left = expression operator = DIV right = expression	# Division
	| left = expression operator = ADD right = expression	# Addition
	| left = expression operator = SUB right = expression	# Subtraction
	| left = expression operator = MOD right = expression	# Modulus
	| left = expression operator = EQUAL right = expression	# EqualComparator
	| left = expression operator = GT right = expression	# GreaterComparator
	| left = expression operator = LT right = expression	# LesserComparator
	| left = expression operator = GE right = expression	# GreaterEqualComparator
	| left = expression operator = LE right = expression	# LesserEqualComparator
	| left = expression operator = AND right = expression	# AndLogical
	| left = expression operator = OR right = expression	# OrLogical
	| NOT left = expression									# NotLogical
	| left = listStructure											# List
	| left = expression  operator = APPEND right = expression 		# ListAppend
	| left = expression operator = CONS right = expression			# ListCons
	| left = Stringliteral operator = ASSIGNMEMT right = expression	# Assignment
	| FN name = Stringliteral operator = ARROW right = expression 	# Lambda;
