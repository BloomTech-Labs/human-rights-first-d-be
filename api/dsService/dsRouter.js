const express = require('express');
const router = express.Router();
const dsModel = require('./dsModel');
const authRequired = require('../middleware/authRequired');
const Incidents = require('../incidentsService/incidentsModel');

// Part of Starter Code, Not Connected to anything yet.
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


// This function gets data from DS and populates tables with their data
router.get('/populate', function (req, res) {
  dsModel
    .getData()
    .then((response) => {
      // Parsing the data we get from data science (it comes in as a string initially, this makes it a JSON Object)
      const incidentsArray = JSON.parse(response.data);

      // First map to add Incidents
      const incidentsMap = incidentsArray.map((incident) => ({
        id: incident.id,
        state: incident.state,
        city: incident.city,
        lat: incident.geocoding.lat,
        long: incident.geocoding.long,
      }));

      // Second map to add sources for incidents
      const linksMap = incidentsArray.map((incident) => {
        const linkArray = incident.links.map((link) => ({
          incident_id: incident.id,
          link: link,
        }));
        return linkArray;
      });

      // Adding Incidents only (no sources yet)
      Incidents.addIncidents(incidentsMap)
        .then(() => {
          // Adding sources
          Incidents.addSources(linksMap.flat()).then(() => {
            res
              .status(201)
              .json({ message: 'Incidents and sources inserted :D' });
          });
        })
        .catch((error) => {
          res
            .status(500)
            .json({ message: 'add incidents failed', error: error });
        });
    })
    .catch((error) => {
      res.status(500).json({ message: error, error_found: true });
    });
});

// This route was made simply to quickly get data from data science and see what they were sending. (doesn't populate, just shows data)
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

module.exports = router;
