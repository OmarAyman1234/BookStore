import { getBook, getRelatedBooks } from "../../data.js";

//Getting the value of bookId from the search bar
const params = new URLSearchParams(window.location.search);
const bookId = params.get("bookId");

if(bookId) {
  const foundBook = getBook(bookId);
  
  const detailsContainer = document.querySelector(".details-details-container");

  let foundBookHTML = `
      <div class="details-book-img-container">
        <img class="details-book-img" src="../../assets/images/${foundBook.image}" alt="${foundBook.name}">
      </div>
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
  if(relatedBooks.length > 0) {
    relatedBooks.forEach(book => {
      relatedBooksHTML += `
        <div class="details-related-book-container" data-book-id="${book.id}">
          <img class="details-related-book-img" src="../../assets/images/${book.image}" alt="book.name">
          <h3>${book.name}</h3>
          <p>${book.author}</p>
        </div>
      `;
    });
  }
  else {
    relatedBooksHTML = "<p>There are no related books at the moment.</p>";
  }
  relatedBooksContainer.innerHTML = relatedBooksHTML;

  document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
      /*closest()  ensures that the container is always found even if the 
      click target is a child element like img or h3*/
      const book = event.target.closest('.details-related-book-container'); 
      if(book) {
        const bookId = book.dataset.bookId;
  
        window.location.href = `./bookDetails.html?bookId=${bookId}`;
      }
    });
  })
}