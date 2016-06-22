var Customer = require("../models/customer");

var CustomersController = {

  // Retrive a list of all customers
  customerList:  function(req, res, next){
    Customer.all(function(error, customers) {
      if(error) {
        var err = new Error("Error retrieving customer list:\n" + error.message);
        err.status = 500;
        next(err);
      } else {
        res.json(customers)
      }
    })
  },

  // Retrive a subset of customers (/customers/sort/name?n=10&p=2)
  // customersNameSort:  function(req, res){
  //   var db = req.app.get('db')
  //   var num = Number(req.query.n)
  //   var p = Number(req.query.p)
  //   db.customers.find({}, {order: 'name asc', limit: num, offset: p}, function(err, result){
  //     res.json(result)
  //   });
  // },

  customersNameSort: function(req, res, next) {
    var options = {limit: req.query.n, offset: req.query.p}
    Customer.nameSort(options, function(error, customers){
      if(error) {
        var err = new Error("Error retrieving customer list:\n" + error.message);
        err.status = 500;
        next(err);
      } else {
        res.json(customers)
      }
    })
  },


  // sort: function(req, res, next) {
  //   var options = {order: req.params.search, limit: req.query.n, offset: req.query.p}
  //   Customer.sort(options, function(error, customers) {
  //     if(error) {
  //       var err = new Error("Error retrieving customer list:\n" + error.message);
  //       err.status = 500;
  //       next(err);
  //     } else {
  //       res.json(customers);
  //     }
  //   });
  // },

  customersRegisteredSort:  function(req, res){
    var db = req.app.get('db')
    var num = Number(req.query.n)
    var p = Number(req.query.p)
    db.customers.find({}, {order: 'registered_at asc', limit: num, offset: p}, function(err, result){
      res.json(result)
    });
  },

  customersPostalSort:  function(req, res){
    var db = req.app.get('db')
    var num = Number(req.query.n)
    var p = Number(req.query.p)
    db.customers.find({}, {order: 'postal_code asc', limit: num, offset: p}, function(err, result){
      res.json(result)
    });
  },

  // Given a customer's id...
  // List the movies they currently have checked out (/customers/5/current)
  // includes return date
  // ordered by check out date
  currentCheckOuts:  function(req, res){
    var db = req.app.get('db')
    var cust_id = req.params.id
    db.run("select movies.title, rentals.customer_id, rentals.returned_date, rentals.checkout_date from rentals, movies where rentals.customer_id = $1 and rentals.title = movies.title and rentals.returned_date is null;", [cust_id], function(err, result){
      res.json(result)
    })
  },

  historicalCheckOuts:  function(req, res){
    var db = req.app.get('db')
    var cust_id = req.params.id
    db.rentals.where('customer_id = $1 and returned_date is not null order by checkout_date',  [cust_id], function(err, result){
      res.json(result)
    })

  }


}

module.exports = CustomersController
