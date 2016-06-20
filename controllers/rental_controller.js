var Rental = require('../models/rental')

var RentalController = {

  rentalInfo: function(req, res){
    var db = req.app.get('db')
    var title = req.params.title
    db.movies.find({title: title}, function(err, result){
      res.json(result)
    });
  },

  // See a list of customers that have currently checked out any of the movie's inventory
  customersRentingThisFilm:  function(req, res){
    var db = req.app.get('db')
    var title = req.params.title
    db.rentals.find({title: title}, function(err, result){
      res.json(result)
    });
  },

  // filmRentalHistoryByCustName:  function(req, res){
  //   var db = req.app.get('db')
  //   var title = req.params.title
  //   db.rentals.find({title: title}, function(err, result){
  //     res.json(result)
  //   });
  // },
  //
  // filmRentalHistoryByCODate:  function(req, res){
  //   res.render('index',  { title: ""})
  // },

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

  overdue:  function(req, res){
    var db = req.app.get('db')
    var overdue_rentals = []
    var today = new Date()
    db.rentals.find({"due_date <": today, returned_date: null}, function(err, result) {
      res.json(result)
    })
    
  }


}

module.exports = RentalController
