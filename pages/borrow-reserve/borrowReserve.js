import { getBook } from "../../data.js";

document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('.book-form');

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const formTitle = this.querySelector('h2').textContent;
            
            if (formTitle === 'Book Reservation') {
                alert('Book has been successfully reserved! We will contact you soon.');
            } else if (formTitle === 'Book Borrowing') {
                alert('Book borrowing request submitted successfully! Our librarian will process your request.');
            }
            this.reset();
        });
    });
});

//Get the button ID from the search params (search bar)
const params = new URLSearchParams(window.location.search);
const bookId = params.get("bookId");

if(bookId) {
    const foundBook = getBook(bookId);
    
    //Change the page's title based on the book's name
    document.title = `Borrow/Reserve ${foundBook.name}`;

    const bookContainer = document.querySelector('.book-container');
    bookContainer.innerHTML = `
        
        <div class="book-content">
            <div class="bookImage">
            <img src="../../assets/images/${foundBook.image}" alt="Book image">
            </div>
            
            <div class="book-details">
            <div class="book-table">
                <table>
                <tbody>
                    <tr>
                    <td class="category">Title</td>
                    <td>${foundBook.name}</td>
                    </tr>
                    <tr>
                    <td class="category">Author</td>
                    <td>${foundBook.author}</td>
                    </tr>
                    <tr>
                    <td class="category">Category</td>
                    <td>${foundBook.category}</td>
                    </tr>
                    <tr>
                    <td class="category">Year</td>
                    <td>Historical Text</td>
                    </tr>
                </tbody>
                </table>
            </div>

            <div class="bookDescription">
                <p>${foundBook.description}</p>
            </div>
            </div>
      </div>
    `;
}