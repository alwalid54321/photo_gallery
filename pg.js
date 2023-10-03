// Photo gallery 
 
// Get all gallery items
const galleryItems = document.querySelectorAll('.col-xl-3'); 
  
// Add click event to each item
galleryItems.forEach(item => {
  item.addEventListener('click', e => {
    // Add/remove active class
    item.classList.toggle('active');
  });
});
 

// Footer

// Get footer container 
const footer = document.createElement('footer');

// Add content
footer.innerHTML = `

`;

// Add to end of page
document.body.appendChild(footer);