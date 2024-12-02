// Q5. Write a program that computes a factorial of a number taken as input.
// 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

const number = parseInt(prompt("Enter number:"));

if (number < 0) {
  console.log("Not valid");
} else {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log(factorial);
}