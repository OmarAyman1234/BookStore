export const books = [
  {
    id: 1,
    name: "Riyadh As-Salihin",
    author: "Imam An-Nawawi",
    authorInfo: "https://en.wikipedia.org/wiki/Al-Nawawi",
    description: "Riyad as-Salihin is a selection of hadith compiled by Imam Yahya ibn Sharaf an-Nawawi (rahimahullah). It is one of the most widely known and read books of hadith all over the world. It is practical and accessible to Muslims of all levels.",
    image: "books-data/riyad.bmp",
    category: "Hadith",
    isAvailable: false,
  },
  {
    id: 2,
    name: "Sahih Al-Bukhari",
    author: "Al-Bukhari",
    authorInfo: "https://en.wikipedia.org/wiki/Muhammad_al-Bukhari",
    description: "Sahih al-Bukhari is a collection of hadith compiled by Imam Muhammad al-Bukhari (rahimahullah). His collection is recognized by the overwhelming majority of the Muslim world to be the most authentic collection of reports of the Sunnah of the Prophet Muhammad (ﷺ).",
    image: "books-data/sahih-al-bukhari.jpg",
    category: "Hadith",
    isAvailable: true,
  },
  {
    id: 3,
    name: "Sahih Muslim",
    author: "Muslim",
    authorInfo: "https://en.wikipedia.org/wiki/Muslim_ibn_al-Hajjaj",
    description: "Sahih Muslim is a collection of hadith compiled by Imam Muslim ibn al-Hajjaj al-Naysaburi (rahimahullah). His collection is considered to be the most authentic collections of the Sunnah of the Prophet (ﷺ) after Sahih Al-Bukhari.",
    image: "books-data/sahih-muslim.jpeg",
    category: "Hadith",
    isAvailable: true,
  },
  {
    id: 4,
    name: "Al-Arbaʿīn Al-Nawawiyyah",
    author: "Imam An-Nawawi",
    authorInfo: "https://en.wikipedia.org/wiki/Al-Nawawi",
    description: "Nawawi's Forty (al-Arbaʿīn al-Nawawiyyah) is a renowned collection of forty hadiths compiled by Imam al-Nawawi (rahimahullah), drawn primarily from Sahih Muslim and Sahih al-Bukhari. Esteemed for distilling the core principles of Islamic sacred law (Sharīʿah), it features hadiths considered fundamental to Islam.",
    image: "books-data/40-Hadith-An-Nawawi.jpg",
    category: "Hadith",
    isAvailable: true,
  },
  {
    id: 5,
    name: "Tafsir Ibn Kathir",
    author: "Ibn Kathir",
    authorInfo: "https://en.wikipedia.org/wiki/Ibn_Kathir",
    description: "Tafsīr al-Qurʾān al-ʿAẓīm, commonly known as Tafsir Ibn Kathir is one of the most famous Islamic books concerned with the science of interpretation of the Quran, written by Imam Ibn Kathir (rahimahullah).",
    image: "books-data/tafsir-ibn-kathir.jpg",
    category: "Quran",
    isAvailable: false,
  },
  {
    id: 6,
    name: "Tafsir As-Sa'di",
    author: "Abdur-Rahman Naser As-Sa'di",
    authorInfo: "https://en.wikipedia.org/wiki/Abdul-Rahman_al-Sa%27di",
    description: "Tafsir As-Sa'di is a straightforward, easy to read, easy to understand explanation of the meaning of Qur'anic Ayat and statements. In addition to the simplicity of Ibn Sa'di's writing, it is also articulate and eloquent. Consequently, for those newly acquainted with Tafsir and those new to Islam, written by Shaikh Abdur-Rahman Naser As-sa'di (rahimahullah).",
    image: "books-data/tafsir-as-sa-di.jpg",
    category: "Quran",
    isAvailable: true,
  },
  {
    id: 7,
    name: "Zad Al Ma'ad",
    author: "Ibn Al-Qayyim",
    authorInfo: "https://en.wikipedia.org/wiki/Ibn_Qayyim_al-Jawziyya",
    description: "Zad El Maad is a profound scholarly work exploring Islamic theology, prophetic traditions, and spiritual guidance. Written by the renowned scholar Ibn Al-Qayyim (rahimahullah), this text offers deep insights into Islamic philosophy and practice.",
    image: "books-data/zad_el_maad.jpg",
    category: "Seerah",
    isAvailable: true,
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