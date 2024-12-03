/*
forEach():
forEach() is a method in javascript used to execute a provided function
once for each element in an array.
It is used for arrays(can;t be used on strings)

*/

//example:

let arr=[1,2,3,4,5];
arr.forEach(function printVal(val){  //val will get element at every index
    console.log(val);
    
});

/*
using arrow function:

let arr=[1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val);
 });

 */

 let arr1=["pune","delhi","mumbai"];
arr1.forEach((val)=>{ 
    console.log(val.toUpperCase());  //koi kaam karna ho
});

//forEach ke callBack function ke andar 3 parameters hote hain:
//value/item(value at every index),index(index of element),array(the array itself)
//these are optional

//example: want to print index along with value
let arr2=["pune","delhi","mumbai"];
arr2.forEach((val,idx)=>{
    console.log(val.toUpperCase(),idx);
    
});

//also printing the array:
let arr3=["pune","delhi","mumbai"];
arr3.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
    
});

//example:

let names=["Alice","Bob","Cassy"];
names.forEach((val,idx,names)=>{
    console.log(val,idx,names);
});

//example:
let names1=["Alice","Bob","Cassy"];
names1.forEach((val,idx,names)=>{
    console.log(val.toUpperCase(),idx,names);
});

//example;
let numbers=[1,2,3,4,5,6];
numbers.forEach((num)=>
{
    if(num%2===0)
    {
        console.log(num);
    }
})

//Q. For a given array of numbers,print the square of each value using the forEach loop.
let numbers4=[2,4,8,3,6,10,5];
numbers4.forEach((num)=>{
    console.log(num*num);
});

// or

// let numbers=[2,4,8,3,6,10,5];
// numbers.forEach((num)=>{
//     num**=2;
//     console.log(num);
// });

//another way to do this:

// let numbers=[2,4,8,3,6,10,5];

// let calcSquare=(num)=>{   //arrow function
//     console.log(num*num);
// }

// numbers.forEach(calcSquare);  //passed in callback function

