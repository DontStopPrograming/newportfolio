const description = document.getElementById('title-icons')
const icons = document.querySelector('.icons')

function addGlow() {
    description.classList.add('glowingTech')
    icons.classList.add('colorDark')
}

function removeGlow(){
    description.classList.remove('glowingTech')
    icons.classList.remove('colorDark')
}