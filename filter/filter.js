//  filter -

const string = ["vishal", "rupesh", "vishakha", "manali"];

const newString = string.filter((str) => {
  return str === "vishal" || str === "vishakha";
});
console.log(newString);

//  forEach

const newString2 = string.forEach((str) => {
  if (str === "rupesh" || str === "manali") {
    console.log(str);
    }

});

const books = [
  { bookname: "Book 1", genre: "Fiction", publicationDate: "2022-01-01" },
  { bookname: "Book 2", genre: "Non-Fiction", publicationDate: "2021-05-15" },
  {
    bookname: "Book 3",
    genre: "Science Fiction",
    publicationDate: "2020-11-20",
  },
  { bookname: "Book 4", genre: "Mystery", publicationDate: "2019-08-10" },
  { bookname: "Book 5", genre: "Fantasy", publicationDate: "2018-03-25" },
  { bookname: "Book 6", genre: "Thriller", publicationDate: "2017-06-12" },
  { bookname: "Book 7", genre: "Romance", publicationDate: "2016-09-30" },
  { bookname: "Book 8", genre: "Biography", publicationDate: "2015-02-18" },
  { bookname: "Book 9", genre: "History", publicationDate: "2014-07-22" },
  { bookname: "Book 10", genre: "Self-Help", publicationDate: "2013-04-05" },
];

// console.log(books);

const newBooks = books.filter((bk) => {
    return (bk.publicationDate <= "01-01-2024");

})
console.log(newBooks);


