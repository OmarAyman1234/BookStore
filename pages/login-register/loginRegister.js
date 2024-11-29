const form = document.getElementById('loginForm');

form.addEventListener("submit", (e) => {
  e.preventDefault()

  localStorage.setItem("isSignedIn", "true");

  window.location.href = "/BookStore/index.html";
});