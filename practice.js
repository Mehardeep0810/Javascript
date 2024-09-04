/*#forEach annonymous
let arr=[1,2,3,4];
arr.forEach(function fun (val){
console.log(val);
})
#forEach arrow function
let arr1=[1,2,3,4];
arr.forEach((val)=>{
console.log(val);
})
#map function
let arr2=[1,2,3,4];
let arr3=arr2.map((val)=>{
console.log(val);
})
let arr=[1,2,3];
let sum=0;
arr.forEach((val) => {
    sum=sum+val;
});
console.log(sum);
let arr1=[8,5,3,2];
arr1.sort(function fun(a,b){return a-b});
co;nsole.log(arr1);
console.log(name);
let name="Ram";
console.log(name);
//closures
 function happy (){
    let a = 20;
    console.log(a);
    function sad(){
        let b=10;
        console.log(a);
    }
    sad();
 }
 happy();
 let data = {
    fullname:{
        id: 123
    },
    firstname:"Mehar",
    lastname:"kaur"
 }
 console.log(data.fullname.id);

 let ob1 ={
    a: "happy",
    b: "joy",
 }
 let ob2 = { // this is called nested object but in reality it is a method of object
    c:"sad",
    d:"angry"
 }
 let ob3 = Object.assign(ob1,ob2)
 console.log(ob3);

 let arr = [
     {
        id: 1234,
        name: "mehar"
    },
    {
        id: 3421,
        name: "jasnoor"
    }
 ];
 console.log(arr[1].name);
 console.log(Object.keys(arr))
 console.log(Object.entries(arr));
 
 const course ={
    coursename: "frontend",
    courseinstructor: "abc"
 }
 console.log(course.courseinstructor.coursename);//we cannot do it therefore we use reconstructoring 
const {courseinstructor: instructor} = course;// renaming of the key , reassigning the object, the object remains same but we make a copy of it so that the original remains the same and we can perform the changes on the copy.
console.log(instructor)*/
const course ={
    coursename: "frontend",
    courseinstructor: "abc"
 }
 console.log(course. courseinstructor.coursename)