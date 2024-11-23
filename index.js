import { books } from "./data.js";

const navbarToggle = document.querySelector(".navbar__toggle");
const navbar = document.querySelector(".navbar");

const searchInput = document.getElementById("searchInput");
const searchTags = document.getElementById("searchTags");
const searchResults = document.getElementById("searchResults");

const loginButton = document.querySelector(".btn--secondary");
const navbarAuth = document.querySelector(".navbar__auth");

navbarToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Simulate login
loginButton.addEventListener("click", () => {
  navbarAuth.classList.add("logged-in"); // Add the logged-in class
});

// Function to display search results
function displayResults(results) {
  searchResults.innerHTML = ""; // Clear previous results

  if (results.length === 0) {
    searchResults.innerHTML = "<p>No results found.</p>";
    return;
  }

  let resultsHTML = "";

  results.forEach((item) => {
    const resultHTML = `
      <div class="result-item">
        <div class="result-item__image">
          <img src="${item.image || "./assets/images/book.png"}" alt="${
      item.name
    }" />
        </div>
        <div class="result-item__info">
          <h4>${item.name}</h4>
          <p class="author">By: ${item.author}</p>
          <span class="topic-tag">${item.category}</span>
          <button class="view-details-link" data-button-id="${item.id}">View Details</button>
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
