// Get the navbar toggle button and navbar
const navbarToggle = document.querySelector('.navbar__toggle');
const navbar = document.querySelector('.navbar');

// Add an event listener to toggle the navbar visibility
navbarToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');  // Add/remove the active class on click
});
