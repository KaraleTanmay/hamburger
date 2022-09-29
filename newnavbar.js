const navbar = document.querySelector(".nav-bar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
})

document.querySelectorAll(".navitem").forEach(n => {n.addEventListener("click",()=>{
    hamburger.classList.remove("active")
    navbar.classList.remove("active")
})
    
});