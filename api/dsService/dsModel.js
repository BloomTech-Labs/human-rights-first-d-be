const axios = require('axios');
const dsConfig = require('../../config/dsConfig');
const dsClient = axios.create(dsConfig);

const getPrediction = (x1, x2, x3) => {
  return dsClient.post('/predict', { x1, x2, x3 });
};

// const findAll = () => {
//   return all incidents
// }
const getData = () => {
  return dsClient.get('/getdata');
};
module.exports = { getPrediction, getData };
