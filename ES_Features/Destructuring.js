//Destructuring in javascript is a convient way to extract values from arrays or properties from objects into variables.

//Destructuring Arrays:
//1. We can extract values from an array into variables:
//example:

const fruits=["apple","banana","cherry"];
//destructuring
const[first,second,third]=fruits;

console.log(first);   //apple
console.log(second);  //banana
console.log(third);   //cherry

/*


2. we can also skip elements
example:
const [first,,third]=fruits;
console.log(first);        //apple
console.log(third);        //cherrys

3. use default values:
example:
const[first,second,third="default"]=["apple","banana"];
console.log(third);     //default



Destructuring objects
Extract properties from objects into variables.Destructuring
example:

const person={ name: "Shefali",age:21,city="Banglore"};
//destructuring
const{name,age,city}=person;

console.log(name);    //Shefali
console.log(age);     //21
console.log(city);    //Banglore

We can rename variables:
const{name:userName,age:userAge}=persson;
console.log(userName);     //Shefali
console.log(userAge);      //21

Set default values:
const{name,age,country="Los Vegas"};
console.log(country);    //Los Vegas

Nested desctruring:
const person={
    name: "shefali",
    address:{
        city: "Pune",
        state:"Maharashtra"
    }
};

const {address:{city,state}}=person;
console.log(city);     //pune
console.log(state);    //maharashtra

Nested Arrays:
const numbers=[1,[2,3],4];
const[one,[two,third],four]=numbers;
console.log(two);      //2
console.log(three);    //3

Destructuring function parameters:
we can destructure directly in function arguments.

function greet({name,age})
{
    console.log(`Hello ${name},you are ${age} years old`);   
}

const user={ name:"shefali",age:21};
greet(user);  //Hello shefali,you are 21 years old.


*/



