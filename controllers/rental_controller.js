var Rental = require('../models/rental')

var RentalController = {

  rentalInfo: function(req, res){
    var db = req.app.get('db')
    var title = req.params.title
    db.movies.find({title: title}, function(err, result){
      if (result[0] == null){
        res.status(404).json({error: "No can has movie."})
      } else {
      res.json(result)
    }
    });
  },

  customersRentingThisFilm:  function(req, res){
    var db = req.app.get('db')
    var title = req.params.title
    db.rentals.find({title: title}, function(err, result){
      if (result[0] == null){
        res.status(404).json({error: "No can has movie."})
      } else {
      res.json(result)
    }
    });
  },
// {
//   "customer": { "id": "9000"
//   }
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

    // db.movies.where('title = $1', [title], function(err, result) {
    //   if (result == []) {
    //     res.status(404).json({error: "No can has movie"})
    //   } else if (result[0].stock <= 0) {
    //     res.status(200).json({error: "That movie is out of stock."})
    //   } else if (db.customers.find({id}) == null){
    //     res.status(200).json({error: "Who is that? They don't patronize our fabulous video store."})
    //   }
    //   else {
    //       var stock = result[0].stock - 1
    //       db.movies.save({id: result[0].id, stock: stock }, function(err, res){
    //       })
    //       db.customers.find({id: id}, function(err, result){
    //         credit = result[0].account_credit - rental_cost
    //         db.customers.save({id: result[0].id, account_credit: credit }, function(err, res){})
    //       });
    //       db.rentals.save({movie_id: result[0].id, title: title, customer_id: id, checkout_date: today, due_date: due_date}, function(err, inserted){
    //         res.json(title)
    //       })
    //   }
    // })
  },

  checkInFilmToCust:  function(req, res) {
    var id = req.body.customer["id"]
    var title = req.params.title
    var db = req.app.get('db')
    var today = new Date()

    db.rentals.where('title = $1 AND customer_id = $2', [title, id], function(err, result) {
      db.movies.find({title: title}, function(err, result){
        if (result[0] == null){
          res.status(404).json({error: "NOooooOOOOooo"})
        } else {
         var stock = result[0].stock + 1
        db.movies.save({id: result[0].id, stock: stock }, function(err, res){})
        }
      db.rentals.save({id: result[0].id, returned_date: today}, function(err, inserted){
        res.json(title)
      })
    })
  })
  },

  overdue:  function(req, res){
    var db = req.app.get('db')
    var overdue_rentals = []
    var today = new Date()
    db.run("select customers.name, rentals.title , rentals.checkout_date, rentals.due_date from customers, rentals where rentals.customer_id = customers.id and rentals.returned_date is null and rentals.due_date < $1;", [today], function(err, result){
      res.json(result)
    })
  }

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
