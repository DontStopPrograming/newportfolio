const ham = document.querySelector('.ham')
const enlaces = document.querySelector('.nav-menu')

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado')
})