var MoviesController = {
  index: function (req, res) {
    res.render('index', {title: ''})
  },

  // Retrieve a list of all movies (/movies)
  listAllMovies:  function (req, res) {
    var db = req.app.get('db')
    db.run('select * from movies', function (err, result) {
      res.json(result)
    })
  },

  // Retrieve a subset of movies (/movies/sort/release-date?n=5&p=1)
  // Given a sort column, return n movie records, offset by p records (this will be used to create 'pages' of movies)
  // Sort columns are
  // title
  // release_date
  moviesByTitle: function (req, res) {
    res.render((''), {title: ''})
  },

  moviesByRelease: function (req, res) {
    res.render((''), {title: ''})
  },

  seeMovieDetails: function (req, res) {
    res.render((''), {title: ''})
  },

  // Given a movie's title...
  // Get a list of customers that have currently checked out a copy of the film (/movies/Jaws/current)
  // include each customer's name, phone number, and account credit
  customersRentingThisFilm: function (req, res) {
    res.render((''), {title: ''})
  },

  filmRentalHistoryByCustName: function (req, res) {
    res.render((''), {title: ''})
  },

  filmRentalHistoryByCODate: function (req, res) {
    res.render((''), {title: ''})
  }
}

module.exports = MoviesController
