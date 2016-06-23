var Rental = require('../models/rental')

var RentalController = {

  rentalInfo: function(req, res){
    var title = req.params.title
    Rental.deets(title, function(error, result) {
      if(error) {
        var err = new Error("Error retrieving rental info:\n" + error.message);
        err.status = 500;
        next(err);
      } else if (result[0] == null){
        res.status(404).json({error: "No can has movie."})
      } else {
        res.json(result)
      }
    })
  },

  customersRentingThisFilm: function (req, res) {
    var title = req.params.title
    Rental.whoRentedThis(title, function(error, result) {
      if(error) {
        var err = new Error("Error retrieving customer info:\n" + error.message);
        err.status = 500;
        next(err);
      } else if (result[0] == null){
        res.status(404).json({error: "No can has movie."})
      } else {
        res.json(result)
      }
    })
  },

  checkoutFilmToCust:  function(req, res){
    var id = req.body.customer["id"]
    var title = req.params.title

    Rental.checkout(title, id, function(error, result){
      if(error) {
        var err = new Error("Error checkout out movie:\n" + error.message);
        err.status = 500;
        next(err);
      } else {
        res.json(result)
      }
    })
  },

  checkInFilmToCust:  function(req, res) {
    var id = req.body.customer["id"]
    var title = req.params.title
    Rental.checkin(title, id, function(error, result){
      if(error) {
        var err = new Error("Error checkout out movie:\n" + error.message);
        err.status = 500;
        next(err);
      } else {
        res.json(result)
      }
    })
  },

  overdue:  function(req, res){
    Rental.overdue(function(error, result){
      if(error) {
        var err = new Error("Error checkout out movie:\n" + error.message);
        err.status = 500;
        next(err);
      } else {
        res.json(result)
      }
    })
  },

}

module.exports = RentalController
//
// SELECT *
//     FROM weather INNER JOIN cities ON (weather.city = cities.name);


// SELECT customers.name, rentals.title, rental.checkout_date, rental.due_date
// FROM rentals
// INNER JOIN customers
// ON customers.id == rental.customer_id
// WHERE rental.due_date < today ; returned_date: null
//
//
// SELECT weather.city, weather.temp_lo, weather.temp_hi,
//        weather.prcp, weather.date, cities.location
//     FROM weather, cities
//     WHERE cities.name = weather.city;


// SELECT Customers.CustomerName, Orders.OrderID
// FROM Customers
// INNER JOIN Orders
// ON Customers.CustomerID=Orders.CustomerID

// Orderitem.joins(:order).where("orderitems.user_id = ? and orders.status = ?", self.id, status).sum(:price)
