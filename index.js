const navbarToggle = document.querySelector('.navbar__toggle');
const navbar = document.querySelector('.navbar');

navbarToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
