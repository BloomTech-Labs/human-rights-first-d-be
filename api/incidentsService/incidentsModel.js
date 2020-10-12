const db = require('../../data/db-config');

module.exports = {
  addIncidents,
};

function addIncidents(arr) {
  return db('incidents').insert(arr);
}
