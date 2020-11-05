//import libraries
const axios = require('axios');
const router = require('express').Router();

router.post('/us_map', async (req, res, next) => {
  try {
    // req.body.start_date
    // req.body.end_date
    // req.body.sort_by
    //
    // check that the body has the require inputs
    const isMissingInputs =
      !req.body.start_date && !req.body.end_date && !req.body.sort_by;

    if (isMissingInputs) {
      res
        .status(404)
        .json({ error: 'Incorrect start date, end date or sort by' });
    }

    let a_state_unemployment_rate = await axios.post(
      `http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/us_map`,
      {
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        sort_by: req.body.sort_by,
      }
    );

    res.status(200).json({
      unemployment_rate: a_state_unemployment_rate.data,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
