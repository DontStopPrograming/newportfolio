 let skill = document.querySelector('.skills')
 let css = document.querySelector('.css')
 let speed = 5
 let speed3 = 3

 window.addEventListener('scroll', () => {
    let currentPosition = window.pageYOffset
    skill.style.transform = `translateX(${currentPosition / speed}px)`
    css.style.transform = `translateX(${currentPosition / speed3}px)`
 })
  
