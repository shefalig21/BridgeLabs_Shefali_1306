function printNum()     //que1
{
    let n=10;
    for(let i=0;i<=n;i++)
    {
        console.log(i);
    }
}
printNum();


function printOddNum()   //que2
{
    let n=100;
    for(let i=0;i<100;i++)
    {
        if(i%2!==0)
        {
            console.log(i);
        }
    }
}
printOddNum();

function multiplication()   //que3
{
    for(let i=0;i<=10;i++)
    {
        console.log(`table of 7=${7*i}`);
    }
}
multiplication();

function multiTable()     //que4
{
    for(let i=1;i<=10;i++)
    {
        console.log(`Multiplication table of ${i}:`);

        for(let j=1;j<=10;j++)
        {
            console.log(`Table is:${i*j}`);
        }
    }
}

multiTable();

function sumNum()   //que5
{
    let sum=0;
    for(let i=1;i<=10;i++)
    {
        sum+=i;
    }
    console.log(sum);

}
sumNum();


function factorial()   //que6
{
    let fact=1;
    let n=10
    for(let i=1;i<=n;i++)
    {
        fact*=i;
    }
    console.log(fact);

}
factorial();

function sumEvenNum()   //que7
{
    let sum=0;
    for(let i=12;i<30;i+=2)
    {
        sum+=i;   
    }
    console.log(sum);
}
sumEvenNum();

function celsiusToFarhen(celsius)      //que8
{
    return (celsius*9/5)+32;
    
}
console.log(celsiusToFarhen(25));


function farhenToCelsius(fahrenheit)    //que9
{
    return (fahrenheit-32)*5/9;
    
}
console.log(farhenToCelsius(77));

/*
function sumArr()
{
    let arr=[23,44,11,5,1];
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    console.log(sum);
}
sumArr();
*/

//OR

function sumOfArr(){        //que10
    let arr=[23,44,11,5,1];
    const output=arr.reduce((acc,val)=>acc+val);
    console.log(output);
}

sumOfArr();

/*
function averageNum()
{
    let arr=[23,44,11,5,1];
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    const average=(sum/arr.length);
    console.log(average);
}
averageNum();
*/

//OR

function averageNum()   //que11
{
    let arr=[23,44,11,5,1];
    const average=arr.reduce((acc,val)=>acc+val)/arr.length;
    console.log(average);
}
averageNum();

function positiveNum(arr)    //que12
{
    return arr.filter(val=>val>0);
}
console.log(`Positive No's: ${positiveNum([8,-14,23,44,-5,11,-77])}`);

/*
function maxNum()
{
    let arr=[23,11,5,88,7,56,3];
    let max=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    console.log(max);
    
}
maxNum();
*/

//OR

function maxNum()       //que13
{
    let arr=[23,11,5,88,7,56,3];
    const max=Math.max(...arr);
    console.log(max);
}
maxNum();

function fibonacciNum()    //que14
{
    let n1=0,n2=1;
    for(let i=0;i<10;i++)
    {
        console.log(n1);
        let n3=n1+n2;
        n1=n2;
        n2=n3;
    }
}
fibonacciNum();

function fibonacci(n) {      //que15
    if(n===0) return 0;
    if(n===1) return 1;
    
    return fibonacci(n-1)+fibonacci(n-2);
}
console.log(`10th Fibonacci number: ${fibonacci(10)}`);

function isPrime(num)   //que16
{
    if(num<=1)
    {
        return false;
    }
    for(let i=2;i<Math.sqrt(num);i++)
    {
        if(num%i===0)
        {
            return false;
        }
    }
    return true;
}
console.log(isPrime(17));
console.log(isPrime(44));

function sumOfDigits(n)   //que17
{
    let sum=0;
    while(n>0)
    {
        sum+=n%10;  //add last digit to sum
        n=Math.floor(n/10);  //last digit remove kr dega
    }
    return sum;
}
console.log(sumOfDigits(84842));

