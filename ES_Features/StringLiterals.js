/*
String Literals:
Are a way to define and reprsent textual data.
thet are created by enclosing characters with quotes.javscript supports various types of string literals: single quotes,
double quotes and template literals.

*/

//Different ways of String literals;
//1. Single-quoted string literal: Enclosed in single quotes('')

const str='Heyyy';
const withEscape='It\'s a great day';  //Using \ to escale the single quotes
console.log(str);
console.log(withEscape);

//2. Double=quoted string literals: enclosed in double quotes.

const str1="Hola";
const withEscape1="Today is \"new\"";   //using \ to escape double quotes.
console.log(str1);
console.log(withEscape1);

//3. Template Literals:
//Introduced in Es6,enclosed by backticks(`).Supports multi-line strings.

const multiLine=`this is a
multi-line string`;
console.log(multiLine);

/*
Template Literals:
Feature introduced in Es6.They allow you to work with strings in a more
dynamic and readable way compared to traditional string literals.
template literals are enclosed by backtick(`)
and provide powerful features like;

1. String Interpolation
(embedding variables and expressions)
2. Multi-line string
(without using escape charcaters like \n)

*/

//example:
//1. String Interpolation:
//Allow embedding variables and expressions directly into strings using the ${} Symbol.

const name="shefali";
const age=21;
const message=`My name is ${name},and I am ${age} years old`;
console.log(message);

//2. Multi-line Strings:
//Enables creating multi-line strings without needing escape characters like \n.

const example=`This is a
multi-line 
string`;
console.log(example);
