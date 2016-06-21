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
    var num = Number(req.query.n)
    var p = Number(req.query.p)

    db.movies.find({}, {order: 'title asc', limit: num, offset: p}, function (err, result) {
      res.json(result)
    })
  },

  moviesByRelease: function (req, res) {
    var db = req.app.get('db')
    var num = Number(req.query.n)
    var p = Number(req.query.n)
    db.movies.find({}, {order: 'release_date asc', limit: num, offset: p}, function (err, result) {
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
  customersRentingThisFilm: function(req, res){
    var db = req.app.get('db')
    var title = req.params.title
    db.run('select customers.name, customers.phone, customers.account_credit from rentals, customers where rentals.title=$1 and rentals.returned_date is null;', [title], function(err, result){
      res.json(result)
    })
    
  },

  filmRentalHistoryByCustName: function (req, res) {
    res.render((''), {title: ''})
  },

  filmRentalHistoryByCODate: function (req, res) {
    res.render((''), {title: ''})
  }
}

module.exports = MoviesController
