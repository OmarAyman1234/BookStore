import { books } from "../../data.js";

let booksDisplay = "";

// Generate the initial book cards
books.forEach((book) => {
  booksDisplay += `
      <div class="book-card" data-book-id="${book.id}" data-reserved="${book.reserved}">
        <img src="../../assets/images/${book.image || "book.png"}" alt="${book.name}" />
        <div class="book-title">${book.name}</div>
        <div class="book-author">${book.author}</div>
        <div style="color: ${book.isAvailable? "#D4AF37" : "red"}" class="availability">${book.isAvailable ? "Available" : "Not Available"}</div>
        <button data-book-id="${book.id}" class="borrow-button">
          ${book.isAvailable ? "Borrow" : "Reserve"}
        </button>
      </div>
    `;
});

document.getElementById("book_grid").innerHTML = booksDisplay;

// Sort functionality
document.getElementById("sort").addEventListener("change", (e) => {
  const sortBy = e.target.value;

  const sortedBooks = [...books].sort((a, b) => {
    if (sortBy === "title" || sortBy === "author") {
      return a[sortBy].localeCompare(b[sortBy]);
    }
    return 0;
  });

  let booksDisplay = "";
  sortedBooks.forEach((book) => {
    booksDisplay += `
      <div class="book-card" data-book-id="${book.id}" data-reserved="${book.reserved}">
        <img src="../../assets/images/${book.image || "book.png"}" alt="${book.name}" />
        <div class="book-title">${book.name}</div>
        <div class="book-author">${book.author}</div>
        <div style="color: ${book.isAvailable? "#D4AF37" : "red"}" class="availability">${book.isAvailable ? "Available" : "Not Available"}</div>
        <button data-book-id="${book.id}" class="borrow-button">
          ${book.isAvailable ? "Borrow" : "Reserve"}
        </button>
      </div>
    `;
  });
  document.getElementById("book_grid").innerHTML = booksDisplay;
});

// Search functionality
function searchFunctionality() {
  const query = document.querySelector("#searchInput").value.toLowerCase();

  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.category.toLowerCase().includes(query)
  );

  let booksDisplay = "";
  filteredBooks.forEach((book) => {
    booksDisplay += `
      <div class="book-card" data-book-id="${book.id}" data-reserved="${book.reserved}">
        <img src="../../assets/images/${book.image || "book.png"}" alt="${book.name}" />
        <div class="book-title">${book.name}</div>
        <div class="book-author">${book.author}</div>
        <div style="color: ${book.isAvailable? "#D4AF37" : "red"}" class="availability">${book.isAvailable ? "Available" : "Not Available"}</div>
        <button data-book-id="${book.id}" class="borrow-button">
          ${book.isAvailable ? "Borrow" : "Reserve"}
        </button>
      </div>
    `;
  });

  if (filteredBooks.length === 0) {
    document.getElementById("book_grid").innerHTML = `<p>No books found</p>`;
  } else {
    document.getElementById("book_grid").innerHTML = booksDisplay;
  }
}

//Activate search button
document.querySelector("#searchButton").addEventListener("click", () => {
  searchFunctionality();
});
//Activate search when pressing enter key when inside the search button's parent element (The search bar)
document.querySelector("#searchButton").parentElement.addEventListener('keydown', (event) => {
  if(event.key === 'Enter')
    searchFunctionality();
});

document.body.addEventListener('click', (event) => {
  if(event.target.classList.contains("borrow-button")) {
    const bookId = event.target.dataset.bookId;

    window.location.href = `../borrow-reserve/borrowReserve.html?bookId=${bookId}`
  }
});