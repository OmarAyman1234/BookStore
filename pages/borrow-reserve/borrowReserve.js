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
                    <tr>
                    <td class="category">Status</td>
                    <td style="font-weight: bold; color: ${foundBook.isAvailable? "#D4AF37" : "red"}">${foundBook.isAvailable? "Available" : "Not Available"}</td>
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

    const formsSection = document.querySelector('.additional-section');
    
    formsSection.innerHTML = 
        foundBook.isAvailable?
        `
            <form class="book-form" action="/submit" method="post">
            <h2>Book Borrowing</h2>
            <div class="form-group">
            <label for="name">Name:</label>
            <input
                type="text"
                id="name"
                placeholder="Enter your name"
                name="name"
                required
            />
            </div>

            <div class="form-group">
            <label for="email">Email:</label>
            <input
                type="email"
                placeholder="Enter your email"
                id="email"
                name="email"
                required
            />
            </div>

            <div class="form-group">
            <label for="message">Borrowing Message:</label>
            <textarea
                id="message"
                name="message"
                placeholder="Borrowing message..."
                rows="4"
                required
            ></textarea>
            </div>

            <div class="btn">
            <input type="submit" value="Borrow Book" class="submit-btn" />
            </div>
        </form>
        ` 
        :
        `
            <form class="book-form" action="/submit" method="post">
            <h2>Book Reservation</h2>
            <div class="form-group">
            <label for="name">Name:</label>
            <input
                type="text"
                id="name"
                placeholder="Enter your name"
                name="name"
                required
            />
            </div>

            <div class="form-group">
            <label for="email">Email:</label>
            <input
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
                required
            />
            </div>

            <div class="form-group">
            <label for="message">Reservation Message:</label>
            <textarea
                id="message"
                name="message"
                placeholder="Reservation message..."
                rows="4"
                required
            ></textarea>
            </div>

            <div class="btn">
            <input type="submit" value="Reserve Book" class="submit-btn" />
            </div>
        </form>
        `;  
}
