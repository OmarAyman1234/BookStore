const navbarToggle = document.querySelector('.navbar__toggle');
const navbar = document.querySelector('.navbar');

navbarToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector(".btn--secondary");
  const signUpButton = document.querySelector(".btn--primary");
  const navbarAuth = document.querySelector(".navbar__auth");
  const navbarProfile = document.querySelector(".navbar__profile");

  // Simulate login
  loginButton.addEventListener("click", () => {
    navbarAuth.classList.add("logged-in"); // Add the logged-in class
  });
});
