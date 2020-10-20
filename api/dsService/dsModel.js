const axios = require('axios');
const dsConfig = require('../../config/dsConfig');
const dsClient = axios.create(dsConfig);

/*
starter code (didnt implement in our project, but will leave it, incase future releases needs it.)
*/
const getPrediction = (x1, x2, x3) => {
  return dsClient.post('/predict', { x1, x2, x3 });
};

/*
Connects to data science API and retrieves all incidents they have included.
*/
const getData = () => {
  return dsClient.get('/getdata');
};
module.exports = { getPrediction, getData };
