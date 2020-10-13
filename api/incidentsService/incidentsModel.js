const db = require('../../data/db-config');

module.exports = {
  addIncidents,
  findIncidentById,
};

function addIncidents(arr) {
  return db('incidents').insert(arr);
}

// async function addSources(obj){
//     const[id] = await db('sources').insert(obj).returning("id")
// }

async function findIncidentById(id) {
  const incident = await db('incidents').where({ id }).first();

  const sources = await db('sources').where({ incident_id: id }).select('*');

  const result = { ...incident, sources };
  return result;
}
