var express = require('express')
var router = express.Router()
var routes = {
  list_all_customers: 'http://customers',
  customers_sorted_by_name: 'http://customers/sort/name',
  customers_sorted_by_zip: 'http://customers/sort/postal_code',
  list_customer_checkouts: 'http://customers/:id/current',
  list_customer_history: 'http://customers/:id/history',
  list_all_movies: 'http://movies',
  movies_sorted_by_title: 'http://movies/sort/title',
  movies_sorted_by_release: 'http://movies/sort/release_date',
  movie_details: 'http://movies/:title',
  movie_checkouts: 'http://movies/:title/current',
  movie_hist_name_sort: 'http://movies/:title/history/sort/name',
  movie_hist_checkout_sort: 'http://movies/:title/history/sort/date',
  rental_checkouts: 'http://rentals/:title/current',
  rental_hist_name_sort: 'http://rentals/:title/history/sort/name',
  rental_hist_checkout_sort: 'http://rentals/:title/history/sort/date',
  checkout_film_to_cust: 'http://rentals/:title/checkout',
  checkin_film_from_cust: 'http://rentals/:title/return',
  list_of_overdue_films: 'http://rentals/overdue'
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json(routes)
})

router.get('/zomg', function (req, res, next) {
  res.status(200).json({itWorks: 'it works!'})
})

module.exports = router
