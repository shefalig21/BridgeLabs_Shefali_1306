/*
Rest and Spread Operator: Both are features introduced in ES 6 that allows for more flexible 
handling of arrays,objects and function arguments.

rest operator:
is used to collect multiple elements into a single array or object.
It is often used in function parameter list(to gather an indefinite number of arguments)

syntax:
const[first,...rest]=array;
(for object,function etc)

spread operator:
Is used to expand elements of an array,string or object into individual elements.
It is the reverse of rest operator.

syntax:
const newArray=[...oldArrays];

*/

//example:

//1. rest operator:

const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);   //10
console.log(second);  //20
console.log(rest);    //[30, 40, 50]

//2. spread operator:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); //[1, 2, 3, 4, 5, 6]

