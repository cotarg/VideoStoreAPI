var express = require('express')
var router = express.Router()
var rental_controller = require('../controllers/rental_controller')

// rentals by title
// titles of films must be provided in request
router.get ('/overdue' , rental_controller.overdue)
router.get ('/:title', rental_controller.rentalInfo)
router.get ('/:title/current' , rental_controller.customersRentingThisFilm)
// router.get ('/:title/history/sort/name' , rental_controller.filmRentalHistoryByCustName)
// router.get ('/:title/history/sort/date' , rental_controller.filmRentalHistoryByCODate)

// rentals by id/title
// the method the post hits will use the post body to query the database
// the post body must contain a customer id and a title of a film
router.post ('/:title/checkout' , rental_controller.checkoutFilmToCust)
router.post ('/:title/return' , rental_controller.checkInFilmToCust)

// overdues

module.exports = router
