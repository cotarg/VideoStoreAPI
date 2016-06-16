var express = require('express')
var router = express.Router()
var moviesController = require('../controllers/movies_controller')

// movies index
router.get('/movies', moviesController.listAllMovies)

// movies sorted
router.get ('/movies/sort/title', moviesController.moviesByTitle)
router.get ('/movies/sort/release_date', moviesController.moviesByRelease)

// look at individual titles
// this requires a film title which is used in the HTTP request
router.get ('/movies/:title', moviesController.seeMovieDetails)

router.get ('/movies/:title/current', moviesController.customersRentingThisFilm)
router.get ('/movies/:title/history/sort/name', moviesController.filmRentalHistoryByCustName)
router.get ('/movies/:title/history/sort/date', moviesController.filmRentalHistoryByCODate)

module.exports = router
