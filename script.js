

let btn=document.getElementById("btn");
let h1=document.getElementById("h1");
let input=document.getElementById("in");
console.log(input)
let ch=0;
var store;
function cat(ch){
  input.value+=ch;
    console.log(input);
   
}
function easy(){
   if(input.value=="cat"){
    h1.innerText="correct";
    h1.style.backgroundColor="red";
   }else if(input.value=="eat"){
    
    h1.innerText="correct"
    h1.style.backgroundColor="red";
   }else if(input.value=="start"){

    h1.innerText="correct"
    h1.style.backgroundColor="red";
   }else if(input.value=="rat"){
    h1.innerText="correct"
    h1.style.backgroundColor="red";
   }else{
    h1.innerHTML="wrong";
   }
}
btn.addEventListener("click",function(){
    easy()
})
