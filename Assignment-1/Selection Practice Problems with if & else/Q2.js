//Q2. Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.

const month = parseInt(prompt("Enter the month:"));  //using parseInt because prompt takes input as string
const day = parseInt(prompt("Enter the day"));

if ((month === 3 && day >= 20) || (month === 4) || (month === 5) || (month===6 && day <= 20)) {
    console.log(true);
} else {
    console.log(false);
}

