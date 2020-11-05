//import libraries
const axios = require('axios');
const router = require('express').Router();

router.post('/us_map', async (req, res, next) => {
  try {
    // req.body.start_date
    // req.body.end_date
    // req.body.sort_by
    //
    console.log(`before axios `);

    let a_state_unemployment_rate = await axios.post(
      `http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/us_map`,
      {
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        sort_by: req.body.sort_by,
      }
    );

    console.log(`axios call => ${a_state_unemployment_rate}`);
    res.status(200).json({
      unemployment_rate: a_state_unemployment_rate.data,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
