const express = require('express');
const router = express.Router();
const Incidents = require('./incidentsModel');

router.get('/incidents', function (req, res) {
  Incidents.getIncidents()
    .then((arr) => {
      res.status(200).json(arr);
    })
    .catch((error) => {
      res.status(500).json({
        message: 'could not retrieve incidents',
        error: error,
      });
    });
});

router.get('/incidents/:id', function (req, res) {
  const { id } = req.params;

  Incidents.findIncidentById(id)
    .then((evt) => {
      res.status(200).json(evt);
    })
    .catch((error) => {
      res.status(500).json({
        message: 'could not retrieve the requested incident',
        error: error,
      });
    });
});

router.get('/dummy', function (req, res) {
  Incidents.getDummy()
    .then((arr) => {
      res.status(200).json(arr);
    })
    .catch((error) => {
      res.status(500).json({
        message: 'could not retrieve incidents',
        error: error,
      });
    });
});

module.exports = router;
