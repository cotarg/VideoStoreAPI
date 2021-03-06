var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var paginate = require('express-paginate');
var app = module.exports = express();
var massive = require('massive')

//database setup
var connectionString = 'postgres://localhost/video_api'
var massiveInstance = massive.connectSync({connectionString : connectionString})
app.set('db', massiveInstance)

// connect to Massive and get the db instance. You can safely use the
// convenience sync method here because its on app load
// you can also use loadSync - it's an alias


// Set a reference to the massive instance on Express' app:
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var indexRoutes = require('./routes/index')
app.use('/', indexRoutes)

var movieRoutes = require('./routes/movies')
app.use('/movies', movieRoutes)

var customerRoutes = require('./routes/customers')
app.use(paginate.middleware(10, 50));
app.use('/customers', customerRoutes)

var rentalRoutes = require('./routes/rentals')
app.use('/rentals', rentalRoutes)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})


module.exports = app
