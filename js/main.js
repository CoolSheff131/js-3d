const burger = document.querySelector('.burger')
const container = document.querySelector('.container')
const screens = document.querySelectorAll('.screen')
burger.addEventListener('click',()=>{
    container.classList.toggle('active')
})
