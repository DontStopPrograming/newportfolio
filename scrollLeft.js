 let skill = document.querySelector('.skills')
 let css = document.querySelector('.css')
 let speed = 3
 let speed3 = .5
 

 window.addEventListener('scroll', () => {
    let currentPosition = window.pageYOffset
    skill.style.transition = 'transform 0.3s ease'
    skill.style.transform = `translateX(${currentPosition / speed}px) perspective(1000px) rotateX(-2deg) rotateY(40deg) scaleX(0.9) scaleY(1.01)`
    css.style.transform = `translateX(${currentPosition / speed3}px)`
    
 })
  
/* transition: transform 0.3s ease;
    transform-origin: center left;

    
} .wel h1:hover {
    transform: scaleX(0.9) scaleY(1.01); */