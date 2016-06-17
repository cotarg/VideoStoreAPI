var CustomersController = {

  index:  function(req, res){
    res.render('index',  { title: ""})
  },

  // Retrive a list of all customers
  customerList:  function(req, res){
    var db = req.app.get('db')
    db.run("select * from customers", function(err, result){
      res.json(result)
    });
  },

  // Retrive a subset of customers (/customers/sort/name?n=10&p=2)
  // Given a sort column, return n customer records, offset by p records (this will be used to create "pages" of customers)
  // db.products.find({},{order: "price desc"}, function(err,products){
  //   //products ordered in descending fashion
  // });
  customersNameSort:  function(req, res){
    var db = req.app.get('db')
    var num = Number(req.query.n)
    db.customers.find({}, {order: 'name asc', limit: num}, function(err, result){
      res.json(result)
    });
  },

  //sort by registered_at
  customersRegisteredSort:  function(req, res){
    var db = req.app.get('db')
    var num = Number(req.query.n)
    db.customers.find({}, {order: 'registered_at asc', limit: num}, function(err, result){
      res.json(result)
    });
  },

  customersPostalSort:  function(req, res){
    var db = req.app.get('db')
    var num = Number(req.query.n)
    db.customers.find({}, {order: 'postal_code asc', limit: num}, function(err, result){
      res.json(result)
    });
  },

  // Given a customer's id...
  // List the movies they currently have checked out (/customers/5/current)
  // includes return date
  // ordered by check out date
  currentCheckOuts:  function(req, res){
    var db = req.app.get('db')

    res.render('index',  { title: ""})
  },

  // Given a customer's id...
  //List the movies a customer has checked out in the past
  // includes return date
  // ordered by check out date
  historicalCheckOuts:  function(req, res){
    var db = req.app.get('db')

    res.render('index',  { title: ""})
  }


}

module.exports = CustomersController
