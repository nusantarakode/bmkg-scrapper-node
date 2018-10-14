var express = require('express');
var router = express.Router();

const { getPerceivedEarthquake, getStrongEarthQuake } = require('../libs/earthquake')

// gempa dirasakan
router.get('/', function (req, res) {
  let tesData = getPerceivedEarthquake()
  res.json(tesData)
})

// gempa M >= 5
router.get('/strong', function (req, res) {
  let tesData = getStrongEarthQuake()
  res.json(tesData)
})

// terakhir dirasakan
router.get('/latest', function (req, res) {
  let [latest] = getPerceivedEarthquake()
  res.json(latest)
})

// terakhir M>= 5
router.get('/latest/strong', function (req, res) {
  let tesData = getPerceivedEarthquake()
  res.json(tesData)
})

module.exports = router;
