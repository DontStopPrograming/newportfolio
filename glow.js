function addGlow(container) {
    const descriptions = container.querySelectorAll('.title-icons');
    const icons = container.querySelectorAll('.icons');
    descriptions.forEach((description) => {
      description.classList.add('glowingTech');
    });
    icons.forEach((icon) => {
      icon.classList.add('colorDark');
    });
  }
  
  function removeGlow(container) {
    const descriptions = container.querySelectorAll('.title-icons');
    const icons = container.querySelectorAll('.icons');
    descriptions.forEach((description) => {
      description.classList.remove('glowingTech');
    });
    icons.forEach((icon) => {
      icon.classList.remove('colorDark');
    });
  }
  