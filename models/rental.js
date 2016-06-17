var movie = require('../models/movies')
var app = require("../app");
var db = app.get("db");

// Constructor function
var Rental = function(id) {
  this.id = id;
};

// Instance functions


// Class Functions
// request is currently placeholding while I figure out
// how to build an object or wevs from params
Rental.create = function(request, callback) {
  db.accounts.save({
    balance: initialBalance
  }, function(error, account) {
    if(error || !account) {
      callback(error || new Error("Could not create account"), undefined);
    } else {
      callback(null, new Account(account.id));
    }
  });
};

module.exports = Rental;
