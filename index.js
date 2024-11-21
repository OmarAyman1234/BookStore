<<<<<<< HEAD
=======
import { generateHeader, generateFooter } from "/scripts/headerFooter.js";

generateHeader();
generateFooter();

>>>>>>> 8a2df227e0b8dafe83684fb313de77eff23a435c
const navbarToggle = document.querySelector('.navbar__toggle');
const navbar = document.querySelector('.navbar');

navbarToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

