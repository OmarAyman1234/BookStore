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