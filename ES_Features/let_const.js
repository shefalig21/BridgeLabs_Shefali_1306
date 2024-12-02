//let keyword(value can be modified but variable cannot be re=declared and block scoped)

let marks=20;  //variable declaration
marks=50;   //Re-assigning value

console.log(marks);      //50
function myFunc1()
{
    let marks=75;
    console.log(marks);    //75
}
myFunc1();   //calling function
console.log(marks);   //50

//const keyword(can neither be re-declared nor update and block scoped)

const pi=3.14;
//pi=3.1415   (will give error as variable declared using const keyword cannot change its value)
console.log(pi);     //3.14

function myFunc2()
{
    const pi=3.1415;
    console.log(pi);     //3.1415

}

myFunc2();
console.log(pi);     //3.14

