import { books } from "../../data.js";

let booksDisplay = "";

// Generate the initial book cards
books.forEach((book) => {
  booksDisplay += `
     <div class="book-card" data-reserved="${book.reserved}">
        <img src="../../assets/images/${book.image || "book.png"}" alt="${book.name}" />
        <div class="book-title">${book.name}</div>
        <div class="book-author">${book.author}</div>
        <div class="availability">${book.reserved ? "Reserved" : "Available"}</div>
        <button class="borrow-button" ${book.reserved ? "disabled" : ""}>
          ${book.reserved ? "Unavailable" : "Borrow"}
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
       <div class="book-card" data-reserved="${book.reserved}">
          <img src="../../assets/images/${book.image || "book.png"}" alt="${book.name}" />
          <div class="book-title">${book.name}</div>
          <div class="book-author">${book.author}</div>
          <div class="availability">${book.reserved ? "Reserved" : "Available"}</div>
          <button class="borrow-button" ${book.reserved ? "disabled" : ""}>
            ${book.reserved ? "Unavailable" : "Borrow"}
          </button>
        </div>
      `;
  });
  document.getElementById("book_grid").innerHTML = booksDisplay;
});

// Search functionality
document.querySelector("#searchButton").addEventListener("click", () => {
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
       <div class="book-card" data-reserved="${book.reserved}">
          <img src="../../assets/images/${book.image || "book.png"}" alt="${book.name}" />
          <div class="book-title">${book.name}</div>
          <div class="book-author">${book.author}</div>
          <div class="availability">${book.reserved ? "Reserved" : "Available"}</div>
          <button class="borrow-button" ${book.reserved ? "disabled" : ""}>
            ${book.reserved ? "Unavailable" : "Borrow"}
          </button>
        </div>
      `;
  });

  if (filteredBooks.length === 0) {
    document.getElementById("book_grid").innerHTML = `<p>No books found</p>`;
  } else {
    document.getElementById("book_grid").innerHTML = booksDisplay;
  }
});

