const books = [
  { title: "JS Basics", rating: 5 },
  { title: "Node Intro", rating: 3 }
];
// Filter: Get books with rating > 4
const topBooks = books.filter(book => book.rating > 4);
// Map: Get an array of book titles
const titles = books.map(book => book.title);
// Reduce: Calculate average rating
const averageRating = books.reduce((sum, book) => sum + book.rating, 0) / books.length;
// FlatMap: Expanding elements
// Equivalent with map() + flat() 
// arr.flatMap(fn) === arr.map(fn).flat()
const arr = [1, 2, 3];
const result = arr.flatMap(x => [x, x * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]
//Checks if a value is an array.
Array.isArray();
