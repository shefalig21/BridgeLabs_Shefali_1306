//Q3. Write a program that takes a input and determines if the number is a prime.

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const number = parseInt(prompt("Enter a number:"));
  
  if (isPrime(number)) {
    console.log("Is prime no");
  } else {
    console.log("not a prime number");
  }