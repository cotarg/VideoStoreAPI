// customers index
get '/customers' => 'controller#list of customers'

// customers sort
get '/customers/sort/name' => 'controller#customersNameSort'
get '/customers/sort/registered_at' => 'controller#customersRegisteredSort'
get '/customers/sort/postal_code' => 'controller#customersPostalSort'

// customers by id
get '/customers/id/current' => 'controller#currentCheckOuts'
get '/customers/id/history' => 'controller#historicalCheckOuts'