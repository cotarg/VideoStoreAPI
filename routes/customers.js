// customers index
router.get ('/customers' , 'customers_controller.list of customers')

// customers sort
router.get ('/customers/sort/name' , 'customers_controller.customersNameSort')
router.get ('/customers/sort/registered_at' , 'customers_controller.customersRegisteredSort')
router.get ('/customers/sort/postal_code' , 'customers_controller.customersPostalSort')

// customers by id
router.get ('/customers/:id/current' , 'customers_controller.currentCheckOuts')
router.get ('/customers/:id/history' , 'customers_controller.historicalCheckOuts')
