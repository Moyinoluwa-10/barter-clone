// Making Hamburger Menu Functional

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const blank = document.getElementById('blank')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    blank.style.display = 'block'
    disappear()
})

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    blank.style.display = 'none'

}))


function disappear() {
    hamburger.addEventListener("click", () => {
        blank.style.display = 'none'
        show() 
    })
}

function show() {
    hamburger.addEventListener("click", () => {
        blank.style.display = 'block'
        disappear()
    })
}