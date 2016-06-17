var movie = require('../models/movies')
var app = require("../app");
var db = app.get("db");

// Constructor function
var Rental = function(id) {
  this.id = id;
};

// Instance functions
Rental.return = function (callback) {
  db.accounts.findOne(this.id, function(error, result) {
    if(error) {
      callback(error, undefined);
    } else {
      callback(null, result.balance);
    }
  })

  return this
  }
}


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

Rental.createSync = function(placeholder, callback) {
  var rental = db.rentals.save({
    customer_id: placeholder.customer_id,
    movie_id: placeholder.movie_id,
    due_date: placeholder.due_date,
    checkout_date: placeholder.checkout_date
  }

  return new Rental(rental.id);
}



module.exports = Rental;
