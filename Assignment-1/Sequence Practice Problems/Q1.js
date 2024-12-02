/*
Q1. Use REPL – Random Function Math.floor(Math.random() * 10); to get Single
Digit. 

Math.random(): is used to generate a floating point number between 0 and 1.
0: inclusive and 1: exclusive

Return a random number between 0 (inclusive) and 100 (exclusive):
Math.random()*100;

To return a whole number, we use:
Math.floor(Math.random())

example:
let x = Math.floor((Math.random() * 10));
geneartes a random no from 1(inclusive) to 10(exclusive).

let x = Math.floor((Math.random() * 10) + 1);
geneartes a random no from 1 to 10(both inclusive)

*/

let singleDigitNumber=Math.floor(Math.random()*10);
console.log(singleDigitNumber);