function isPrime(num)   //que18(print first 100 prime no)
{
    if(num<2)
    {
        return false;
    }
    for(let i=2;i<Math.sqrt(num);i++)
    {
        if(num%i===0)
        {
            return false;
        }
    }
    return true;
}

function printFirst100()
{
    let prime=[];
    let num=2;
    while(prime.length<100)
    {
        if(isPrime(num)){
            prime.push(num);
            
        }
        num++;
        
    }
    console.log(prime);
    
}
printFirst100();
 
function isPrime(num) {  //que19 (first “p” prime numbers greater than “n”)
    if (num<2){
        
         return false;
    }
    for (let i=2;i<=Math.sqrt(num);i++) {
        if(num%i===0){
            return false;
        }
    }
    return true;
}

function primesGreaterThan(p,n) {
    let prime=[];
    let num=n+1;
    
    while(prime.length<p){
        if(isPrime(num)){
            prime.push(num);
        }
        num++;
    }

    return prime;
}

const primes=primesGreaterThan(3,10);//3 prime no greater than 10
console.log(primes);


function rotateArrayLeft() {  //que20
    let arr = [1, 2, 3, 4, 5];   
    let firstElement = arr.shift();
    arr.push(firstElement);      
    return arr;
}

console.log(rotateArrayLeft());

function rotateArrayRight() {  //que21
    let arr = [1, 2, 3, 4, 5];
    let lastElement = arr.pop();//last element
    arr.unshift(lastElement);//add to beginning
    return arr;
}

console.log(rotateArrayRight());

/*
function reverseArray()
{
     let arr=[23,5,11,88,7,56];
     arr.reverse();
     console.log(arr);
}
que reverseArray();
*/

//OR

function reverseArray()      //que22
{
     let arr=[23,5,11,88,7,56];
     let result=[];
     for(let i=arr.length-1;i>=0;i--)
     {
         result.push(arr[i])
     }
     console.log(result);
}
reverseArray();

/*

function reverseString()
{
     let str="Shefali";
     let res="";
     for(let i=str.length-1;i>=0;i--)
     {
         res+=str[i];
     }
     console.log(res);
}
 reverseString();

*/

//OR
function reverseString()     //que23
{
     let str="Shefali";
     const result=str.split("").reverse().join("");
     console.log(result);
}
reverseString();


function mergeArrays()     //que24
{
     let arr1=[23,11,8,66];
     let arr2=[3,17,5,33];
     let res=arr1.concat(arr2);
     console.log(res);
}
mergeArrays();

/*  OR

function mergeArrays()
{
     let arr1=[23,11,8,66];
     let arr2=[3,17,5,33];
     let res=[...arr1,...arr2];
     console.log(res);
}
mergeArrays();
*/

function uniqueArray(arr1,arr2)      //que25
{
     const res=arr1.filter(num=>!arr2.includes(num)).concat(arr2.filter(num=>!arr1.includes(num)));
     return res;
    
}
let arr1=[23,11,5,33,8,66];
let arr2=[23,17,5,11,33];

console.log(uniqueArray(arr1,arr2));

function que26(array1,array2)        //que26
{
     const res=array1.filter(num=>!array2.includes(num))
     return res;
    
}
let array1=[23,11,5,33,8,66];
let array2=[23,17,5,11,33];

console.log(que26(arr1,arr2));

function que27(array)          //que27
{
    return [...new Set(array)];
}
let array=[1,2,3,2,4,4,3,5];
console.log(que27(array));

function isPrime(num)   //que28   (sum of first 100 prime numbers and return them in an array)
{
    if(num<2)
    {
        return false;
    }
    for(let i=2;i<Math.sqrt(num);i++)
    {
        if(num%i===0)
        {
            return false;
        }
    }
    return true;
}

