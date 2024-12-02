//Q1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value.

let min = 999;
let max = 0;

for (let i =0; i < 5;i++) {
  let randomNumber = Math.floor(Math.random() * 900) + 100;
  console.log("Random three-digit numbers:", randomNumber);

  if (randomNumber < min) {
    min=randomNumber;
  }

  if (randomNumber > max) {
    max=randomNumber;
  }
}

console.log("Minimum value:", min);
console.log("Maximum value:", max);

/*
or

using rest spread operator

const num1 = Math.floor(Math.random() * 900) + 100;
const num2 = Math.floor(Math.random() * 900) + 100;
const num3 = Math.floor(Math.random() * 900) + 100;
const num4 = Math.floor(Math.random() * 900) + 100;
const num5 = Math.floor(Math.random() * 900) + 100;

const numbers = [num1, num2, num3, num4, num5];
const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log(min);
console.log(max);

*/

