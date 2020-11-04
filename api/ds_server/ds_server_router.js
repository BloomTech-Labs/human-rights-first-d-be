//import libraries
const axios = require('axios');
const router = require('express').Router();

router.get('/unemploymentrate/:state', async (req, res, next) => {
  try {
    //length must be 2 letter abbreviation

    const a_state_unemployment_rate = await axios.get(
      `http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/viz/${req.params.state}`
    );

    //case: state is not found
    if (a_state_unemployment_rate.detail) {
      res.status(404).json({ message: 'State not found' });
    }

    res.status(200).json(a_state_unemployment_rate);
  } catch (error) {
    next(error);
  }
});