function printFirst100()
{
    let prime=[];
    let num=2;
    while(prime.length<100)
    {
        if(isPrime(num)){
            prime.push(num);
            
        }
        num++;
        
    }
    const sum=prime.reduce((acc,val)=>acc+val); 
    return {prime,sum}; 
    
}
const res=printFirst100();
//console.log(res.prime);
console.log(res.sum);

function isPrime(num)      //que29  (distance between the first 100 prime numbers)
{
    if(num<2)
    {
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++)
    {
        if(num%i===0)
        {
            return false;
        }
    }
    return true;
}

function printFirst100()
{
    let prime=[];
    let num=2;
    while(prime.length<100)
    {
        if(isPrime(num)){
            prime.push(num);
            
        }
        num++;
        
    }
    return prime;
}
function primeNumDistance() {
    const prime=printFirst100();
    
    for (let i=1;i<prime.length;i++) {
        const distance=prime[i]-prime[i - 1];
        console.log(`Distance between ${prime[i-1]} and ${prime[i]}:${distance}`);
    }
}

primeNumDistance();

function addNum(num1,num2)    //que30   (add two positive numbers of indefinite size.)
{
    let res=BigInt(num1)+BigInt(num2);
    console.log(res.toString());
    
}

let num1=142335664878698676909875878675934;
let num2=123412341234567895678963427374;
addNum(num1,num2);


function countWords()    //que31
{
    let str="  This is a smaple test  case.    ";  
    let res=str.trim().split(/\s+/); //split on the basis of whitespace
    console.log(res.length);
}
countWords();

/*
function countWords()
{
    let str="  This is a smaple test  case.    ";
    let res=str.trim().split(/\s+/); 
    let count=res.reduce((acc)=>acc+1,0); //0 starting value of acc
    console.log(count);
}
countWords();

//OR

function countWords(text)
{
    const words=text.split(/\s+/);
    let count=0;
    for(let word of words)
    {
        if(word.trim())
        {
            count++;
        }
    }
    return count++;
}

let text="  This is a sample   test case  ";
console.log(countWords(text));

*/

