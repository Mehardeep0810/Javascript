//callback hell
console.log("Starting")
for(i=0;i<=3;i++){
    var a=10;
    console.log(b);//undefined
    console.log("loop is working");
}
setTimeout(function(){
    var b =20;
    console.log(a);
    console.log("set timeout is working");
},2000)
console.log("End")


//function 1:
function fetchApiData(callback1){
    setTimeout(function()  {
        console.log("Fetching Api Data...")
        var data={d1 : "Some data from api is present"};
        callback1(data)
    }, 1000);
}
//function 2:
function processApiData(data,callback2){
    setTimeout(function(){
        console.log("Processing Api Data!")
        var processData = data.d1.toUpperCase();
        callback2(processData);
    },1000)
}
//function 3:
function displayApiData(processData){
    setTimeout(function(){
        console.log("Data is being displayed")
        console.log(processData);
    },1000)
}
//fetchApiData->processData->displayData
//callback hell is created here:
fetchApiData(function(data){
    processApiData(data,function(processedData){
        displayApiData(processedData);
    })
})

