// Q1. Write a program that takes a command-line argument n and prints a
// table of the powers of 2 that are less than or equal to 2^n till 256 is
// reached..

const n = parseInt(process.argv[2]);
let power = 1;
let i = 0;
while (power <= Math.pow(2, n) && power <= 256) {
  console.log(power);
  power *= 2;
  i++;
}