function capitalizeFirstLetter(text)   //que32
{
    const words=text.split(" ");
    const res=words.map(word=>
    word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(" ");
    
    return res;
}

let text="this is a sample test";
console.log(capitalizeFirstLetter(text));


/*
function capitalizeFirstLetter(text) {
    const words=text.split(" ");
    for(let i=0;i<words.length;i++)
    {
        words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);
    }
    return words.join(" ");
    
}

let text="this is a sample test";
console.log(capitalizeFirstLetter(text)); 

//OR

// to capitalize first letter for isngle word

const s1="shefali";
const s2=s1.charAt(0).toUpperCase()+s1.slice(1);
console.log(s2);
*/

function sumOfNumbers(str)   //que33
{
    let numbers=str.split(",");  //split on the basis of comma
    let sum=numbers.reduce((acc,num)=>acc+Number(num),0);  //converting num to Number9can also do suing parseInt)
    return sum;
}

let str="1,2,3,4,5";
console.log(sumOfNumbers(str));


/*

for num-numeric string:

function sumOfNumbers(str)
{
    let numbers=str.split(",");  
    let sum=numbers.reduce((acc,num)=>{
    
    let n=Number(num);
    
    if(!isNaN(n))
    {
        acc+=n;
    }
    
    return acc;
    },0);
    return sum;
}

let str="1,2,3,'hello',4,5";
console.log(sumOfNumbers(str));

//OR

function sumOfNumbers(str)
{
    let numbers=str.split(",");
    let sum=0;
    for(let i=0;i<numbers.length;i++)
    {
        sum+=Number(numbers[i]);
    }
    return sum;
}

let str="1,2,3,4,5";
console.log(sumOfNumbers(str));

//when it contains non-numeric string also:
function sumOfNumbers(str)
{
    let numbers=str.split(",");
    let sum=0;
    for(let i=0;i<numbers.length;i++)
    {
        const num=Number(numbers[i]);
    
    if(!isNaN(num))  //if valid no,then will add to sum
    {
        sum+=num;
    }          
}
    return sum;
}

let str="1,2,3,'hello',4,5";
console.log(sumOfNumbers(str));

( isNaN(): in-built javascript function that checks if no.is valid or not )
*/

function printWords(arr)  //que34
{
    let text="   this is   a simple         case.";
    let res=text.trim().split(/\s+/);
    console.log(res);
}
printWords();

/*
using for each:
function printWords(arr)
{
    let text="   this is   a simple         case.";
    let words=text.trim().split(/\s+/);
    let res=[];
    
    words.forEach((word)=>{
        res.push(word);
    });
    
    console.log(res);
    
}
printWords();
*/

function stringToArray()   //que36
{
    let str="This,is,a,string";
    let res=str.split(",");
    console.log(res);
}
stringToArray();

/*
OR

function stringToArray()
{
    let str="hello";
    let res=[...str];
    console.log(res);
}
stringToArray();

OR

function stringToArray()
{
    let str="hello";
    let res=Array.from(str); //Array.from converts a string into array
    console.log(res);
}
stringToArray();

*/

//using charCodeAt() method: to retur the ASCII vlaue(unicode) of each character at secified position.

function stringToASCIIArray()   //que37
{
    let str="hello";
    let res=Array.from(str).map(char=>char.charCodeAt(0));
    console.log(res);
}
stringToASCIIArray();

/*
using loop:
function stringToASCIIArray(str1)
{
    const res=[];
    for(let i=0;i<str1.length;i++)
    {
        res.push(str1.charCodeAt(i));
    }
    return res;
    
}
let str1="shefali";
console.log(stringToASCIIArray(str1));
*/

function asciiToString()   //que38
{
    let arr2=[105,104,102,107];
    let res=arr2.map((val)=>String.fromCharCode(val)).join("");
    console.log(res);
}
asciiToString();

//String.fromCharCode(): This method is used to convert one or more Unicode (or ASCII) values into a string.

/*
using loop

function asciiToString()
{
    let arr2=[105,104,102,107];
    let res="";
    for(let i=0;i<arr2.length;i++)
    {
        res+=String.fromCharCode(arr2[i]);
    }
    console.log(res);
    
}
asciiToString();
*/

function bubbleSort(array12)     //que40
{
    let n=array12.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=0;j<n-1-i;j++)
        {
            //swap when element is greater than next elem.
            if(array12[j]>array12[j+1])
            {
                let temp=array12[j];
                array12[j]=array12[j+1];
                array12[j+1]=temp;
            }
        }
    }
    return array12;
    
}

let array12=[3,64,11,98,5,45];
console.log(bubbleSort(array12));


function calculateDistance(x1,x2,y1,y2)  //que41
{
    const x=x2-x1;
    const y=y2-y1;
    
    const distance=Math.sqrt(x*x+y*y);
    return distance;
}
const distance=calculateDistance(1,4,2,6);
console.log(distance);


function getColumn(matrix,columnNumber)    //que42
{
    let res=[];
    
    for(let i=0;i<matrix.length;i++)
    {
        res.push(matrix[i][columnNumber]);
    }
    
    return  res;
    
}

let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ];
let columnNumber=2;
console.log(getColumn(matrix,columnNumber));

//OR
/*
function getColumn(matrix,colNumber)
{
    let res=matrix.map(val=>val[colNumber]);
    return res;
    
}
let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ];
let colNumber=1;
console.log(getColumn(matrix,colNumber));
*/

function stringToBinary(binaryString)  //que44
{
    console.log(parseInt(binaryString,2));  //2 teels that string is in binary(base-2)
    
}
const binaryString="1101";
stringToBinary(binaryString);

