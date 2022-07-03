// Making Hamburger Menu Functional

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
})

document.querySelectorAll("nav_list").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}))


// Making the transition in FAQ Section possible
const container = document.querySelector('.faq2-top-text')
const container1 = document.querySelector('.faq2-top-text2')
const box = document.querySelector('.faq2-box-cont')
const box1 = document.querySelector('.faq2-box-cont2')
const icon = document.querySelector('#icon')
const icon1 = document.querySelector('#icon1')


container.addEventListener('click', () => {
    
    icon.classList.toggle('click')

    if (box.style.display === 'block') {
        box.style.display = 'none'
    } else {
        box.style.display = 'block'
    }
           
})

container1.addEventListener('click', () => {

    icon1.classList.toggle('click')

    if (box1.style.display === 'block') {
        box1.style.display = 'none'
    } else {
        box1.style.display = 'block'
    }
    
})
