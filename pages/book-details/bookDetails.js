import { getBook, getRelatedBooks } from "../../data.js";

//Getting the value of bookId from the search bar
const params = new URLSearchParams(window.location.search);
const bookId = params.get("bookId");

if(bookId) {
  const foundBook = getBook(bookId);
  
  //Change the page's title based on the book's name
  document.title = foundBook.name;
  
  const detailsContainer = document.querySelector(".details-details-container");

  //Display found book
  let foundBookHTML = `
      <div class="details-book-img-container">
        <img class="details-book-img" src="../../assets/images/${foundBook.image}" alt="${foundBook.name}">
      </div>
      <div class="details-book-info">
        <div>
          <h2>${foundBook.name}</h2>
          <a class="details-book-info-author" href="${foundBook.authorInfo}" target="_blank">${foundBook.author}</a>
          </div>
        <p style="color: ${foundBook.isAvailable? "green" : "red"}; font-weight: bold">${foundBook.isAvailable? "Available" : "Not available"}</p>
        <p class="details-book-description">${foundBook.description}</p>
      </div>
  `;
  detailsContainer.innerHTML = foundBookHTML;


  //Display the borrow borrow/reserve button dynamically to get the book id
  const buttonContainer = document.querySelector('.details-btn-container');
  if(buttonContainer) {
    buttonContainer.innerHTML = `
      <button class="details-borrow-reserve-btn" data-book-id=${foundBook.id}>
        ${foundBook.isAvailable? "Borrow book" : "Reserve book"}
      </button>
    `;

    document.body.addEventListener('click', (event) => {
      if(event.target.classList.contains('details-borrow-reserve-btn')) {
        const bookId = event.target.dataset.bookId;

        window.location.href = `../borrow-reserve/borrowReserve.html?bookId=${bookId}`;
      }
    });
  }
  
  //Display related books
  const relatedBooksParent = document.querySelector(".details-related-books-container");
  const relatedBooks = getRelatedBooks(bookId);

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
  relatedBooksParent.innerHTML = relatedBooksHTML;

  const allRelatedBooks = document.querySelectorAll('.details-related-book-container');
  allRelatedBooks.forEach(bookElement => {
    //get the book's id from the data html attribute
    const bookId = bookElement.getAttribute('data-book-id');
    const book = getBook(bookId);

    bookElement.addEventListener('mouseenter', () => {
      bookElement.style.backgroundColor = book.isAvailable? "rgba(46, 139, 86, 0.2)" : "rgba(255, 139, 86, 0.2)"
    })
  })
  allRelatedBooks.forEach(bookElement => {
    bookElement.addEventListener('mouseleave', () => {
      bookElement.style.backgroundColor = ""
    })
  })

  

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