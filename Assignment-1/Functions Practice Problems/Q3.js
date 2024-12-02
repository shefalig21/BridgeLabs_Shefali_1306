// Q3. Take a number from user and check if the number is a Prime then show
// that its palindrome is also prime
// a. Write function check if number is Prime
// b. Write function to get the Palindrome.
// c. Check if the Palindrome number is also prime

// Function to check if number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true;
}
// Function to get the palindrome of no
function getPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split("").reverse().join("");
    return parseInt(reversedStr, 10); // Convert reversed string back to number
}

// Main function to check conditions
function checkPrimeAndPalindrome() {
    const userInput = prompt("Enter a number:");
    const num = parseInt(userInput, 10);

    if (isNaN(num)) {
        console.log("Please enter valid number");
        return;
    }
    if (isPrime(num)) {
        console.log(`${num} is a prime number.`);
        const palindrome = getPalindrome(num);
        console.log(`The palindrome of ${num} is ${palindrome}.`);

        if (isPrime(palindrome)) {
            console.log(`The palindrome ${palindrome} is also a prime number.`);
        } else {
            console.log(`The palindrome ${palindrome} is not a prime number.`);
        }
    } else {
        console.log(`${num} is not a prime number.`);
    }
}

checkPrimeAndPalindrome();
