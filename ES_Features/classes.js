/*
Class Implementation
Class: are blueprint for creating objects,introduced in ES6.

The constructor method is a special method used for intilalizing objects created with a class.
It's called automatically when a new instance of the class is created.


*/


class Emp{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
        
    }
}

const emp1=new Emp("Shefali",21);
console.log(emp1.name);
console.log(emp1.age);
