const db = require('../../data/db-config');

module.exports = {
  addIncidents,
  addSources,
  findIncidentById,
  getIncidents,
  getDummy,
};

/* 
Inserts array of incidents (without links/sources) to table  
*/
function addIncidents(arr) {
  return db('incidents').insert(arr);
}

/* 
Inserts array of sources to table
*/
function addSources(arr1) {
  return db('sources').insert(arr1);
}

/* 
Retrieves specfic incident by incident id
*/
async function findIncidentById(id) {
  const incident = await db('incidents').where({ id }).first();

  const sources = await db('sources').where({ incident_id: id }).select('*');

  const result = { ...incident, sources };
  return result;
}

/* 
Retrieves every incident along with all links/sources that belong to that specific incident.
*/
async function getIncidents() {
  const incidents = await db('incidents')
    .innerJoin('sources', 'incidents.id', 'sources.incident_id')
    .select(['incidents.*', db.raw('json_agg(sources.*) as sources')])
    .groupBy('incidents.id');

  return incidents;
}

/*
Retrieves everything in the dummy data tables
*/
function getDummy() {
  return db('dummy_data');
}
