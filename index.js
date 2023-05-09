const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.nav-menu');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras[0].classList.toggle('animado');
    barras[1].classList.toggle('animado');
    barras[2].classList.toggle('animado');
    ham.classList.toggle('girar');
});

