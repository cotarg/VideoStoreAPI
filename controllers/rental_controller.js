var Rental = require('../models/rental')

var RentalController = {
  // See a list of customers that have currently checked out any of the movie's inventory (/rentals/Jaws/customers)
  // router.get ('/:title/current' , rental_controller.customersRentingThisFilm)
  rentalInfo: function(req, res){
    var db = req.app.get('db')
    var title = req.params.title
    db.movies.find({title: title}, function(err, result){
      res.json(result)
    });
  },

  customersRentingThisFilm:  function(req, res){
    var db = req.app.get('db')
    var title = req.params.title
    db.rentals.find({title: title}, function(err, result){
      res.json(result)
    });
  },

  filmRentalHistoryByCustName:  function(req, res){
    var db = req.app.get('db')
    var title = req.params.title
    db.rentals.find({title: title}, function(err, result){
      res.json(result)
    });
  },

  filmRentalHistoryByCODate:  function(req, res){
    res.render('index',  { title: ""})
  },

  // Given a customer's id and a movie's title ...
  // "check out" one of the movie's inventory to the customer (/rentals/Jaws/check-out)
  // Establish a return date
  // Charge the customer's account (cost up to you)
  // router.post ('/rentals/:title/checkout' , 'rental_controller.checkoutFilmToCust')
//   {
//         "customer": { "id": "9000"
//         }
// }

  checkoutFilmToCust:  function(req, res){
    var checkOutLength = 259200000
    var id = req.body.customer["id"]
    var title = req.params.title
    var db = req.app.get('db')
    var today = new Date()
    var today_in_seconds = today.getTime()
    var due_seconds = today_in_seconds + checkOutLength
    var due_date = new Date(due_seconds)
    var rental_cost = 2

    db.movies.where('title = $1', [title], function(err, result) {
      var stock = result[0].stock - 1
      db.movies.save({id: result[0].id, stock: stock }, function(err, res){
      })
      db.customers.find({id: id}, function(err, result){
        credit = result[0].account_credit - rental_cost
        db.customers.save({id: result[0].id, account_credit: credit }, function(err, res){})
      });
      db.rentals.save({movie_id: result[0].id, title: title, customer_id: id, checkout_date: today, due_date: due_date}, function(err, inserted){
        res.json(title)
      })

    })
  },

  checkInFilmToCust:  function(req, res) {
    var id = req.body.customer["id"]
    var title = req.params.title
    var db = req.app.get('db')
    var today = new Date()

    db.rentals.where('title = $1 AND customer_id = $2', [title, id], function(err, result) {
      db.movies.find({title: title}, function(err, result){
        var stock = result[0].stock + 1
        db.movies.save({id: result[0].id, stock: stock }, function(err, res){})
      });
      db.rentals.save({id: result[0].id, returned_date: today}, function(err, inserted){
        res.json(title)
      })

    })
  },

  // rental_controller.overdue:  function(req, res){
  //   res.render('index',  { title: ""})
  // }


}

module.exports = RentalController

// Look a movie up by title to see (/rentals/Jaws)
// it's synopsis
// release date
// available inventory (not currently checked-out to a customer)
// and inventory total
// Given a customer's id and a movie's title ...
// "check out" one of the movie's inventory to the customer (/rentals/Jaws/check-out)
// Establish a return date
// Charge the customer's account (cost up to you)
// "check in" one of customer's rentals (/rentals/Jaws/return)
// return the movie to its inventory
// See a list of customers with overdue movies (/rentals/overdue)
// include customer name, movie title, check-out date, and return date
