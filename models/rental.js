var app = require("../app");
var db = app.get("db");

var Rentals = function(id) {
  this.id = id;
};

Rentals.deets = function(title , callback) {
  db.movies.find({title: title}, function(error, result){
    if(error) {
      callback(error, undefined);
    } else {
      callback(null, result);
    }
  });
};

Rentals.whoRentedThis = function(title, callback){
  db.rentals.find({title: title}, function(err, result) {
    if(error) {
      callback(error, undefined);
    } else {
      callback(null, result);
    }
  });
};
//
// Customers.nameSort = function(options,callback) {
//   db.customers.find({}, options, function(error, customers) {
//     if(error || !customers) {
//       callback(error || new Error("Could not retrieve customers"), undefined);
//     } else {
//       callback(null, customers);
//     }
//   });
// };
//
// Customers.registeredSort = function(options, callback) {
//   db.customers.find({}, options, function(error, customers){
//     if(error || !customers) {
//       callback(error || new Error("Could not retrieve customers"), undefined);
//     } else {
//       callback(null, customers);
//     }
//   });
// };
//
// Customers.postalSort = function(options, callback) {
//   db.customers.find({}, options, function(error, customers){
//     if(error || !customers) {
//       callback(error || new Error("Could not retrieve customers"), undefined);
//     } else {
//       callback(null, customers);
//     }
//   });
// };
//
// Customers.currentrentals = function(cust_id, callback){
//   db.run("select movies.title, rentals.customer_id, rentals.returned_date, rentals.checkout_date from rentals, movies where rentals.customer_id = $1 and rentals.title = movies.title and rentals.returned_date is null;", [cust_id], function(error, result){
//     if(error || !result) {
//       callback(error || new Error("Could not retrieve data"), undefined);
//     } else {
//       callback(null, result);
//     }
//   });
// };
//
// Customers.pastRentals = function(cust_id, callback){
//   db.rentals.where('customer_id = $1 and returned_date is not null order by checkout_date',  [cust_id], function(error, result){
//     if(error || !result) {
//       callback(error || new Error("Could not retrieve data"), undefined);
//     } else {
//       callback(null, result);
//     }
//   });
// };
//

module.exports = Rentals;
