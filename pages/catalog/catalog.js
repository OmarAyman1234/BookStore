// import books from "../../data.js";

const books = [
  {
    id: 1,
    name: "Riyadh As-Salihin",
    author: "An-Nawawi",
    description: "",
    image: "../../assets/images/books-data/Riyadh-As-Salihin.jpg",
    category: "hadith",
  },
  {
    id: 2,
    name: "Sahih Al-Bukhari",
    author: "Al-Bukhari",
    description: "",
    image: "../../assets/images/books-data/sahih-al-bukhari.jpg",
    category: "hadith",
  },
  {
    id: 3,
    name: "The Translations of the Meanings of Summarized Sahih Muslim",
    author: "Muslim",
    description: "Description 3",
    image:
      "../../assets/images/books-data/summarized-sahih-muslim-meanings.jpg",
    category: "hadith",
  },
  {
    id: 4,
    name: "Forty Hadith of An-Nawawi",
    author: "An-Nawawi",
    description: "Description 4",
    image: "../../assets/images/books-data/40-Hadith-An-Nawawi.jpg",
    category: "hadith",
  },
  {
    id: 5,
    name: "Tafseer Ibn Kathir Volume 2",
    author: "Ibn Kathir",
    description: "",
    image: "../../assets/images/books-data/Tasfir_Ibn_Kathir_Vol._2.png",
    category: "tafsir",
  },
  {
    id: 6,
    name: "Tafseer As-Sa'di",
    author: "Abdur-Rahman Naser As-Sa'di",
    description: "",
    image: "../../assets/images/books-data/tafseer-as-sa-di-10-volume-set.jpg",
    category: "tafsir",
  },
];

let booksDisplay = "";

books.forEach((book) => {
  booksDisplay += `
     <div class="book-card">
        <img
          src="${book.image}"
          alt="Book Cover"
          class="book-cover"
        />
        <div class="book-title">${book.name}</div>
        <div class="book-author">${book.author}</div>
        <div class="availability">Reserved</div>
        <button class="borrow-button" disabled>Borrow</button>
      </div>
    `;
});

document.getElementById("book_grid").innerHTML = booksDisplay;

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
       <div class="book-card">
          <img src="${book.image}" alt="Book Cover" class="book-cover" />
          <div class="book-title">${book.name}</div>
          <div class="book-author">${book.author}</div>
          <div class="availability">Reserved</div>
          <button class="borrow-button" disabled>Unavailable</button>
        </div>
      `;
  });
  document.getElementById("book_grid").innerHTML = booksDisplay;
});

document.querySelector(".search-button").addEventListener("click", () => {
  const query = document.querySelector(".search-bar").value.toLowerCase();

  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.category.toLowerCase().includes(query)
  );

  let booksDisplay = "";
  filteredBooks.forEach((book) => {
    booksDisplay += `
       <div class="book-card">
          <img src="${book.image}" alt="Book Cover" class="book-cover" />
          <div class="book-title">${book.name}</div>
          <div class="book-author">${book.author}</div>
          <div class="availability">Reserved</div>
          <button class="borrow-button" disabled>Unavailable</button>
        </div>
      `;
  });

  document.getElementById("book_grid").innerHTML = booksDisplay;

  if (filteredBooks.length === 0) {
    document.getElementById("book_grid").innerHTML = `<p>No books found</p>`;
  }
});
