var RentalController = {
  index:  function(req, res){
    res.render('index',  { title: ""})
  },

  // See a list of customers that have currently checked out any of the movie's inventory (/rentals/Jaws/customers)
  customersRentingThisFilm:  function(req, res){
    res.render('index',  { title: ""})
  },

  filmRentalHistoryByCustName:  function(req, res){
    res.render('index',  { title: ""})
  },

  filmRentalHistoryByCODate:  function(req, res){
    res.render('index',  { title: ""})
  },

  // Given a customer's id and a movie's title ...
  // "check out" one of the movie's inventory to the customer (/rentals/Jaws/check-out)
  // Establish a return date
  // Charge the customer's account (cost up to you)
  checkoutFilmToCust:  function(req, res){
    res.render('index',  { title: ""})
  },

  checkInFilmToCust:  function(req, res){
    res.render('index',  { title: ""})
  },

  rental_controller.overdue:  function(req, res){
    res.render('index',  { title: ""})
  }


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
