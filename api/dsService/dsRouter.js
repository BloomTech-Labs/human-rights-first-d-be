const express = require('express');
const axios = require('axios');
const router = express.Router();
const dsModel = require('./dsModel');
const authRequired = require('../middleware/authRequired');

router.get('/predict/:x1/:x2/:3', authRequired, function (req, res) {
  const x1 = String(req.params.x1);
  const x2 = String(req.params.x2);
  const x3 = String(req.params.x3);

  dsModel
    .getPrediction(x1, x2, x3)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
});

router.get('/incidents', function (req, res) {
  dsModel
    .getData()
    .then((response) => {
      const obj = JSON.parse(response.data);
      console.log(obj);
      axios.post(
        // 'https://labs27-d-hrf-api.herokuapp.com/incidents/addIncidents',
        'http://localhost:8000/incidents/addIncidents',
        obj
      );
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: error, error_found: true });
    });
});

router.get('/proxy', function (req, res) {
  dsModel
    .getData()
    .then((response) => {
      let info = JSON.parse(response.data);
      res.status(200).json(info);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});
// router.get('/incidents/:id', function (req, res) {
//   //gets specific incident
// });

module.exports = router;
