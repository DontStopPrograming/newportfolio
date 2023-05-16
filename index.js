const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.nav-menu');
const barras = document.querySelectorAll('.ham span');
const navLinks = document.querySelectorAll('.nav-menu li')
const body = document.querySelector('body')

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras[0].classList.toggle('animado');
    barras[1].classList.toggle('animado');
    barras[2].classList.toggle('animado');
    ham.classList.toggle('girar');

});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        enlaces.classList.remove('activado')
        barras[0].classList.remove('animado')
        barras[1].classList.remove('animado')
        barras[2].classList.remove('animado')
        ham.classList.remove('girar')

        body.classList.toggle('menu-abierto')
    })
})
