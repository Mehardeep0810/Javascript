//basic structure for creating promise
//->new Promise(function(resolve, reject) {})
//consume promise more create less
//three states of promise pending -> till resolve and reject are not defined. fulfill and reject
// promise is an object whose intitial value is undefined 

// p.then(resolve_def,reject_def)//where we write definaitions for resolve and reject
// //another way is:
// p.then(resolve_def.catch(reject_def))

let kyavaddaPuraHua=false;

let p= new Promise(function(resolve, reject) {
    setTimeout(function() {
    if(kyavaddaPuraHua){
        resolve("ha")
    }
    else{
        reject("nhi")
    }
},1000)
})

//then is used to use 2 callback values one for resolve other for error we write catch after then if we want to take 1 callback value
//consuming Promise:
p.then(function(msg){
    console.log("Message",msg)
},(error)=>{
    console.log("Error!")
})
//or you can write the error one as the upper function too:
p.then(function(msg){
    console.log("Message",msg)
},function(error){
    console.log("Error!")
})
//if we are using one callback function
p.then(function(msg){
    console.log("Message",msg)
})
p.catch(function(error){
    console.log("Error!")  
})

//question1
let condition= false;
let result= new Promise(function(resolve,reject){
setTimeout(function(){
    if(condition)
    {
        resolve("Yes!")
    }
    else{
        reject("No!")
    }
})
})

result.then(function(msg){
    console.log("Message",msg)
})
result.catch(function(error){
    console.log("Error!")
})
//check by writing console.log(result) on console

//creating promise in function
function maggiBnnaHai(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let dukkanKhuliHai=false;
            if(dukkanKhuliHai)
            {
                resolve("Maggi Mil Gyi")
            }
            else{
                reject("Maggi Nhi Mili")
            }
        },2000)
    })
}
//calling
maggiBnnaHai()
.then(function(maggi){
    console.log(maggi);
})
.catch(function(error){
    console.log(error);
})

//question 2
//if (url.endsWith(".mp4"))
//if mp4 -> download starts otherwise fail

//for lp-2
let Url = "myurl.com/avengers.mp4"
function download(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(Url.endsWith(".mp4")){
            let xyz = false;
            if(xyz)
            {
                resolve("Downloaded")
            }
            else{
                reject("Not able to download")
            }
            }
        },2000)
    })
}
download()
.then(function(msg){
    console.log(msg);
})
.catch(function(error){
    console.log(error);
})

//sir's solution
function downloadMovie(url){
    return new Promise(function(resolve,reject){
        let ext = url.split("/").pop().split(".").pop();
        if (ext !== "mp4"){
            reject("Incorrect URL")
        }
        else{
            setTimeout(function(){
                resolve(url.split("/").pop());

        },2000)
    }
})
}
downloadMovie("myurl.com/avengers.mp4")
.then(function(movie){
    console.log(movie)
})
.catch(function(error){
    console.log(error)
})