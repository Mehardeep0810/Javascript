/*
Synchronous

//javascriptis single threaded but can be used for multi tasking by using asynchronous programming
//This code will execute line by line
console.log("This is starting of a program");
for(let i=1;i<=10000;i++)
{
    console.log("This is a sychronous program");
}
console.log("This is the end of program");

//page-> setinterval-> use dom background should change randomly after 2 seconds-> add a button in centre of page-> on button write stop interval and  use shadow box know about it and its all 4 parameters -> add eveent listener on button-> when click on button -> rgb value of the current color should display above and the changing of colors should stop.
//maths.random
*/
// Asynchronous
console.log("This is an asynchronous program");
setTimeout(()=>{
    console.log("This is an setTimeout function");
},0)
//The setTimeout function will run at the last no matter what (it doesn't depend on time) this is because the setTimeout function is not a part of javascript therefore it is sent to web apis after which it is send to the que. when the javascript code executes completely the setTimeout function is called from the callback que and then it is executed
for(let i=1;i<100;i++){
    console.log("*****")
}
console.log("This is a end of a program");
//This is an example of both synchronous and asynchronous the for loop is running in synchronous mode and prints next message after running 99 times.

//pyramid of doom or callback_hell
// first function works as parent 

//promises are used to reduce dependencies. it uses ojects to store copies of the data

const item=["shirts","shoes","rings","pants"]
//1. create order
//2. proceed to payment
//3. summary
//4. wallet update

api.createorder(function(){
    api.ProceedPayment(function(){
        api.summary(function(){
            api.walletUpdate()
        })
    })
})
//these are continous callback functions
//to tackle this situation promises were found
//callback hell with events

//promises
// the concept of promises came for the communication between the server and the client
// a promise is an object. we use it to store values on temporory base. pending resolve reget are the 3 states of promises.
//pending state -> undefined state
//two arguments are passed:
// resolved: when the promise is fullfilled
// reject: when the promise is rejected by the server
