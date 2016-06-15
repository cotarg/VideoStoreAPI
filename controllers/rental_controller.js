var RentalController = {
  index:  function(req, res){
    res.render('index',  { title: ""})
  },

  customersRentingThisFilm:  function(req, res){
    res.render('index',  { title: ""})
  },

  filmRentalHistoryByCustName:  function(req, res){
    res.render('index',  { title: ""})
  },

  filmRentalHistoryByCODate:  function(req, res){
    res.render('index',  { title: ""})
  },

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
