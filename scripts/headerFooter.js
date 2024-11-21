export function generateHeader() {
  let header = `
    <div class="navbar__logo logoContent">
      <img
        src="../../assets/images/logo.png"
        alt="Maktaba Logo"
        class="logo-img rotating"
      />
      <span>Maktaba</span>
    </div>
    <nav class="navbar__menu">
      <a href="/pages/book-details/bookDetails.html" class="active">Home</a>
      <a href="/pages/catalog/catalog.html">Catalog</a>
      <a href="/pages/user-dashboard/userDashboard.html">About</a>
      <a href="/pages/borrow-reserve/borrowReserve.html">Contact</a>
    </nav>
    <div class="navbar__auth">
      <button class="btn btn--secondary">Login</button>
      <button class="btn btn--primary">Sign Up</button>
    </div>
    <div class="navbar__toggle">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;

  document.querySelector(".navbar").innerHTML = header;
}

export function generateFooter() {
  let footer = `
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
          <a href="./index.html">Home</a>
          <a href="./pages/catalog/catalog.html">Catalog</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
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
  `;

  document.querySelector(".footer").innerHTML = footer;
}
