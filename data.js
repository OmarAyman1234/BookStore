export const books = [
  {
    id: 1,
    name: "Riyadh As-Salihin",
    author: "Imam An-Nawawi",
    authorInfo: "https://en.wikipedia.org/wiki/Al-Nawawi",
    description: "",
    image: "./assets/images/books-data/riyad.bmp",
    category: "Hadith"
  },
  {
    id: 2,
    name: "Sahih Al-Bukhari",
    author: "Al-Bukhari",
    authorInfo: "https://en.wikipedia.org/wiki/Muhammad_al-Bukhari",
    description: "",
    image: "./assets/images/books-data/sahih-al-bukhari.jpg",
    category: "Hadith"
  },
  {
    id: 3,
    name: "The Translations of the Meanings of Summarized Sahih Muslim",
    author: "Muslim",
    authorInfo: "https://en.wikipedia.org/wiki/Muslim_ibn_al-Hajjaj",
    description: "",
    image: "./assets/images/books-data/summarized-sahih-muslim-meanings.jpg",
    category: "Hadith"
  },
  {
    id: 4,
    name: "40 Hadith An-Nawawi",
    author: "Imam An-Nawawi",
    authorInfo: "https://en.wikipedia.org/wiki/Al-Nawawi",
    description: "Description 4",
    image: "./assets/images/books-data/40-Hadith-An-Nawawi.jpg",
    category: "Hadith"
  },
  {
    id: 5,
    name: "Tafseer Ibn Kathir Volume 2",
    author: "Ibn Kathir",
    authorInfo: "https://en.wikipedia.org/wiki/Ibn_Kathir",
    description: "",
    image: "./assets/images/books-data/Tasfir_Ibn_Kathir_Vol._2.png",
    category: "Quran"
  },
  {
    id: 6,
    name: "Tafseer As-Sa'di",
    author: "Abdur-Rahman Naser As-Sa'di",
    authorInfo: "https://en.wikipedia.org/wiki/Abdul-Rahman_al-Sa%27di",
    description: "",
    image: "./assets/images/books-data/tafseer-as-sa-di-10-volume-set.jpg",
    category: "Quran"
  },
  {
    id: 7,
    name: "Zaad Al Maa'd",
    author: "Ibn Al-Qayyim",
    authorInfo: "https://en.wikipedia.org/wiki/Ibn_Qayyim_al-Jawziyya",
    description: "Zad El Maad is a profound scholarly work exploring Islamic theology, prophetic traditions, and spiritual guidance. Written by the renowned scholar Ibn Al-Qayyim, this text offers deep insights into Islamic philosophy and practice.",
    image: "./assets/images/books-data/zad_el_maad.jpg",
    category: "Seerah"
  }
];

export function getBook(bookId) {
  return books.find(book => book.id == bookId); //Searches for the object that has the bookId passed as a parameter to this function
}

export function getRelatedBooks(bookId) {
  let passedBook = getBook(bookId); //Get the book from the passed ID to this function
  let relatedBooks = []; //The array that contains the related books

  books.forEach(book => {
    if(book.category == passedBook.category) {
      relatedBooks.push(book); //Add related books to the array
    }
  });

  relatedBooks.forEach((book, index) => {
    if(book.id == bookId) {
      relatedBooks.splice(index, 1); //Remove the book that was passed as a parameter as it shouldn't be in the related books section
    }
  })

  return relatedBooks; //Return the array that contains all the related books to the book that is currently displayed on the page
}