var MongoClient = require('mongodb').MongoClient;

var BookQuery = function(){
  this.url = "mongodb://localhost:27017/books_rating";
};

BookQuery.prototype = {
  all: function(callback){
    MongoClient.connect(this.url, function(err, db){
      var collection = db.collection('books');
      collection.find().toArray(function(err, results){
        callback(results);
      });
    });
  },
  add: function(bookToAdd, callback){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('books');
        collection.insert(bookToAdd);
        collection.find().toArray(function(err, results){
          callback(results);
        })
      }
    })
  }
}

module.exports = BookQuery;