var Customer = require('../../models/customer')

describe('Customer', function () {
  beforeEach(function () {
    Customer.clean()
  })

  afterEach(function () {
    Customer.end()
  })

  describe('.all', function () {
    it('should return all customers', function (done) {
      Customer.all(function (error, customers) {
        expect(customers.length).toEqual(200)
        expect(Object.prototype.toString.call(customers)).toBe('[object Array]')
        done()
      })
    })
  })

  describe('.nameSort', function () {
    it('should return all customers, sorted by name', function (done) {
      Customer.nameSort(function (error, customers) {
      expect(customers.length).toEqual(200)
      expect(Object.prototype.toString.call(customers)).toBe('[object Array]')
      done()
      })
    })
  })

  describe('.registeredSort', function () {
    it('should return all customers, sorted by date registered', function (done) {
      Customer.nameSort(function (error, customers) {
      expect(customers.length).toEqual(200)
      expect(Object.prototype.toString.call(customers)).toBe('[object Array]')
      done()
      })
    })
  })

  describe('.postalSort', function () {
    it('should return all customers, sorted by zipcode', function (done) {
      Customer.nameSort(function (error, customers) {
      expect(customers.length).toEqual(200)
      expect(Object.prototype.toString.call(customers)).toBe('[object Array]')
      done()
      })
    })
  })


})
