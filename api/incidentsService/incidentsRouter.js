const express = require('express');
const router = express.Router();
const Incidents = require('./incidentsModel');

/* 
This route is used by frontend to retrieve all incidents (with sources) 
that are currently in the table
*/
router.get('/', function (req, res) {
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

/*
This route allows frontend to retrieve a specific incident (with sources) in the table. 
*/
router.get('/:id', function (req, res) {
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

/* 
This route allows frontend to test data if data science api is down, 
might need to re-seed data on Heroku from time to time when needed.
*/ 
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
