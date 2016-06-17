var movie = require('../models/movies')
var app = require("../app");
var db = app.get("db");

// Constructor function
var Rental = function(id) {
  this.id = id;
};

// Instance functions


// Class Functions
// placeholder is currently placeholding while I figure out
// how to build an object or wevs from params
Rental.create = function (placeholder, callback) {
  db.accounts.save({
    customer_id: placeholder.customer_id,
    movie_id: placeholder.movie_id,
    due_date: placeholder.due_date,
    checkout_date: placeholder.checkout_date
  }, function (error, account) {
    if (error || !account) {
      callback(error || new Error("Could not create account"), undefined);
    } else {
      callback(null, new Rental(rental.id));
    }
  })
}

Account.createSync = function(placeholder, callback) {
  var account = db.accounts.save({
    customer_id: placeholder.customer_id,
    movie_id: placeholder.movie_id,
    due_date: placeholder.due_date,
    checkout_date: placeholder.checkout_date
  }

  return new Account(account.id);
}

module.exports = Rental;
