/*
Map():
Map is buil-in array method that creates a new array by applying a given function to each element of the existing array.
*/

//example:
let nums=[24,5,7,78,59];
nums.map((val)=>{
    console.log(val);
    
});

//creating new array:
let nums1=[24,5,7,78,59];
let newArr=nums1.map((val)=>{
    return val;
});
console.log(newArr);

//udating values and creating new array
let nums2=[24,5,7,78,59];
let newArr1=nums2.map((val)=>{
    return val*val;
});
console.log(newArr1);

//working with strings:
let words=['apple','cherry','date'];
const newWordsArr=words.map((val)=>{
    return val.toUpperCase();
    
});
console.log(newWordsArr);

//map() with index
let nums5=[5,8,66,21,2];
const newNums=nums5.map((val,index)=>val+index);
console.log(newNums);

/*
Filter():
in-built method of array,which creates new array with the elements that satisfy the condition defined in callback function.
basically used to filter out elements that do not meet certain conditions.
*/

//example:priniting ony numbers that are even

let number=[1,2,3,4,5,6,7,8,9,10];
const evenArr=number.filter((val)=>{
    return val%2===0;
    
});
console.log(evenArr);

//elements that are odd

let number1=[1,2,3,4,5,6,7,8,9,10];
const evenArr1=number1.filter((val)=>{
    return val%2!=0;
    
});
console.log(evenArr1);

// Filtering Strings by Length
let words1=['amy','cassy','bobby','lavy'];
const wordArr=words1.filter((word)=>{
    return word.length>4;
    
});

console.log(wordArr);

/*
Reduce():
perform some operations and return a single value
*/

//example:sum

let array=[1,2,3,4];
const output=array.reduce((res,curr)=>
{
    return res+curr;
});
console.log(output);

//largest element in an array
let arrays=[9,15,4,37,5,11];
const newOutput=arrays.reduce((prev,curr)=>{
    return prev>curr? prev:curr;
    
})
console.log(newOutput);


//smallest element in an array
let arrays1=[9,15,4,37,5,11];
const newOutput1=arrays1.reduce((prev,curr)=>{
    return prev<curr? prev:curr;
    
})
console.log(newOutput1);

//Q. we are given array of marks of students.Filter out marks of students that scored 90.

let arr11=[67,31,99,87,91,28,93,75];

const ToppersArr=arr11.filter((marks)=>{
    return marks>90;
    
})

console.log(ToppersArr);

//Q. take a no input from UserActivation.create an array of numbers from 1 to newArr.map
//use the reduce method to calculate sum of all numbers in the array.
//use the reduce method to calculate product of all numbers in the array.

let n=prompt("enter a number");

let array12=[];

for(let i=1;i<=n;i++)
{
    array12[i-1]=i;  //so position starts from 0
}
console.log(array12);

const result12=array12.reduce((res,curr)=>{
    return res+curr;
    
});

console.log(result12);

//basically product of all no.s t.i factorial
const factorial=array12.reduce((res,curr)=>{
    return res*curr;
    
});

console.log(factorial);






