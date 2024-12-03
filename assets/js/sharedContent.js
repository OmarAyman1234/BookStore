const headerContent = `
  <header class="navbar">
      <div class="navbar__logo logoContent">
        <img
          src="../../assets/images/logo.png"
          alt="Maktaba Logo"
          class="logo-img rotating"
        />
        <a href="/index.html"><span>Maktaba</span></a>
      </div>
      <nav class="navbar__menu">
        <a href="/index.html"> <i class="fas fa-home"></i> Home </a>
        <a href="../catalog/catalog.html">
          <i class="fas fa-book"></i> Catalog
        </a>
        <a href="../supportPages/aboutUs.html">
          <i class="fas fa-user"></i> About
        </a>
        <a href="../supportPages/contactUs.html">
          <i class="fas fa-envelope"></i> Contact
        </a>
        <a
            href="../supportPages/memberShipFeatures.html"
            class="membership-link"
            style="display: none"
          >
            <i class="fa-solid fa-fire"></i> Membership Features
          </a>
      </nav>
      <div class="navbar__auth">
        <a
          href="../login-register/login.html"
          id="signInBtn"
          class="btn btn--secondary"
          >Login</a
        >
        <a
          href="../login-register/signup.html"
          id="signUpBtn"
          class="btn btn--primary"
          >Sign Up</a
        >

        <!-- Avatar for signed-in users -->
        <div class="navbar__profile" id="userAvatar">
          <a href="../user-dashboard/userDashboard.html" class="navbar__avatar"
            ><i class="fas fa-user"></i
          ></a>

          <div class="navbar__dropdown">
            <a href="../user-dashboard/userDashboard.html">
              <i class="fas fa-user"></i> Profile
            </a>
            <a href="../login-register/login.html" id="logoutBtn">
              <i class="fas fa-sign-out-alt"></i> Logout
            </a>
          </div>
        </div>
      </div>
      <div class="navbar__toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
`;

const footerContent = `
  <footer class="footer">
      <div class="footer__grid">
        <div class="footer__about">
          <div class="footer__logo logoContent">
            <img
              src="../../assets/images/logo.png"
              alt="Maktaba Logo"
              class="logo-img rotating"
            />
            <span>Maktaba</span>
          </div>
          <p>Maktaba is your gateway to authentic Islamic knowledge</p>
        </div>
        <div class="footer__links">
          <h4>Quick Links</h4>
          <a href="/index.html">Home</a>
          <a href="../catalog/catalog.html">Catalog</a>
          <a href="../supportPages/aboutUs.html">About</a>
          <a href="../supportPages/contactUs.html">Contact</a>
        </div>
        <div class="footer__contact">
          <h4>Contact Us</h4>
          <p>Email: info@maktaba.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div class="footer__social">
          <h4>Follow Us</h4>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; 2024 Maktaba. All rights reserved.</p>
      </div>
    </footer>
`;

// Insert the header and footer content into the pages
(function insertHeaderFooter() {
  document.getElementById('header').innerHTML = headerContent;
  document.getElementById('footer').innerHTML = footerContent;
})();

const navbarToggle = document.querySelector(".navbar__toggle");
const navbar = document.querySelector(".navbar");

navbarToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

const isSignedIn = localStorage.getItem("isSignedIn") === "true";
const isMember = localStorage.getItem("isMember") === "true";

if (isSignedIn) {
  const signInBtn = document.getElementById("signInBtn");
  const signUpBtn = document.getElementById("signUpBtn");
  const userAvatar = document.getElementById("userAvatar");

  signInBtn.style.display = "none";
  signUpBtn.style.display = "none";
  userAvatar.style.display = "inline-block";
}

if (isMember) {
  const membershipLink = document.querySelector(".membership-link");

  membershipLink.style.display = "inline-block";
}

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener('submit', () => {
  const nameInput = document.getElementById('name').value.trim();
  
  // Regular expression to allow only letters and spaces
  const namePattern = /^[a-zA-Z\s]+$/;
  
  if (!namePattern.test(nameInput)) {
      event.preventDefault(); // Prevent form submission
      alert('Name must contain only letters and spaces. Please try again.');
  }
})