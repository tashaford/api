var express = require('express');
var app = express();
var bookRouter = express.Router();

var Book = require('../client/src/models/book');

var BookQuery = require('../client/db/bookQuery');
var query = new BookQuery();

bookRouter.get('/:id', function(req, res){
  res.json(books[req.params.id]);
});

bookRouter.get('/', function(req, res) {
  query.all(function(results){
    res.json(results);
  })
});

bookRouter.put('/:id', function(req, res) {
  var book = new Book({
    title: req.body.title,
    author: req.body.author,
    rating: req.body.rating
  });
  books[req.params.id] = book;
  res.json({data: books});
});

bookRouter.post('/', function(req, res) {
  var book = new Book({
    title: req.body.title,
    author: req.body.author,
  });
  query.add(book, function(results){
    res.json('/');
  })
});

bookRouter.delete('/:id', function(req, res) {
  books.splice(req.params.id, 1);
  res.json({data: books});
});


module.exports = bookRouter;
