const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
const sectionSix = document.querySelector('.sectionSix');

const containerTitle = document.querySelector('.container-title-sectionSix')
const correo = containerTitle.querySelector('.correo img')
const hTwo = containerTitle.querySelectorAll('h2')

inputs.forEach((input) => {
  input.addEventListener('focus', () => {
    sectionSix.classList.add('dark-bg');
    input.style.transform = 'scale(1.2)';
    input.style.fontSize = '1.2em'
    input.style.color = '#f0f0f0'
    applyBlurFilter()
    correo.style.backgroundColor = 'transparent'
    correo.style.filter = 'invert(100)'
    
  });

  input.addEventListener('blur', () => {
    sectionSix.classList.remove('dark-bg');
    input.style.transform = 'scale(1)';
    input.style.transform = '1em'
    
    
    removeBlutFilter()
    correo.style.backgroundColor = '#9167fa'
    correo.style.filter = 'none'
  });
  
});

document.addEventListener('click', (event) => {
  const isInput = Array.from(inputs).some((input) => input.contains(event.target))
  if(!isInput){
    inputs.forEach((input) => {
      input.blur()
    })
    removeBlurFilter()
    correo.style.backgroundColor = ''
    correo.style.filter = 'none'
    
    
  }
})

function applyBlurFilter() {
  hTwo.forEach((h) => {
    h.style.filter = 'blur(4px)'
    h.style.transition = 'filter 2s ease-in'
    correo.style.transition = '1s ease-in'
  })
}

function removeBlutFilter() {
  hTwo.forEach((h) => {
    h.style.filter = 'none'
    h.style.transition = 'filter 2s ease-in'
    correo.style.transition = '1s ease-in'
  })
  
}
