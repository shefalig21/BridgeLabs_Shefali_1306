//Arrow Function:is a concise way to write functions in javascript,introduced in ES6.It uses the => syntax,which simplifies the function declaration and avoid the need for the function keyword.

//Normal function:
function add(a,b)
{
    return a+b;
}

console.log(add(5,3));

//Arrow function:
const add1=(a,b)=>a+b;
console.log(add1(5,3));

//Different ways to use arrow function:
//1. Single Line arrow function: If function contains only single expression we can avoid using {} and return keyword.
//example:

const add2=(a,b)=>a+b;
console.log(add2(5,3));

//2. Multi-line arrow function: If the fucntion has multiple lines or complex logic use {} and return keyword.
//example.

const max=(a,b,c)=>{
    const result=Math.max(a,b,c);
    return result;
};

console.log(max(5,3,12));

//3. Arrow function with default parameters: we can provide default values for the parameters.
//example:


const add3=(a=0,b=0)=>a+b;
console.log(add3(5,3));     //8 
console.log(add3(5));    //5 (b deafult value is zero)

