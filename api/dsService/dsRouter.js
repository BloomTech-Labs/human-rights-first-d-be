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
        lat: incident.geocoding.lat,
        long: incident.geocoding.long,
      }));

      const linksMap = incidentsArray.map((incident) => {
        const linkArray = incident.links.map((link) => ({
          incident_id: incident.id,
          link: link,
        }));

        return linkArray;
      });

      Incidents.addIncidents(incidentsMap)
        .then((arr) => {
          Incidents.addSources(linksMap.flat()).then((response) => {
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
