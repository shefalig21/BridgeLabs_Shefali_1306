//Q4. Extend the program to take a range of number as input and output the Prime Numbers in that range.

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
  
  const start = parseInt(prompt("Enter start of  range:"));
  const end = parseInt(prompt("Enter end of range:"));
  
  for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
      console.log(num);
    }
  }