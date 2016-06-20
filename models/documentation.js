var docs = {
  customers: {
    list_all_customers: {
      httpRequest: 'GET /customers',
      requiredParameters: 'none',
      optionalParameters: 'none',
      intendedUse: 'Generates a list of all customers in the database with their details',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

    customers_sorted_by_name: {
      httpRequest: 'GET /customers/sort/name',
      requiredParameters: 'none',
      optionalParameters: 'n=? to limit the number of records returned, p=? for offset',
      intendedUse: 'Generates a list of all customers in the database sorted by name, can be limited/offset',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },
    
    customers_sorted_by_zip: {
      httpRequest: 'GET /customers/sort/postal_code',
      requiredParameters: 'none',
      optionalParameters: 'n=? to limit the number of records returned, p=? for offset',
      intendedUse: 'Generates a list of all customers in the database sorted by postal code',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

    list_customer_checkouts: {
      httpRequest: 'GET /customers/:id/current',
      requiredParameters: 'customer id number',
      optionalParameters: 'none',
      intendedUse: 'Generates a list of all titles the customer currently has checked out',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

    customers_sorted_by_zip: {
      httpRequest: 'GET /customers/:id/history',
      requiredParameters: 'customer id number',
      optionalParameters: 'none',
      intendedUse: 'Generates a list of all previous (historical) checkouts by customer',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    }
  },

  movies: {
    list_all_movies: {
      httpRequest: 'GET /movies',
      requiredParameters: 'none',
      optionalParameters: 'none',
      intendedUse: 'Generates a list of all films in the database with their details',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

  movies_sorted_by_title: {
      httpRequest: 'GET http://movies/sort/title',
      requiredParameters: 'none',
      optionalParameters: 'n=? to limit the number of records returned, p=? for offset',
      intendedUse: 'Generates a list of all movies in the database ',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

  movies_sorted_by_release: 'http://movies/sort/release_date',
  movie_details: 'http://movies/:title',
  movie_checkouts: 'http://movies/:title/current',
  movie_hist_name_sort: 'http://movies/:title/history/sort/name',
  movie_hist_checkout_sort: 'http://movies/:title/history/sort/date',
  }
}

  rental_checkouts: 'http://rentals/:title/current',
  rental_hist_name_sort: 'http://rentals/:title/history/sort/name',
  rental_hist_checkout_sort: 'http://rentals/:title/history/sort/date',
  checkout_film_to_cust: 'http://rentals/:title/checkout',
  checkin_film_from_cust: 'http://rentals/:title/return',
  list_of_overdue_films: 'http://rentals/overdue'
}

var customers = {
  list_all_customers: 'GET /customers',
  customers_sorted_by_name: 'GET /customers/sort/name',
  customers_sorted_by_zip: 'http://customers/sort/postal_code',
  list_customer_checkouts: 'http://customers/:id/current',
  list_customer_history: 'http://customers/:id/history'
}
