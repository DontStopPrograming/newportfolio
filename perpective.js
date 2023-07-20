 const sectionOne = document.querySelector('.sectionOne');

 sectionOne.addEventListener('mousemove', (event) => {
   const rect = sectionOne.getBoundingClientRect();
   const centerX = rect.left + rect.width / 2;
   const centerY = rect.top + rect.height / 2;
   const mouseX = event.clientX;
   const mouseY = event.clientY;

   sectionOne.style.setProperty('--mouseX', mouseX);
   sectionOne.style.setProperty('--centerX', centerX);
   sectionOne.style.setProperty('--mouseY', mouseY);
   sectionOne.style.setProperty('--centerY', centerY);
 
 
  });


