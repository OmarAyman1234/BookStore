document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", event => { //Adding an event listener
    if(event.target.classList.contains('view-details-link')) { //Checks if the clicked event contains a class named "view-details-link"
      const buttonId = event.target.dataset.buttonId; //Getting the button ID from the data attribute defined in the button with class "view-details-link"

      window.location.href = `./pages/book-details/bookDetails.html?bookId=${buttonId}`;//Navigates to the href specified and adds a query that contains the button ID
    }
  })
});
