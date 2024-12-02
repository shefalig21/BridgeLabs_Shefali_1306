/*
Promise: A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. 
Promises is used for handling asynchronous tasks.

A promise can be in one of three states:
1. Pending: Initial state, neither fulfilled nor rejected.
2. Fulfilled: The operation completed successfully, and the promise has a value.
3. Rejected: The operation failed, and the promise has a reason (error).

Syntax:

const promise=new Promise((resolve,reject))=>{
    if(operation successfull)
{
    resolve("Success");
    }
    else{
    reject("Error");
    }

    };

    basically promise is an object,which have a function with 2 arguments: resolve and reject when condition successfull and other when failed.

*/
//example:

const isEvenNo=(number)=>
{
    return new Promise((resolve,reject)=>{
        if(number%2==0)
        {
            resolve(" Is even");
        }
        else{
            reject("Is odd");

        }
    });

};

isEvenNo(4)
.then((message)=>{
    console.log(message);   //Is even

})
.catch((error)=>{
    console.log(error);    //Won't run for this input

});

/*
.then() and .catch() are methods used to handle the resolved and rejected states of a promise.

.then():
used to handle the successfull resolution of promise.
It is triggered when the resolved function is called inside the promise.

.catch():
It is used to handle the rejection of a promise.
It is triggered when the reject function is called or an error occurs in the promise.

*/


