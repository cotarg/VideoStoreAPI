var express = require('express')
var router = express.Router()
var moviesController = require('../controllers/movies_controller')

// movies index
router.get('/movies', 'movies_controller.listAllMovies')
router.get('/movies/help', 'movies_controller.index')

// movies sorted
router.get('/movies/sort/title', 'movies_controller.moviesByTitle')
router.get('/movies/sort/release_date', 'movies_controller.moviesByRelease')

// look at individual titles
// this requires a film title which is used in the HTTP request
router.get('/movies/:title', 'movies_controller.seeMovieDetails')
router.get('/movies/:title/current', 'movies_controller.customersRentingThisFilm')
router.get('/movies/:title/history/sort/name', 'movies_controller.filmRentalHistoryByCustName')
router.get('/movies/:title/history/sort/date', 'movies_controller.filmRentalHistoryByCODate')

module.exports = router
