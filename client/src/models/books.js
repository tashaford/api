var Book = require('./book');

var Books = function() {

}

Books.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', callback);
    request.send();
  },

  all: function(callback){
    this.makeRequest("http://localhost:3000/api/books", function(){
      if(this.status != 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);
      var books = Books.prototype.populateBooks(results);
      callback(books);
    })
  },

  populateBooks: function(results){
    var books = [];
    for(var result of results){
      var book = new Book(result);
      books.push(book);
    }
    return films;
  },

  add: function(newBook, callback){
      var BookToAdd = JSON.stringify(newFilm);
      this.makePostRequest("http://localhost:3000/api/books", callback, bookToAdd);
  },

  makePostRequest: function(url, callback, payload){
    var request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader("Content-type", "application/json");
    request.addEventListener('load', callback);
    request.send(payload);
  }
}

module.exports = Books;
