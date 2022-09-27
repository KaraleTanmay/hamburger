const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}))

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})
