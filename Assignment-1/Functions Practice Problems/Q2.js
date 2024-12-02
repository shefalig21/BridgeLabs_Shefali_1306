//Q2. Write a function to check if the two numbers are Palindromes



function isPalindrome(num) {
  let reversedNum = 0;
  let originalNum = num;

  while (num > 0) {
    const digit = num % 10;
    reversedNum = reversedNum * 10 + digit;
    num = Math.floor(num / 10);
  }

  return originalNum === reversedNum;
}


const num1 = 121;
const num2 = 123;

if (isPalindrome(num1) && isPalindrome(num2)) {
  console.log("are palindromes.");
} else {
  console.log("not a palindrome.");
}



/*
Or

function isPalindrome(num1, num2) {
    // Converting number to string
    const str1 = num1.toString();
    const str2 = num2.toString();
  
    // Check if the reversed strings is equal to the original strings
    return str1 ===str1.split('').reverse().join('') &&
           str2 ===str2.split('').reverse().join('');
  }
  const num1 = 121;
  const num2 = 123;
  
  if (isPalindrome(num1, num2)) {
    console.log("Both numbers are palindromes.");
  } else {
    console.log(" not a palindrome.");
  }


*/


  