var Customer = require('../../models/customer')

describe('Customer', function () {
  afterEach(function () {
    Customer.end()
  })

  describe('#all', function () {
    it('should return all customers', function (done) {
      Customer.all(function (error, customers) {
        expect(customers.length).toEqual(200)
        done()
      })
    })
  })
})
