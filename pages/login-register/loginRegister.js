const form = document.getElementById('loginForm');

form.addEventListener("submit", (e) => {
  e.preventDefault()

  localStorage.setItem("isSignedIn", "true");

  updateUI();

  window.location.href = "home.html";
});

// document.getElementById('sign-in-btn').addEventListener('click', () => {
//   const formContent = document.getElementById('form-content');
//   formContent.innerHTML = `
//     <h2>Login</h2>
//     <input type="text" placeholder="Email" name="email" required>
//     <input type="password" placeholder="Password" name="password" required>
//     <button type="submit" class="btn btn--primary">Sign In</button>
//   `;
// });

// document.getElementById('sign-up-btn').addEventListener('click', () => {
//   const formContent = document.getElementById('form-content');
//   formContent.innerHTML = `
//     <h2>Sign Up</h2>
//     <input type="text" placeholder="Full Name" name="name" required>
//     <input type="text" placeholder="Email" name="email" required>
//     <input type="password" placeholder="Password" name="password" required>
//     <input type="password" placeholder="Confirm Password" name="confirm-password" required>
//     <button type="submit" class="btn btn--primary">Sign Up</button>
//   `;
// });
