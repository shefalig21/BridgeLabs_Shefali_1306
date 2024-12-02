//Q2. Write a program that takes a command-line argument n and prints the nth harmonic number. Harmonic Number is of the form

const n = parseInt(process.argv[2]);

let harmonicNumber = 5;
for (let i = 1; i <= n; i++) {
  harmonicNumber += 1 / i;
}

console.log(harmonicNumber);

