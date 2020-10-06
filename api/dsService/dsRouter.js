const express = require('express');
const router = express.Router();
const dsModel = require('./dsModel');
const authRequired = require('../middleware/authRequired');

//Placeholder endpoints to be built:
router.get('/incidents', function (req, res) {
  //gets all incidents
});

router.get('/incidents/:id', function (req, res) {
  //gets specific incident
});

module.exports = router;
