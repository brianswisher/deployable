(function() {
  'use strict';

  var express = require('express');
  var router = express.Router();

  // bottom catch all
  router.get('*', function(req, res) {
    res.send('deployable');
  });

  module.exports = router;
}());
