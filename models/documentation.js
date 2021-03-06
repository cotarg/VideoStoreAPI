var docs = {
  customers: {
    list_all_customers: {
      routeName: 'List all customers',
      httpRequest: 'GET /customers',
      requiredParameters: 'none',
      optionalParameters: 'none',
      intendedUse: 'This endpoint contains a list of all customers in your database, generated at time of request.',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

    customers_sorted_by_name: {
      routeName: 'List Customers, Sorted by Name',
      httpRequest: 'GET /customers/sort/name',
      requiredParameters: 'none',
      optionalParameters: 'n=? to limit the number of records returned, p=? for offset',
      intendedUse: 'This endpoint returns a list of all customers in your database (generated at time of query), sorted by name. Query string n=? will limit the number of returned records, and p=? will offset your records by that number.',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },
    
    customers_sorted_by_zip: {
      routeName: 'List Customers, Sorted by Postal Code',
      httpRequest: 'GET /customers/sort/postal_code',
      requiredParameters: 'none',
      optionalParameters: 'n=? to limit the number of records returned, p=? for offset',
      intendedUse: 'This endpoint returns a list of customers in your database (generated at time of query) sorted by zipcode. Query string n=? will limit the number of records returned, and p=? will offset your records by that number.',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

    list_customer_checkouts: {
      routeName: 'List Checkouts to Customer',
      httpRequest: 'GET /customers/:id/current',
      requiredParameters: 'customer id number',
      optionalParameters: 'none',
      intendedUse: 'Given a customer id, this endpoint returns a list (generated at time of query) of all checkouts a customer currently has.',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

    customer_checkout_history: {
      routeName: 'List Customer Checkout History',
      httpRequest: 'GET /customers/:id/history',
      requiredParameters: 'customer id number',
      optionalParameters: 'none',
      intendedUse: 'This endpoint returns a list (generated at time of query) of all checkouts a customer has previously made. (These are all films that have been returned.)',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    }
  },

  movies: {
    list_all_movies: {
      routeName: 'List All Movies',
      httpRequest: 'GET /movies',
      requiredParameters: 'none',
      optionalParameters: 'none',
      intendedUse: 'This endpoint will return a list of all movies in your database, generated at time of query.',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

    movies_sorted_by_title: {
      routeName: 'List Movies, Sorted by Title',
      httpRequest: 'GET /movies/sort/title',
      requiredParameters: 'none',
      optionalParameters: 'n=? to limit the number of records returned, p=? for offset',
      intendedUse: 'This endpoint will return a list of all movies in your database, generated at time of query. Query string n=? will allow you to limit how many records are returned, and query string p=? will offset your records by that number.',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

    movies_sorted_by_release: {
      routeName: 'List Movies, Sorted by Title',
      httpRequest: 'GET /movies/sort/title',
      requiredParameters: 'none',
      optionalParameters: 'n=? to limit the number of records returned, p=? for offset',
      intendedUse: 'This endpoint will return a list of all movies in your database, generated at time of query. Query string n=? will allow you to limit how many records are returned, and query string p=? will offset your records by that number.',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

    movie_details: {
      routeName: 'View Details for Title',
      httpRequest: 'GET /movies/:title',
      requiredParameters: 'film title',
      optionalParameters: 'none',
      intendedUse: 'This endpoint returns the details for a movie title. It will show title, summary description, release date, number of copies owned, and number of copies in stock. Generated at time of query.',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

    movie_checkouts: {
      routeName: 'View Checkouts for Title',
      httpRequest: 'GET /movies/:title/current',
      requiredParameters: 'film title',
      optionalParameters: 'none',
      intendedUse: 'This endpoint returns the the current checkout records for the given film. It will return customer name, phone number, and account credit for each checked out copy of the film.',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

    movie_hist_name_sort: {
      routeName: 'View Historical Checkouts for Title by Name',
      httpRequest: 'GET /movies/:title/history/sort/name',
      requiredParameters: 'film title',
      optionalParameters: 'none',
      intendedUse: 'This endpoint returns the the historical checkout records for the given film. It will return customer name, phone number, and account credit for each checked out copy of the film and is ordered by customer name.',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

    movie_hist_checkout_sort: {
      routeName: 'View Historical Checkouts for Title by Date',
      httpRequest: 'GET /movies/:title/history/sort/date',
      requiredParameters: 'film title',
      optionalParameters: 'none',
      intendedUse: 'This endpoint returns the the historical checkout records for the given film. It will return customer name, phone number, and account credit for each checked out copy of the film and is ordered by customer name.',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    }
  },

  rentals: {
    rental_checkouts: {
      routeName: 'View Current Checkouts for Title',
      httpRequest: 'GET /rentals/:title/current',
      requiredParameters: 'film title',
      optionalParameters: 'none',
      intendedUse: 'This endpoint returns the the historical checkout records for the given film. It will return customer name, phone number, and account credit for each checked out copy of the film and is ordered by customer name.',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

    rental_hist_name_sort: {
      routeName: 'View Historical Checkouts for Title by Name',
      httpRequest: 'GET /rentals/:title/history/sort/name',
      requiredParameters: 'film title',
      optionalParameters: 'none',
      intendedUse: 'This endpoint returns the the historical checkout records for the given film. It will return customer name, phone number, and account credit for each checked out copy of the film and is ordered by customer name.',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

    rental_hist_checkout_sort: {
      routeName: 'View Historical Checkouts for Title by Date',
      httpRequest: 'GET /rentals/:title/history/sort/date',
      requiredParameters: 'film title',
      optionalParameters: 'none',
      intendedUse: 'This endpoint returns the the historical checkout records for the given film. It will return customer name, phone number, and account credit for each checked out copy of the film and is ordered by customer name.',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

    checkout_film_to_cust: {
      routeName: 'View Historical Checkouts for Title by Date',
      httpRequest: 'POST /rentals/:title/checkout',
      requiredParameters: 'film title in route, customer ID in post body',
      optionalParameters: 'none',
      intendedUse: 'This endpoint will create a new checkout record tying the customer id and film title together in the rentals database along with date checked out and due date. Current default rental period is 3 days.',
      dataBreakdown: {
        someDataFound: 'returns the checkout record',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

    checkin_film_from_cust: {
      routeName: 'View Historical Checkouts for Title by Date',
      httpRequest: 'POST /rentals/:title/return',
      requiredParameters: 'film title in route, customer ID in post body',
      optionalParameters: 'none',
      intendedUse: 'This endpoint will update the checkout record tying the customer id and film title together with the date checked in. It will also deduct any fees from customer credit. (This can send customer credit negative, which means they owe money.',
      dataBreakdown: {
        someDataFound: 'returns the checkout record',
        noDataFound: 'Error',
        error: 'Error'
      }
    },

    list_of_overdue_films: {
      routeName: 'List All Overdue Films',
      httpRequest: 'GET /rentals/overdue',
      requiredParameters: 'none',
      optionalParameters: 'none',
      intendedUse: 'This endpoint will return a list (generated at time of query) of all films currently checked out and overdue.',
      dataBreakdown: {
        someDataFound: 'returns the found data',
        noDataFound: 'Error',
        error: 'Error'
      }
    }
  }
}
