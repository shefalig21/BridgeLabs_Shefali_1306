// Q6. Write a program to compute Factors of a number N using prime factorization method.
// Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
// O/P -> Print the prime factors of number N.

function primeFactors(n) {
    if (n <= 1) {
      return;
    }
  
    for (let i = 2; i * i <= n; i++) {
      while (n % i === 0) {
        console.log(i);
        n /= i;
      }
    }
  
    if (n > 1) {
      console.log(n);
    }
  }
  
  const number = parseInt(prompt("Enter number"));
  primeFactors(number);