var express = require('express')
var router = express.Router()
var routes = {
  list_all_customers: '/customers',
  customers_sorted_by_name: '/customers/sort/name',
  customers_sorted_by_zip: '/customers/sort/postal_code',
  list_customer_checkouts: '/customers/:id/current',
  list_customer_history: '/customers/:id/history',
  list_all_movies: '/movies',
  movies_sorted_by_title: '/movies/sort/title',
  movies_sorted_by_release: '/movies/sort/release_date',
  movie_details: '/movies/:title',
  movie_checkouts: '/movies/:title/current',
  movie_hist_name_sort: '/movies/:title/history/sort/name',
  movie_hist_checkout_sort: '/movies/:title/history/sort/date',
  rental_checkouts: '/rentals/:title/current',
  rental_hist_name_sort: '/rentals/:title/history/sort/name',
  rental_hist_checkout_sort: '/rentals/:title/history/sort/date',
  checkout_film_to_cust: '/rentals/:title/checkout',
  checkin_film_from_cust: '/rentals/:title/return',
  list_of_overdue_films: '/rentals/overdue'
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json(routes)
})

router.get('/zomg', function (req, res, next) {
  res.status(200).json({itWorks: 'it works!'})
})

module.exports = router
