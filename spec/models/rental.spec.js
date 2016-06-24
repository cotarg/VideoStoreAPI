var Rental = require('../../models/rental')

describe('rental', function(){
  afterEach(function() {
    Rental.end()
  })
  describe('.deets', function() {
    it('returns one object from the databse', function(done){
      Rental.deets("Jaws", function(error, result){
        expect(error).toBe(null)
        expect(result).toNotBe(null)
        done()
      })
    })

    it('returns an object in the right format', function(done){
      Rental.deets('Jaws', function(error, result){
        expect(Object.keys(result[0])).toEqual(["id", 'title', 'overview', "release_date", "inventory", 'stock'])
        done()
      })
    })

    it("returns empty array when it can't find a movie", function(done){
      Rental.deets('lksjdfkj', function(error, result) {
        expect(error).toBe(null)
        expect(result).toNotBe(undefined)
        done()
      })
    })

  })

  describe('.whoRentedThis', function() {
    it('returns an array of customers who have rented the movie', function(done){
      Rental.whoRentedThis("Jaws", function(error, result){
        expect(error).toBe(null)
        expect(result).toNotBe(null)
        expect(Object.keys(result[0])).toEqual(['name', 'phone', 'account_credit'])
        done()
      })
    })

    it('returns empty array when no one has rented the film', function(done){
      Rental.whoRentedThis("Turkey face", function(error, result){
        expect(error).toBe(null)
        expect(result).toNotBe(null)
        expect(result).toEqual([])
        done()
      })
    })
  })


})
