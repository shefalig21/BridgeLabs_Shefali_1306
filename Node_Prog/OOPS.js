//OOPS:
/*

class Animal {   //class
    constructor(name, sound) {
        this.name = name;    //properties
        this.sound = sound;
    }

    makeSound() {   //method
        console.log(`${this.name} says: ${this.sound}`);
    }
}

//creating objects(instances)
const cat = new Animal("Cat", "Meow");
const dog=new Animal("dog","Bark");

//calling method
cat.makeSound();
dog.makeSound();

console.log(cat.name);  //accessing properties
console.log(cat.sound);



//Inheritance: We use extends keyword to achieve inheritance along with super keyword
super(name): required in the child class constructor to call the parent class's constructor and initialize properties inherited from Animal.

// Parent Class
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes sound.`);
    }
}

// Child Class 
class Dog extends Animal {
    constructor(name, breed) {
        super(name);  // Calling the parent class constructor
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Create an instance of dog class
const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak();  
dog.makeSound();  


//Polymorphism example:

class Animal{
    makeSound()
    {
        console.log("Make sound");

    }
}

class Dog extends Animal{
    makeSound()
    {
        console.log("Barks");

    }
}

class Cat extends Animal{
    makeSound()
    {
        console.log("Meow");
    }
}

class Cow extends Animal{
    makeSound()
    {
        console.log("Mooo");
    }
}

const animal=new Animal();
const dog=new Dog();
const cat=new Cat();
const cow=new Cow();

animal.makeSound();
dog.makeSound();
cat.makeSound();
cow.makeSound();

//basically it allows us to use same method name for different classes or objects where each object can have diffrent implementation for that object.


Conditional Operators:

//1. Equality (==)
let x=5;
let y='5';

console.log(x==5);  //true
console.log(y==5);  //true 
console.log(x==y);  //true

//2. Strict Equality (===)
console.log(5==='5');   //false
console.log(0===false); //false
console.log(5===5);    //true
 
//3. Inequality (!=)
console.log(5!='5');      //false
console.log(0!=false);    //false
console.log(5!=6);       //true

//4. Strict Inequality (!==)
console.log(5!=='5');    //true
console.log(0!==false);  //true
console.log(5!==5);      //false

//5. Greater Than (>)
console.log(5>3);   //true
console.log(3>5);   //false

//6.Greater Than or Equal To (>=)
console.log(5>=5);  //true
console.log(3>=5);  //false

//7.Less Than (<)
console.log(3 < 5);  // true
console.log(5 < 3);  // false

//8. Less Than or Equal To (<=)
console.log(5 <= 5);  // true
console.log(3 <= 5);  // true
console.log(7 <= 5);  // false

//9.Comparison with NaN
console.log(NaN == NaN);  // false
console.log(NaN !== NaN);  // true
console.log(isNaN(NaN));  // true (to check if a value is NaN)

//10. Object Comparison
let obj1 = { a: 1 };
let obj2 = { a: 1 };
let obj3 = obj1;
console.log(obj1 == obj2);  // false (different objects in memory)
console.log(obj1 === obj2);  // false (different objects in memory)
console.log(obj1 == obj3);  // true (same reference)


//Conditional branching

//if else:
let age=21;
if(age>18)
{
    console.log("You are an adult");

}
else{
    console.log("Not an adult");
}

//else if:
let age=25;
if(age>=18)
{
    console.log("An adult");
}
else if(age>=13)
{
    console.log("You are a teenager");
}
else{
    console.log("You are child");
}


//switch
let day=4;
switch(day)
{
    case 1:
        console.log("Monday");
        break;
    
        case 2:
            console.log("Tuesday");
            break;
        
        case 3:
        console.log("wednesday");
        break;

        case 4:
        console.log("Thursday");
        break;

        case 5:
        console.log("Friday");
        break;

        case 6:
        console.log("Saturday");
        break;

        default:
        console.log("Invalid Day");

}

//Ternary Operator:
let age=18;
let result=(age>=18)?"You are an adult":"You are a minor";
console.log(result);

alert:

alert("Hello,this is an alert");

//When executed, a pop-up appears with the message "Hello, this is an alert!" and an "OK" button to dismiss the alert.

prompt:
let userName=prompt("What is your name");
alert("Hello,+userName");
//When executed, a pop-up appears asking "What is your name?". After the user enters their name and clicks "OK", an alert will display "Hello, [name]


confirm:

let userChoice=confirm("Do you want to proceed?");
if(userChoice)
{
    alert("You choose to proceed");

}
else{
    alert("Not to proceed");
}

When executed, a pop-up appears asking "Do you want to proceed?". If the user clicks "OK", it will display "You chose to proceed!". If the user clicks "Cancel", it will show "You canceled the action."


//Logical And(&&):
let x=10;
let y=32;
let result=x>5 && y<30;
console.log(result);  //false
let result1=x<15 && y<=50;
console.log(result1);   //true

//Logical OR(||):

let x=0;
let y=5;
let result=x>0 || y>0;
console.log(result);  //true


//Nullish Coalescing Operator (??)

let name = null;
let defaultName = "Guest";

let finalName = name ?? defaultName;  // returns "Guest" because name is null
console.log(finalName); // "Guest"

let age = 0;
let defaultAge = 30;

let finalAge = age ?? defaultAge;  // returns 0 because age is not null or undefined
console.log(finalAge); // 0

//name ?? defaultName returns "Guest" because name is null.
//age ?? defaultAge returns 0, even though 0 is a falsy value, because ?? only considers null and undefined for the fallback.

*/


