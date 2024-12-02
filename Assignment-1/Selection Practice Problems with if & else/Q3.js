//Q3. Write a program that takes a year as input and outputs the Year is a Leap Year or nota Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.


const year = parseInt(prompt("Enter a year:"));

if (year >= 1000 && year <= 9999) {
  if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
    console.log("Is a leap year");
  } else {
    console.log("Is not a leap year");
  }
} else {
  console.log("Please enter a 4-digit year");
}