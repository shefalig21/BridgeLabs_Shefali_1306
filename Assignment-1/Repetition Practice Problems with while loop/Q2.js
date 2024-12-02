// Q2. Find the Magic Number
// a. Ask the user to think of a number n between 1 to 100
// b. Then check with the user if the number is less then n/2 or greater
// c. Repeat till the Magic Number is reached..

function findMagicNumber() {
    let low = 1;
    let high = 100;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const guess = prompt("Is your number less than or equal to mid (yes/no)");
  
      if (guess.toLowerCase() === 'yes') {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  
    console.log(low);
  }
  
  findMagicNumber();