// movies index
get '/movies' => 'controller#listAllMovies'

// movies sorted
get '/movies/sort/title' => 'controller#moviesByTitle'
get '/movies/sort/release_date' => 'controller#moviesByRelease'

// look at individual titles
// this requires a film title which is used in the HTTP request
get '/movies/:title' => 'controller#seeMovieDetails'

get '/movies/:title/current' => 'controller#customersRentingThisFilm'
get '/movies/:title/history/sort/name' => 'controller#filmRentalHistoryByCustName'
get '/movies/:title/history/sort/date' => 'controller#filmRentalHistoryByCODate'
