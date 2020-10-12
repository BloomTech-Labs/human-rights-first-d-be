const express = require('express');
const router = express.Router();
const dsModel = require('./dsModel');
const authRequired = require('../middleware/authRequired');
const Incidents = require('../incidentsService/incidentsModel');

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
      const incidentsArray = JSON.parse(response.data);

      const incidentsMap = incidentsArray.map((incident) => ({
        id: incident.id,
        state: incident.state,
        city: incident.city,
      }));

      Incidents.addIncidents(incidentsMap)
        .then((arr) => {
          console.log('arr', arr);
          res.status(201).json({ message: 'incidents successfully added' });
        })
        .catch((error) => {
          res.status(500).json({ message: 'add incidents failed' });
        });
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
      let info = JSON.parse(response);
      console.log(info);
      res.status(200).json(info);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
