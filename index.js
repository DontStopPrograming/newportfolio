const ham = document.querySelector('.ham')
const enlaces = document.querySelector('.nav-menu')
const xIcon = document.querySelector('.x-icon')

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado')

    if(enlaces.classList.contains('activado')){
        xIcon.textContent = 'X'
    } else {
        xIcon.textContent = ''
    }
})