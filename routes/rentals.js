// rentals by title
// titles of films must be provided in request
router.get ('/rentals/:title/current' , 'rental_controller.customersRentingThisFilm')
router.get ('/rentals/:title/history/sort/name' , 'rental_controller.filmRentalHistoryByCustName')
router.get ('/rentals/:title/history/sort/date' , 'rental_controller.filmRentalHistoryByCODate')

// rentals by id/title
// the method the post hits will use the post body to query the database
// the post body must contain a customer id and a title of a film
router.post ('/rentals/:title/checkout' , 'rental_controller.checkoutFilmToCust')
router.post ('/rentals/:title/return' , 'rental_controller.checkInFilmToCust')

// overdues
router.get ('/rentals/overdue' , 'rental_controller.overdue')
