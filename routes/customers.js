var express = require('express');
var router = express.Router();
var customers_controller = require('../controllers/customers_controller')


// customers index
router.get('/' , customers_controller.customerList)

// customers sort
router.get('/sort/name' , customers_controller.customersNameSort)
router.get('/sort/registered_at' , customers_controller.customersRegisteredSort)
router.get('/sort/postal_code' , customers_controller.customersPostalSort)

// customers by id
router.get('/:id/current' , customers_controller.currentCheckOuts)
router.get('/:id/history' , customers_controller.historicalCheckOuts)

module.exports = router
