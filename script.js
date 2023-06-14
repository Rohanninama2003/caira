
let NewArrival  = document.getElementsByClassName("fifa")[0];
let Trending = document.querySelector(".sec");
let Blopper = document.querySelector(".third");
console.log(NewArrival)
document.getElementsByClassName("popularb")[0].style.display="none";
document.getElementsByClassName("popularb")[0].style.opacity="0";
document.getElementsByClassName("popularc")[0].style.display="none";
document.getElementsByClassName("popularc")[0].style.opacity="0";

document.getElementsByClassName("populara")[0].style.display="flex";
document.getElementsByClassName("populara")[0].style.opacity="100";


NewArrival.addEventListener("click",()=>{
    
        document.getElementsByClassName("popularb")[0].style.display="none";
        document.getElementsByClassName("popularb")[0].style.opacity="0";
        document.getElementsByClassName("popularc")[0].style.display="none";
        document.getElementsByClassName("popularc")[0].style.opacity="0";

        document.getElementsByClassName("populara")[0].style.display="flex";
        document.getElementsByClassName("populara")[0].style.opacity="100";
       
})


Trending.addEventListener("click",()=>{
    document.getElementsByClassName("populara")[0].style.display="none";
    document.getElementsByClassName("populara")[0].style.opacity="0";
    document.getElementsByClassName("popularc")[0].style.display="none";
    document.getElementsByClassName("popularc")[0].style.opacity="0";
   
    document.getElementsByClassName("popularb")[0].style.display="flex";
        document.getElementsByClassName("popularb")[0].style.opacity="100";
})

Blopper.addEventListener("click",()=>{
    document.getElementsByClassName("populara")[0].style.display="none";
    document.getElementsByClassName("populara")[0].style.opacity="0";
    document.getElementsByClassName("popularb")[0].style.display="none";
    document.getElementsByClassName("popularb")[0].style.opacity="0";
    
    document.getElementsByClassName("popularc")[0].style.display="flex";
        document.getElementsByClassName("popularc")[0].style.opacity="100";
})
