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
  customersNameSort:  function(req, res){
    res.render('index',  { title: ""})
  },

  //sort by registered_at
  customersRegisteredSort:  function(req, res){
    res.render('index',  { title: ""})
  },

  customersPostalSort:  function(req, res){
    res.render('index',  { title: ""})
  },

  // Given a customer's id...
  // List the movies they currently have checked out (/customers/5/current)
  // includes return date
  // ordered by check out date
  currentCheckOuts:  function(req, res){
    res.render('index',  { title: ""})
  },

  // Given a customer's id...
  //List the movies a customer has checked out in the past
  // includes return date
  // ordered by check out date
  historicalCheckOuts:  function(req, res){
    res.render('index',  { title: ""})
  }


}

module.exports = CustomersController
