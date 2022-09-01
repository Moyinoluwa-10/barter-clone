// Making Hamburger Menu Functional

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navlinks');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


// Adding Light and Dark Mode Functionality

const dark = document.getElementById("circle2");
const light = document.getElementById("circle1");

dark.addEventListener("click", () => {
    document.body.classList.add("dark");
})

light.addEventListener("click", () => {
    document.body.classList.remove("dark");
})
