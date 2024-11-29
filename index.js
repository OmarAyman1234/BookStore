import { books } from "./data.js";

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
  const becomeMemberSection = document.getElementById("become-member");

  membershipLink.style.display = "inline-block";
  becomeMemberSection.style.display = "none";
}

const searchInput = document.getElementById("searchInput");
const searchTags = document.getElementById("searchTags");
const searchResults = document.getElementById("searchResults");

// Function to display search results
function displayResults(results) {
  searchResults.innerHTML = ""; // Clear previous results
  searchResults.style.padding = "1.5rem";

  if (results.length === 0) {
    searchResults.innerHTML = "<p>No results found.</p>";
    return;
  }

  let resultsHTML = "";

  results.forEach((item) => {
    const resultHTML = `
      <div class="result-item">
        <div class="result-item__image">
          <img src="./assets/images/${item.image || "book.png"}" alt="${
      item.name
    }" />
        </div>
        <div class="result-item__info">
          <h4>${item.name}</h4>
          <p class="author">By: ${item.author}</p>
          <span class="topic-tag">${item.category}</span>
          <button class="view-details-link" data-button-id="${
            item.id
          }">View Details</button>
        </div>
      </div>
    `;

    resultsHTML += resultHTML;
  });

  searchResults.innerHTML = resultsHTML;
}

// Event listener for input search
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.trim();
  handleSearch(query);
});

// Function to handle search
function handleSearch(query) {
  const filteredResults = books.filter(
    (book) =>
      book.name.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.category.toLowerCase().includes(query.toLowerCase())
  );

  displayResults(filteredResults);
}

// Event listener for tags
searchTags.addEventListener("click", (e) => {
  const tagValue = e.target.innerText;
  searchInput.value = tagValue;
  handleSearch(tagValue);
});
