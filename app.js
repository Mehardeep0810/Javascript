
async function myfun(){
   let res= await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
   //console.log(res);
   let data = await res.json();
   console.log(data);
   let ans=document.getElementById("one");
//    console.log(ans);
//    ans.innerText="Mehar";
ans.innerText=data.disclaimer;

let ans2=document.getElementById("two");
ans2.innerText=data.bpi.USD.rate;
}
myfun();
