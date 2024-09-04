console.log(a);
console.log(b);

var a=10;
function fun()
{
    console.log("Hello world")
}

var b=10;

//when code runs for the run time it makes a global execution context
//code runs in two phases:
// //1. Memory creation
// -> value is given at run time so here so a=4 will not get value but get undefined
//-> fun code will be pasted as it is 
// -> value of b is also given at run time so it is undefined for now
// //2.code execution
//console.log(a) will serach memory for value. value in memory for a is undefined 
//-> when function is called a local execution context is created which also has two phases:
//1. memory creation
//->we are not declaring anything so no memory is alocated
//2. code execution
//-> console.log("hello world ") will be executed
 
//q. 
var a=10;
function foo()
{
    console.log(a);
    var a=20;
    function foo2()
    {
        a++;
        console.log(a);
        var a=30
    }
    foo2();
}
foo();

// in let hoisting is possible but any default memeory or initialising 
//temporaly dead zone-> let and const variables which have not been initialised