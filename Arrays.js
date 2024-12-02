const { AbortedDeferredError } = require("react-router-dom");

let marks=[91,12,45,77,84];
console.log(marks[2]);
console.log(marks[3]);
console.log(marks);

//modifying values
marks[1]=33;
console.log(marks);
console.log(marks.length);   //length property: no of elements in an array

//looping over an array:
//1. using for loop
let fruits=["apple","banana","cherry"];
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);

}

//2. using for of:
for(let fruit of fruits)
{
    console.log(fruit);
}

let cities=["Chandigarh","Pune","Mumbai","Hyderabad"];
for(let city of cities)
{
    console.log(city);

}

//another example
// for a given arrays with marks of students[85,97,44,37,76,60]
// find the avergae marks of entire class.

let marks1=[85,97,44,37,76,60];
let sum=0
for(let i=0;i<marks1.length;i++)
{
    console.log(marks1[i]);
    sum+=marks1[i];

}

let average=sum/marks.length;
console.log(`The average of entire class=${average}`);

//another example:
//for a given array with prices of 5 items i.e [250,645,300,900,50].all items have an offer of 10% off on them.Change the array to store the final price AbortedDeferredErrorapplying offer.
// ex: 300-> 10% off=30 off
// new value=300-30=270
// for 900-> 10% off=90 off

let prices=[250,645,300,900,50];

for(let i=0;i<prices.length;i++)
{
    console.log(prices[i]);
    let offer=prices[i]/10;
    let finalPrice=prices[i]-offer;
    console.log(`Value after offer=${finalPrice}`);

}

//Methods in Arrays:
//push method(to push element at the end of array)
let fruits2=["apple","banana"];
let newLength=fruits2.push("Cherry");
console.log(fruits2);     'apple','banana','cherry'
console.log(newLength);   //3

//pop method(to remove last element from array)
let fruits3=["apple","banana","cherry"];
let removed=fruits3.pop();
console.log(fruits3);    //apple banana
console.log(removed);    //cherrys

//shift method(to remove first element from array)
let fruits4=["apple","banana","cherry"];
let removed1=fruits4.shift();
console.log(fruits4);    //banana,cherry
console.log(removed1);   //apple

//unshift(to add element to the beginning of an array)
let fruits5=["banana",'Cherry'];
let newLength2=fruits5.unshift("Apple");
console.log(fruits5);      // apple,banana,cherry
console.log(newLength2);   //3

//concat:combines two or more array into one new array.
let fruits6=["apple","Banana"];
let moreFruits=["Cherry","Date"];
let allFruits=fruits.concat(moreFruits);  
console.log(allFruits);    // apple banana cherry date

//Join: concatenates all elements of an array into string.
let fruits7=["apple","banana","cherry"];
let result2=fruits7.join();  
console.log(result2);  //'apple','banana','cherry

//slice: returns a copy of portion of array into a new array
let fruits8=["apple","cherry","date","banana"];
let result3=fruits8.slice(1,3);
console.log(result3);

//splice(changes the content of an array by adding,removing and replacing at specified index)
let fruits9=["apple","banana","Cherry","date"];
let removed4=fruits9.splice(1,2,"Grape","Orange");
console.log(fruits9);    //Apple,Grape,Orange,date
console.log(removed4);   //Banana,cherry

//toString(to convert array to string)
let cities1=["Pune","Noida","banglore"];
const finalresult=cities1.toString();  
console.log(cities1);    //'pune','noida','banglore

//reverse(reverse the order of elements in an array)
let arr2=[1,2,3];
arr2.reverse();
console.log(arr2);   // 3 2 1

//includes(check if certain element is present in array)
let arr4=[1,2,3];
let hasEle=arr4.includes(2);
console.log(hasEle);   //true

//indexOf(returns first index of an element in array or -1,if not found)
let arr5=[1,2,3];
let indx=arr5.indexOf(2);
console.log(indx);    //1
