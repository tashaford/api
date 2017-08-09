use books_rating;

db.books.remove({});

db.books.insert([
  { 
    title: "Peter Rabbit",
    author: "Beatrix Potter",
    rating: 70
  }
]);