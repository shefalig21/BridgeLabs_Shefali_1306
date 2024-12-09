/*
//to reverse a string
str="Shefali";
result=" ";

for(let i=str.length-1;i>=0;i--){
    result+=str.charAt(i);
   
}

console.log(result);

//OR

str2="Shefali";
res=str2.split("").reverse().join();
console.log(res);
*/

//String methods:
//1. length: returns the length of String.
str="Hello World";
console.log(str.length);

//2. charAt():returns the character at a specified index (position) in a string.
str1="Shefali";
console.log(str1.charAt(2));

//3. toUpperCase and toLowerCase: convert the string to upper case string and lower case string.
str2="hello";
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

//4. charCodeAt(index): Returns the Unicode of the character at the specified index.
str3="hello";
console.log(str3.charCodeAt(2));

//5. indexOf(searchValue, start):Returns the index of the first occurrence of searchValue. Returns -1 if not found.
str3='hello';
console.log(str3.indexOf("l"));

//6. lastIndexOf(searchValue, start):Returns the index of the last occurrence of searchValue.
console.log(str3.lastIndexOf("l"));

//7. includes(searchString):Checks if the string contains searchString.
console.log(str3.includes("lo"));  //true because conatins the serached string

//8. startsWith(searchString): Checks if the string starts with searchString.
console.log(str3.startsWith("He"));    //false

//9. endsWith(searchString,): Checks if the string ends with searchString.
console.log(str3.endsWith("lo"));     //true
    
//10. search(regex):Searches for a match and returns the index of the first match.
console.log(str3.search("l"));

//11. replace(oldValue, newValue):Replaces occurrences of searchValue with newValue.
gtr="Hello World";
console.log(gtr.replace("World","Javascript"));

//12. replaceAll(searchValue, newValue): Replaces all occurrences of searchValue.
console.log(gtr.replaceAll("l","b"));

//13. slice(start, end):Extracts a section of a string.
console.log(gtr.slice(0,4));  //(i,j) j will not be included.
console.log(gtr.slice(0,5));   //hello

//14. substring(start, end): Extracts characters between start and end.
console.log(gtr.substring(0,3));

//15. split(separator): Splits a string into an array based on a separator.
console.log("a,b,c".split(","));


//16. trim(): Removes whitespace from both ends.
console.log(" hello  ".trim());

//17. trimStart()/trimEnd(): Removes whitespace from the start or end.
console.log("  hello".trimStart());
console.log("hello  ".trimEnd());

//18. concat(string1, string2): Concatenates strings.
gtr1="Hello";
gtr2="World";
console.log(gtr1.concat(gtr2));

//19. repeat(count): Repeats the string on specified index  times.
console.log(gtr1.repeat(3));

//20. toString(): Converts the string object to a string.
let strObj=new String("hello");
console.log(strObj.toString());

//21. valueOf(): Returns the primitive value of the string.
let strObj2 = new String("hello");
console.log(strObj2.valueOf()); 

//22. padStart(targetLength,padString)/padEnd(targetLength,padString): Pads the string to the specified length.
console.log("5".padStart(3, "0")); // 005
console.log("5".padEnd(3, "0"));   // 500



//Array Methods:


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

//delete(Using delete() leaves undefined holes in the array.Use instead ope)
const fruitsn=["Apple","Banana","Organe","Strawberry","Cherry"];
console.log(delete(1));

//sort(sorting the arry):
console.log(arr5.sort());

//flat(): Flattens a nested array into a single-level array.(basically nested arry ko single arry me conver karta hai)
const nums12=[1,[3,4],[6,0]];
console.log(nums12.flat());

//copyWithin():copies array elements to another position in an array.
let arrs11= [1, 2, 3, 4];
arrs11.copyWithin(0, 2);  // [3, 4, 3, 4]
console.log(arrs11);

//fill: Fill all the elements with a value.
fruitsn.fill("Kiwi");
console.log(fruitsn);
//Fill the last two elements:
const fruits45 = ["Banana", "Orange", "Apple", "Mango"];
fruits45.fill("Kiwi", 2, 4);  //4 not included
console.log(fruits45);



