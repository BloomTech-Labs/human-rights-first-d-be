const express = require('express')
const router = express.Router()
const Incidents = require('./incidentsModel')

router.post('/addIncidents', (req, res) => {
    const incidentsArray = req.body;
    
	Incidents.addIncidents(incidentsArray)
		    .then((response) => {
		     	res.status(201).json({error_found: false, message: response})
             })
             .catch((error) =>  {
                 res.status(500).json({error_found: true, message: error})
             })
})
