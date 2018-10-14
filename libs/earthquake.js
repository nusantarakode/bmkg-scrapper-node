// gempa dirasakan
exports.getPerceivedEarthquake = function () {
  return [
    {
      tes: 'coba',
      num: 1
    },
    {
      tes: 'coba lagi',
      num: 12
    }
  ]
}

// gempa magnitudo >= 5
exports.getStrongEarthQuake = function () {
  let tes = exports.getPerceivedEarthquake()
  return tes
}
