var app = require("../app");
var db = app.get("db");

// Constructor function
var Movie = function(id) {
  this.id = id;
};

// Instance functions
Movie.prototype.getStock = function(callback) {
  db.accounts.findOne(this.id, function(error, result) {
    if(error) {
      callback(error, undefined);
    } else {
      callback(null, result.stock);
    }
  });

  return this;
};

Movie.end = function () { db.end() }

module.exports = Movie
