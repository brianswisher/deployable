(function() {
  'use strict'

  var express = require('express')
  var router = express.Router()

  // bottom catch all
  router.get('*', function(req, res) {
    var payload = { name: 'deployable' }

    res.setHeader('Content-Type', 'application/json')

    res.send(JSON.stringify(payload))
  });

  module.exports = router
}())
