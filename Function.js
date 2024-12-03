//Function:Is a block of code that performs a specific task,can be invoked whenever needed.
//Function can take parameter(input) and return a CSSMathValue(output)Function

function myFunction(msg)   //function declaration
{
    console.log(msg);     //I love JS

}
myFunction("I Love JS");    // function call   


function myFunc(msg,n){
    console.log(msg*n);
}
myFunction("Hello",100);     //NaN

//NaN: Not a Number
//is a special type of value that reprsents an undefined or unrepresentable value,particulary when you try to perform a mathematical operation that doesn't result into a valid number.

function sum(a,b){
    return a+b;
}
let val=sum(4,3);    //7
console.log(val);


function example(x,y)
{
    //x and y are local variable and their scope is just in this block.
    s=x+y;
    console.log("before return");
    return s;
    console.log("after return");    //after return,nothing will be executed

}
let val1=example(5,5);
console.log(val1);
//console.log(x);     //undefined


//Function expression: A function can also be defined as part of expression.this means it can be assigned to a variable.
//example:
const greet=function(fullName)
{
    return `Hello,${fullName}`;

}
console.log(greet('Shefali'));

//Arrow function: are concise way of writing functions.
//example: sum of 2 no's
const arrowSum=(a,b)=>{
    console.log(a,b);

}
arrowSum(15,5);

const arrowMultiply=(a1,b1)=>{
    console.log(a1*b1);
}
arrowMultiply(5,3);
//single-line arrow function(for single line code,can remove curly braces)
const printHello=()=>console.log("Helllo");

//Q. Create a function using the function keyword that takes a string as an argument and returns the number of vowels in the string.

function countVowels(str)
{
    let count=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u" || str[i]==="A" || str[i]==="E" || str[i]==="I" ||str[i]==="O" || str[i]==="U"){
            count++;
        }
    }
    console.log(count);
    
}
countVowels("Shefali");

/*
using for op loop:

function countVowels(str)
{
    let count=0;
    for(let char of str)
    {
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"||char==="A"||char==="E"||char==="I"||char==="O"||char==="U"){
            count++;
        }
    }
    console.log(count);
}
countVowels("Apna Shefali");

using arrow function same task:

const countVow=(str)=>{
    let count=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"||str[i]==="A"||str[i]==="E"||str[i]==="I"||str[i]==="O"||str[i]==="U")
        {
            count++;
            
        }
    }
    console.log(count);
}
countVow("Shefali");

*/


