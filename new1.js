//creating variables and checking if accessible inside and outside function
function func1()
{
        var my_name="Shefali";
        let age=25;
        const c=41.2;

        console.log(my_name);   //acccessible 
        console.log(age);         //accessible
        console.log(c);         //accessible

}

console.log(my_name);     //not accessible 
//console.log(age);      
//console.log(c);

func1();



/*

function func1()
{
    let a=10;
    var b=20;
    const c=30;


    }
    console.log(a,b,c);
    
   

let b=20;
if(b>10)
{
    let c=30;
    var d=40;
    const a=10;
    
}

console.log(d);






**

console.log(a);
var a=20;
output=undefined    bcoz global scope

console.log(a);
let a=20;
output=reference error

**Hoisting in javascript


**

                var	             let	                     const
Redeclaration: Allowed       Not allowed                  Not allowed
Reassigning: Allowed.        Allowed.	                  Not allowed 
Hoisting: Hoisted but        Hoisted but cannot           Hoisted but cannot be used 
                                                          before declared.
initialized as undefined.    be used before declared 	

Scope	Function-scoped.	Block-scoped (inside {}).	Block-scoped (inside {}).

*/



/*
Questions:

Q1. What is javascript. 
Q2. Advantages and disadvantages of it.
Q3. let var const difference.
Q4. What is hoisting.
Q5. What is excuetion context in javscript.
Q6.. What is call Stack in javascript.(it is just like stack in java)
(if will keep track which function is currently running)
suppose 2 functions given A and B 
example:
function A(){

}
function B(){
A();
B();    
//which function will run first  
In memory stack first B will go and iside B ,A go it will go.
First A will complete its exceution then only B will excute.

}

Q7.. What is fucntion.


*/






