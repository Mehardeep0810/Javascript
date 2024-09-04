// setTimeout functions, setInterval, clearInterval function,clearTimeout function
//these functions are not functions of javascript . These functions are defined browser-> window object->web api(defined)
//in javascript eventhandling is also defined in web api. These are not part of javascript
//synchronous -> line by line

//asynchronous ->the process that needs more time is pushed to the queue and when the execution is completed
//before the asynchronous function the website would lag a lot when the code is lengthy
//javascript->executes code line by line->the code which is not known will be sent to apis=> apis find solution and send it to queue->the code is pushed when the javascript completly executes the code
//synchronous->callback->promises->asynchronous



//example of callback function
function mehar(){
    console.log(abc);
}
function jasnoor(){
    console.log(def);
}
mehar()
jasnoor()
mehar(jasnoor)


//setTimeout function is (asynchronous).create a delay(waiting).It takes dely in mili seconds. eg when the websites show sign up page when we view a site
function hello(){
    console.log("This is Settimeout function");
    }
    //setTimeout()//self defined function that take two parameters 1. function->callback function 2. delay->how much wait we want
    setTimeout(hello,2000)// this is the callback function in place of this if we create a function we call it back like hi(hello)
    //when you execute this code, it will show a number that is a self generated id
    //1000ms=1sec

//setTimeout() using arrow function. This is followed more
setTimeout(()=>{
console.log("This is Settimeout function");
},2000)
clearTimeout()
console.log("hiiii")
//when you dont store setTime in a variable cleartimeout wont work

console.log(1)
const a=
setTimeout(()=>{
    console.log("This is Settimeout function");
    },2000)
    clearTimeout(a)//it will stop the execution of the code written in setTimeout function
    console.log("hiiii")
 //setinterval() creates interval and after interval prints output in continuous manner
    setInterval(()=>{
        console.log("This is Settimeout function");
        },2000)
        clearTimeout()
        console.log("hiiii")
//clearInterval()
console.log(1)
const b=
setInterval(()=>{
    console.log("This is Settimeout function");
    },2000)
    clearInterval(b)//it will stop the execution of the code written in setTimeout function
    console.log("hiiii")
 let j=0;
    let m =
    setInterval(()=>{
        j++;
        console.log(j);
        },2000);
    if(j==3){
            clearInterval(m);
        }

let count=0;
const result= setInterval(()=>{
    count++;
    console.log(`count: ${count}`);
    if(count>=3)
    {
clearInterval(result);
console.log("Execution stopped after 3 times");
    }
},1000);
