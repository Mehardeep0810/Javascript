 /*1. call back function
var arr=[1,2,3,4,5,6,7,8];
arr.forEach(myfunc); // function call
function myfunc(val,index,arr) {
    console.log(val);
}
 var arr=[1,2,3];
arr.forEach(function(val,index,arr)
 { 
    console.log(val); 
} )//should be used for silngle line code not multiple // this is an example of annonymous function
 arrow function

const add=((a,b)=>{
      return a+b;
})
console.log(add(3,4));
/*const add=(a,b)=>a+b;
const a=2;
const b=3;
const sum= add(a,b);
console.log(sum);
// reduce function
let arr=[1,2,3];
newarr=arr.reduce((prev,curr)=>{
    return prev>curr? prev: curr;
})
console.log(newarr);*/ 

/*let arr=[1,2,3];
let sum=0;
arr.forEach((val) => {
    sum=sum+val;
});
console.log(sum);

let arr1 =[1,2,3,4]
let arr2= arr1.map((val,index,arr) =>{return val*2});
console.log(arr1);
console.log(arr2);
 
let arr3 =[1,2,3,4]
let arr4= arr1.filter((val,index,arr) =>{ if(val%2==0)
    return val});
console.log(arr3);
console.log(arr4);

let arr5 =[1,2,3,4]
let arr6= arr5.reduce((accu, val,index,arr) =>{ //acc is another variable for storing the result of addition of first 2 elements.
    return accu+ val});
console.log(arr5);
console.log(arr6);

let arr11 =[1,111,222,1111];
arr11.sort();
console.log(arr11);
arr11.sort(function(a,b){return a-b});
console.log(arr11);
 //rest parameter for n number of arguments and it will always be assigned with the last parameter can be implemented when we need n number of arguments in an array
 function rest(x,...y)
 {
    console.log(x);
    console.log(y);
 }
 rest(1,2,3,4);//1 is assigned to x , rest is assigned to y
 // Nested function will be used in closures
 function myfunc(){
    console.log("First function")
    function yourfunc()
    {
console.log("Second functionn");
    }
    yourfunc();
 }
 myfunc();
 //closures
 function myfunc(){
    let a = 40;
    console.log("First function")
    console.log(b);
    function yourfunc()
    {
        let b=1;
        console.log (a);
console.log("Second function");
    }
    yourfunc();
 }
 myfunc();
 // the inner function can call the variable of outter function.but the outter function cannot call the value of inner function
 // difference between higher order and call back functions*/
 

 
