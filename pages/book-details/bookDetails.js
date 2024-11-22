import { getBook, getRelatedBooks } from "../../data.js";

//Getting the value of bookId from the search bar
const params = new URLSearchParams(window.location.search);
const bookId = params.get("bookId");

if(bookId) {
  const foundBook = getBook(bookId);
  
  const detailsContainer = document.querySelector(".details-details-container");

  let foundBookHTML = `
      <img class="details-book-img" src="../../assets/images/books-data/${foundBook.image}" alt="book img">
      <div class="details-book-info">
        <div>
          <h2>${foundBook.name}</h2>
          <a class="details-book-info-author" href="${foundBook.authorInfo}" target="_blank">${foundBook.author}</a>
        </div>
        <p class="details-book-description">${foundBook.description}</p>
      </div>
  `;
  detailsContainer.innerHTML = foundBookHTML;

  
  const relatedBooksContainer = document.querySelector(".details-related-books-container");

  const relatedBooks = getRelatedBooks(bookId);
  console.log(relatedBooks);

  let relatedBooksHTML = ``;
  relatedBooks.forEach(book => {
    relatedBooksHTML += `
      <div class="details-related-book-container">
        <img class="details-related-book-img" src="${book.image}" alt="book img">
        <h3>${book.name}</h3>
        <p>${book.author}</p>
      </div>
    `;
  });
  relatedBooksContainer.innerHTML = relatedBooksHTML;
}