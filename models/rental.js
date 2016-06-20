var movie = require('../models/movies')
var app = require("../app");
var db = app.get("db");

// Constructor function
// inputsPlaceholder should be the post body...
var Rental = function(inputsPlaceholder) {
  this.id = id
  this.customer_id = customer_id,
  this.movie_id = movie_id,
  this.due_date = due_date,
  this.checkout_date = checkout_date
};

// Instance functions
Rental.return = function (callback) {
  var return_date = new Date()
  db.rentals.findOne(this.id, function(error, result) {
    if(error) {
      callback(error, undefined);
    } else {
      db.rentals.save({id: this.id, returned_date: return_date})
    }
  })

  return this
  }


// Class Functions
// placeholder is currently placeholding while I figure out
// how to build an object or wevs from params
Rental.create = function (placeholder, callback) {
  db.rentals.save({
    customer_id: placeholder.customer_id,
    movie_id: placeholder.movie_id,
    due_date: placeholder.due_date,
    checkout_date: placeholder.checkout_date
  }, function (error, rental) {
    if (error || !rental) {
      callback(error || new Error("Could not create rental"), undefined);
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