function sumOfJaggedArray(arr)    //que45
{
    let sum=0;
    for(let i=0;i<jaggedArr.length;i++)
    {
        if(typeof arr[i]==='number')
        {
            sum+=arr[i];
        }
        else if(Array.isArray(arr[i]))  //if element is array then we call the function to calaculate sum of sub array.
        {
            sum+=sumOfJaggedArray(arr[i]);
        }
        
    }
    return sum;
    
}
const jaggedArr=[1,[2,3],[4,[5,6]],7];
console.log(sumOfJaggedArray(jaggedArr));

//Array.isArray(): a method in javascript that is used to dtermine if value is an array or not.
/*
using reduce:

function sumOfJaggedArray(arr)
{
    return arr.reduce((sum,val)=>{
        if(typeof val==='number')
        {
            return sum+val;
        }
        else if(Array.isArray(val))
        {
            return sum+sumOfJaggedArray(val);
        }
        return sum;
    },0);
}
const jaggedArr=[1,[2,3],[4,[5,6]],7];
console.log(sumOfJaggedArray(jaggedArr));
*/

function findingMax(arr)    //que46
{
    let max=-Infinity;
    
    for(let i=0;i<arr.length;i++)
    {
        if(typeof arr[i]==='number')
        {
            max=Math.max(max,arr[i]);
        }
        else if(Array.isArray(arr[i]))
        {
            max=Math.max(max,findingMax(arr[i]));
            
        }
    }
    return max;
}
const jaggedArr1=[1,[2,3],[4,[5,6]],7];
console.log(findingMax(jaggedArr1));


function longestString(sentence)         //que48
{
    let words=sentence.split(" ");
    let longestWord="";
    
    for(let word of words)
    {
        if(word.length>longestWord.length)
        {
            longestWord=word;
        }
    }
    return longestWord;
    
}
let sentence="This is geeksforgeeks learning website";
console.log(longestString(sentence));

/*
using reduce:
function longestString()
{
    let str="This is geeksforgeeks learning website";
    let res=str.split(" ").reduce((longest,currentWord)=>currentWord.length>longest.length?currentWord:longest);
    console.log(res);
}
longestString();

//OR

//first split then sort on basis of length bcoz string
function longestString()
{
    let str="This is a learning weabsite";
    let res=str.split(" ");
    return res.sort((a,b)=>b.length-a.length)[0];  //[0] bcoz longest string
    
}
console.log(longestString());
*/

//using Using Fisher-Yates (Knuth) Shuffle:
//iterating through the array in reverse order and swapping each element with a randomly selected element that comes before it.

function shuffleArray()   //que49
{
    let arr=["apple","orange","mango","cherry","banana"];
    for(let i=arr.length-1;i>0;i--)
    {
        const j=Math.floor(Math.random()*(i+1)); //generates a random no between 0 and i
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    console.log(arr);
}
shuffleArray();


function generateUniquerandomNum()    //que50
{
    let n=10;
    const nums=[];
    
    while(nums.length<n)
    {
        const randomNum=Math.floor(Math.random()*n)+1;
        if(!nums.includes(randomNum))
        {
            nums.push(randomNum);
        }
    }
    console.log(nums);
}

generateUniquerandomNum();


function getFrequency()   //que51
{
    let str="hello";
    const map=new Map();
    
    for(let char of str)
    {
        if(char!==" ")
        {
            map.set(char,(map.get(char)||0)+1);
            
        }
    }
    
    console.log(...map);
    
}
getFrequency();


function bigFibonacci()   //que52
{
    let n=500;
    let a=BigInt(0);
    let b=BigInt(1);
    
    for(let i=2;i<=n;i++)
    {
        let c=a+b;
        a=b;
        b=c;
    }
    console.log(b);
}
bigFibonacci();


function bigFactorial()   //que53
{
    let n=70;
    let fact=1;
    for(let i=1;i<=n;i++)
    {
        fact*=i;
    }
    console.log(fact);
    
}
bigFactorial();