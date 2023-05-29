const firstProjects = document.querySelector('first-projects')
const titleWeather = document.getElementById('title-weather')

firstProjects.addEventListener('mouseover', function(){
    titleWeather.classList.add('opacity-zero')
    
})

firstProjects.addEventListener('mouseout', function(){
    titleWeather.classList.remove('opacity-zero')
    
    
})