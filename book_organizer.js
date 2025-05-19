const books = [
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 1960
  },
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949
  },
  {
    title: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    releaseYear: 1925
  }
];

function sortByYear(bookA, bookB) {
  if (bookA.releaseYear < bookB.releaseYear) {
    return -1;
  } else if (bookA.releaseYear > bookB.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

const year= 1950;

let filteredBooks = books.filter(book => {
  return book.releaseYear > year;
});

filteredBooks.sort(sortByYear);
