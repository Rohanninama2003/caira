
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


document.getElementsByClassName("fifa")[0].style.borderBottom = "3px solid red";
document.getElementsByClassName("sec")[0].style.textDecoration = "none";
document.getElementsByClassName("third")[0].style.textDecoration = "none";


NewArrival.addEventListener("click",()=>{
    
        document.getElementsByClassName("popularb")[0].style.display="none";
        document.getElementsByClassName("popularb")[0].style.opacity="0";
        document.getElementsByClassName("popularc")[0].style.display="none";
        document.getElementsByClassName("popularc")[0].style.opacity="0";

        document.getElementsByClassName("populara")[0].style.display="flex";
        document.getElementsByClassName("populara")[0].style.opacity="100";


       document.getElementsByClassName("fifa")[0].style.borderBottom = "3px solid red";
      
       document.getElementsByClassName("sec")[0].style.borderBottom = "none";
       document.getElementsByClassName("third")[0].style.borderBottom = "none";
})


Trending.addEventListener("click",()=>{
    document.getElementsByClassName("populara")[0].style.display="none";
    document.getElementsByClassName("populara")[0].style.opacity="0";
    document.getElementsByClassName("popularc")[0].style.display="none";
    document.getElementsByClassName("popularc")[0].style.opacity="0";
   
    document.getElementsByClassName("popularb")[0].style.display="flex";
        document.getElementsByClassName("popularb")[0].style.opacity="100";

        document.getElementsByClassName("fifa")[0].style.borderBottom = "none";
        document.getElementsByClassName("sec")[0].style.borderBottom = "3px solid red";
        document.getElementsByClassName("third")[0].style.borderBottom = "none";
})

Blopper.addEventListener("click",()=>{
    document.getElementsByClassName("populara")[0].style.display="none";
    document.getElementsByClassName("populara")[0].style.opacity="0";
    document.getElementsByClassName("popularb")[0].style.display="none";
    document.getElementsByClassName("popularb")[0].style.opacity="0";
    
    document.getElementsByClassName("popularc")[0].style.display="flex";
        document.getElementsByClassName("popularc")[0].style.opacity="100";

        document.getElementsByClassName("fifa")[0].style.borderBottom = "none";
        document.getElementsByClassName("sec")[0].style.borderBottom = "none";
        document.getElementsByClassName("third")[0].style.borderBottom = "3px solid red";
})
