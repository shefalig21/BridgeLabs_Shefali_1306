/*

Q1. Find the Minimum and Maximum Element in an Array

let arr=[45,12,5,9,98,17];
let max=arr[0];
let min=arr[0];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>max)
    {
        max=arr[i];

    }
    if(arr[i]<min)
    {
        min=arr[i];
    }
}

console.log(max);
console.log(min);

OR

//using Math.max,Math.min and spread operator:
let arr=[45,12,5,9,98,17];
let largest=Math.max(...arr);
let smallest=Math.min(...arr);
console.log(largest);
console.log(smallest);

Q2. reverse an array.

by iterating over array in reverse and adding each element to an empty string.

let arr=[23,11,6,9,89,5];
let result=[];

for(let i=arr.length-1;i>=0;i--)
{
    result.push(arr[i]);

}
console.log(result);

OR
using reverse method:

let arr=[45,12,5,9,98,17];
let result=arr.reverse();
console.log(result);

//using spread operator:
let arr=[45,12,5,9,98,17];
let reversed=[...arr].reverse();
console.log(reversed);


//Q3. Write a Program to Cyclically Rotate an Array by One.
//basically last element ko pop karenge and then usse array ke starting me add kar denge.
function  rotateArr(arr)
{
    let last_ele=arr.pop();
    arr.unshift(last_Ele);
    return arr;
    
}

let arr=[1,2,3,4,5];
console.log("original array:",arr);

let rotatedArray=rotateArr(arr);
console.log("After rotating clokwise:",rotatedArray);


//Q4. sort an  array.
let arr=[45,11,8,98,7,2];
arr.sort();
console.log(arr);


//Q5. Find Duplicates in an Array
function findDuplicate(arr)
{
    let unique=new Set();
    let duplicates=new Set();

    for(let num of arr)
    {
        if(unique.has(num)){
            duplicates.add(num);
        }
        else{
            unique.add(num);

        }

    }
    console.log(duplicates);
}

let array=[1,2,2,3,4,4,8,8];
findDuplicate(array);

//Q6. Find the Occurrence of an Integer in the Array.

//Find the Occurrence of an Integer in the Array
//(basically found the count of a specific number in array)

function findOcurrence(arr,target)
{
    let count=0;
    for(let num of arr)
    {
        if(num===target)
        {
            count++;
            
        }
    }
    return count;
    
}
let arr=[1,2,4,3,4,4,8,8];
let target=4;

console.log(findOcurrence(arr,target));

//using reduce:

function findOcurrence(arr,target)
{
    return arr.reduce((count,num)=> (num===target ? count+1:count ),0); //0 it means initial value of count is 0.
    
}
let arr=[1,2,4,3,4,4,8,8];
let target=4;
console.log(findOcurrence(arr,target));


//Q7. Sort the Array of 0s, 1s, and 2s.

function sortArray(arr) {
    let count0=0, count1=0, count2=0;
    // Counting occurrences of 0, 1, and 2
    for (let num of arr) {
        if (num===0) {
            count0++;
        } else if (num===1) {
            count1++;
        } else if (num===2) {
            count2++;
        }
    }

    // Reconstructing arrayfrom sorted values
    return [...Array(count0).fill(0), ...Array(count1).fill(1), ...Array(count2).fill(2)];
}

let arr = [0, 1, 2, 1, 0, 2, 1, 0, 2];
console.log(sortArray(arr)); 


//Q8. Move All the Negative Elements to One Side of the Array.
function rearrangeArray(arr)
{
    let negativeNum=[];
    let positiveNum=[];
    
    for(let num of arr)
    {
        if(num<0)
        {
            negativeNum.push(num);
            
        }
        else{
            positiveNum.push(num);
        }
    }
    return [...negativeNum,...positiveNum];
}

let arr=[-12, 11, -13, -5, 6, -7, 5, -3, -6];

console.log(rearrangeArray(arr));

OR
//using filter:
function rearrangeArray(arr) {

    let negativeNum=arr.filter(num =>num< 0);
    let positiveNum=arr.filter(num =>num>= 0);
    //concat them 
    return negativeNum.concat(positiveNum);
}

let arr = [1, -2, 3, -4, 5, -6];
console.log(rearrangeArray(arr));  


//Q9. Find the Row with a Maximum Number of 1’s

//Q10. Majority Element:
Given an array arr. Find the majority element in the array. If no majority exists, return -1. A majority element in an array is an element that appears strictly more than arr.size() / 2 times in the array.

function majorityElement(arr) {
    let countMap=new Map(); //To store frequency of each element

    // Counting frequency of each element
    for (let num of arr) {
        countMap.set(num,(countMap.get(num) || 0) + 1);  //1 to increment the count by one 
    }

    //to check if any element prsent more than n / 2 times
    let n=arr.length;
    for (let[key, value] of countMap) {
        if (value>n / 2) {
            return key; //Majority element
        }
    }

    return null; //no majority element
}
let arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
console.log(majorityElement(arr)); 

*/







