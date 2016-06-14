// rentals by title
// titles of films must be provided in request
get '/rentals/:title/current' => 'controller#customersRentingThisFilm'
get '/rentals/:title/history/sort/name' => 'controller#filmRentalHistoryByCustName'
get '/rentals/:title/history/sort/date' => 'controller#filmRentalHistoryByCODate'

// rentals by id/title
// the method the post hits will use the post body to query the database
// the post body must contain a customer id and a title of a film
post '/rentals/:title/checkout' => 'controller#checkoutFilmToCust'
post '/rentals/:title/return' => 'controller#checkInFilmToCust'

// overdues
get '/rentals/overdue' => 'controller#overdue'
