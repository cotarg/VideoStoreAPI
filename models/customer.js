var app = require("../app");
var db = app.get("db");

var Customers = function(id) {
  this.customer_id = id;
};

// Instance functions
Customers.all = function(callback) {
  db.run("select * from customers;", function(error, result){
    if(error) {
      callback(error, undefined);
    } else {
      callback(null, result);
    }
  });
};

Customers.nameSort = function(options,callback) {
  db.customers.find({}, options, function(error, customers) {
    if(error || !customers) {
      callback(error || new Error("Could not retrieve customers"), undefined);
    } else {
      callback(null, customers);
    }
  });
};

module.exports = Customers;
