//Q4. Write a program that reads 5 Random 2 Digit values,then find their sum and the average

let number1=Math.floor((Math.random()*90)+10);
let number2=Math.floor((Math.random()*90)+10);
let number3=Math.floor((Math.random()*90)+10);
let number4=Math.floor((Math.random()*90)+10);
let number5=Math.floor((Math.random()*90)+10);
console.log("The number1 is:",number1);
console.log("The number2 is:",number2);
console.log("The number3 is:",number3);
console.log("The number4 is:",number4);
console.log("The number5 is:",number5);

let sum=number1+number2+number3+number4+number5;
let average=(number1+number2+number3+number4+number5)/5;

console.log("The sum is:",sum);
console.log("The average is:",average);

//or

/*
let sum=0;

for(let i=0;i<5;i++)
{
    let randomNumber=Math.floor((Math.random()*90)+10);
    console.log("The number are:",randomNumber);
    sum+=randomNumber;
    
}

let average=sum/5;
console.log("The sum is:",sum);
console.log("The average is:",average);

*/

