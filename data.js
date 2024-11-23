export const books = [
  {
    id: 1,
    name: "Riyadh As-Salihin",
    author: "Imam An-Nawawi",
    authorInfo: "https://en.wikipedia.org/wiki/Al-Nawawi",
    description: "",
    image: "books-data/riyad.bmp",
    category: "Hadith",
    reserved: false,
  },
  {
    id: 2,
    name: "Sahih Al-Bukhari",
    author: "Al-Bukhari",
    authorInfo: "https://en.wikipedia.org/wiki/Muhammad_al-Bukhari",
    description: "",
    image: "books-data/sahih-al-bukhari.jpg",
    category: "Hadith",
    reserved: false,
  },
  {
    id: 3,
    name: "Sahih Muslim",
    author: "Muslim",
    authorInfo: "https://en.wikipedia.org/wiki/Muslim_ibn_al-Hajjaj",
    description: "",
    image: "books-data/sahih-muslim.jpeg",
    category: "Hadith",
    reserved: false,
  },
  {
    id: 4,
    name: "Al-Arbaʿīn Al-Nawawiyyah",
    author: "Imam An-Nawawi",
    authorInfo: "https://en.wikipedia.org/wiki/Al-Nawawi",
    description: "Nawawi's Forty (al-Arbaʿīn al-Nawawiyyah) is a renowned collection of forty hadiths compiled by Imam al-Nawawi, drawn primarily from Sahih Muslim and Sahih al-Bukhari. Esteemed for distilling the core principles of Islamic sacred law (Sharīʿah), it features hadiths considered fundamental to Islam. Imam al-Nawawi aimed to select only sound (ṣaḥīḥ) hadiths that encapsulate key aspects of the religion, making this work a cornerstone of the arbaʿīniyyāt genre.",
    image: "books-data/40-Hadith-An-Nawawi.jpg",
    category: "Hadith",
    reserved: false,
  },
  {
    id: 5,
    name: "Tafsir Ibn Kathir",
    author: "Ibn Kathir",
    authorInfo: "https://en.wikipedia.org/wiki/Ibn_Kathir",
    description: "",
    image: "books-data/tafsir-ibn-kathir.jpg",
    category: "Quran",
    reserved: false,
  },
  {
    id: 6,
    name: "Tafsir As-Sa'di",
    author: "Abdur-Rahman Naser As-Sa'di",
    authorInfo: "https://en.wikipedia.org/wiki/Abdul-Rahman_al-Sa%27di",
    description: "",
    image: "books-data/tafsir-as-sa-di.jpg",
    category: "Quran",
    reserved: false,
  },
  {
    id: 7,
    name: "Zad Al Ma'ad",
    author: "Ibn Al-Qayyim",
    authorInfo: "https://en.wikipedia.org/wiki/Ibn_Qayyim_al-Jawziyya",
    description: "Zad El Maad is a profound scholarly work exploring Islamic theology, prophetic traditions, and spiritual guidance. Written by the renowned scholar Ibn Al-Qayyim, this text offers deep insights into Islamic philosophy and practice.",
    image: "books-data/zad_el_maad.jpg",
    category: "Seerah",
    reserved: false,
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