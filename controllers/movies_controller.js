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
    var db = req.app.get('db')
    db.run('select * from movies order by title asc', function (err, result) {
      res.json(result)
    })
  },

  moviesByRelease: function (req, res) {
    var db = req.app.get('db')
    db.run('select * from movies order by release_date asc', function (err, result) {
      res.json(result)
    })
  },

  seeMovieDetails: function (req, res) {
    var db = req.app.get('db')
    var title = req.params.title
    db.movies.where('title=$1', title, function (err, result) {
      res.json(result)
    })
  },

  // Given a movie's title...
  // Get a list of customers that have currently checked out a copy of the film (/movies/Jaws/current)
  // include each customer's name, phone number, and account credit
  // THIS IS WAITING BECAUSE IT REQUIRES RENTALS!
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
