let htm = document.querySelector('.html');
let speed2 = 5;

window.addEventListener('scroll', () => {
  let currentPosition = window.pageYOffset;
  htm.style.transform = `translateX(-${currentPosition / speed}px)`;
});
