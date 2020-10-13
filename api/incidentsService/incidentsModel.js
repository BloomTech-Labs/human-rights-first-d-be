const db = require('../../data/db-config');

module.exports = {
  addIncidents,
  addSources,
  findIncidentById,
};

function addIncidents(arr) {
    return db('incidents').insert(arr);
}

function addSources(arr1){
    return db('sources').insert(arr1);
}

async function findIncidentById(id) {
  const incident = await db('incidents').where({ id }).first();

  const sources = await db('sources').where({ incident_id: id }).select('*');

  const result = { ...incident, sources };
  return result;
}
