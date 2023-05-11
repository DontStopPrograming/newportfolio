 let skill = document.querySelector('.skills')
 let speed = 5

 window.addEventListener('scroll', () => {
    let currentPosition = window.pageYOffset
    skill.style.transform = `translateX(${currentPosition / speed}px)`
 })
  
