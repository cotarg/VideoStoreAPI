var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json({whatevs: 'whatevs!!!'})
})

router.get('/', function (req, res, next) {
  res.status(200).json({itWorks: 'it works!'})
})

module.exports = router
