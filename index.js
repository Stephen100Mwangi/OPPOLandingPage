let buySamsung = document.querySelector("#buySamsung");

let buyOPPO = document.querySelector("#buyOPPO");

let slitLeft = document.querySelector(".left")
let slitRight = document.querySelector(".right");

buyOPPO.addEventListener("mouseover",()=>{
    slitRight.classList.toggle("activeLeft")
    });
buySamsung.addEventListener("mouseover",()=>{
    slitLeft.classList.toggle("activeRight")
    });