let html = document.querySelector('.html');
let javascript = document.querySelector('.javascript')

let speed1 = 1.5
let speed2 = .5


window.addEventListener('scroll', () => {
  let currentPosition = window.pageYOffset;
  html.style.transform = `translateX(-${currentPosition / speed1}px)`;
  javascript.style.transform = `translateX(-${currentPosition / speed2}px)`

  
});
