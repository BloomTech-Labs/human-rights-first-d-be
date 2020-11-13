// libraries
const axios = require('axios');
const router = require('express').Router();
const {body, validationResult} = require('express-validator')

//validation
const validate_us_demo_pie = [
  body('user_input')
  .isAlpha()
  .isLength({min:2, max:2})
  .isUppercase()
]
router.post('/us_demo_pie', validate_us_demo_pie, async (req, res, next) => {
  try {
    //validate inputs
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(404).json({ errors: 'Invalid state abbreviation. Must be 2 characters, and all capitalize.'})
    }

    // get data from ds server
    const state_demographics = (await axios.post(`http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/us_demo_pie`, {
      user_input: req.body.user_input
    })).data

    //return DS server data to the client
    res.status(200).json(state_demographics)
  } catch (error) {
    next(error)
  }
})

const validate_us_map = [
  body('start_date').isDate(),
  body('end_date').isDate(),
  body('sort_by').isIn(['Armed/Unarmed', 'Demographic', 'Victim\'s gender']),
]
router.post('/us_map', default_values_us_map, validate_us_map, async (req, res, next) => {
  try {
    //validate
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      console.log("inside errors")
      return res.status(404).json({not_valid: 'Invalid input'})
    }

    //get data from ds_server
    let incidents_rate = await axios.post(
      `http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/us_map`,
      {
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        sort_by: req.body.sort_by,
      }
    );

    //return send ds_server data
    res.status(200).json(incidents_rate.data);
  } catch (error) {
    next(error);
  }
});

router.post('/us_bar', async (req, res, next) => {
  try {

    //set defaul values
    const is_no_start_date = !req.body.start_date
    const is_no_end_date = !req.body.end_date
    const is_no_group_by = !req.body.group_by
    const is_no_asc = !req.body.asc

    if (is_no_start_date) req.body.start_date = "2013-01-01"
    if (is_no_end_date) req.body.end_date = "2019-01-01"
    if (is_no_group_by) req.body.group_by = {National: true}
    if (is_no_asc) req.body.asc = true

    
    // get data from DS server
    const us_bar = await axios.post(`http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/us_bar`, {
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        group_by: req.body.group_by,
        asc: req.body.asc
      })

    // send DS data to cliet  
    res.status(200).json(us_bar.data )
  } catch (error) {
    next(error)
  }
})

router.post('/us_pie_vic', async (req, res, next) => {
  try {
    //set defaul values
    if(!req.body.start_date) req.body.start_date = "2013-01-01"
    if(!req.body.end_date) req.body.end_date = "2020-01-01"
    if(!req.body.group_by) req.body.group_by = {"National":true}
    if(!req.body.sort_by) req.body.end_date = "Victim's race"
    //get DS server data
    const pie = await axios.post(`http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/us_pie_vic`, {
      start_date: "2013-01-01",
      end_date: "2020-01-01",
      group_by: {"National":true},
      sort_by: "Victim's race"
    })

    // respond to client with the DS data
    res.status(200).json(pie.data)
  } catch (error) {
    next(error)
  }
})

router.get('/us_non_lethal', async (req, res, next) => {
  try {
    //collect data from the DS team server
    const ds_res = await axios.get('http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/us_non_lethal')

    //return ds Plotly data to client 
    res.status(200).json(ds_res.data)
  } catch (error) {
    next(error)
  }
  
})

router.get('/us_non_lethal_line', async (req, res, next) => {
  try {
    const ds_res = (await axios.get('http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/us_non_lethal_line')).data

    res.status(200).json(ds_res)
  } catch (error) {
    next(error)
  }
} )


//local middleware
function default_values_us_map(req,res,next){
      
      // set default values to the post input if none are provided
      const is_no_start_date = !req.body.start_date
      const is_no_end_date = !req.body.end_date
      const is_no_sort_by = !req.body.sort_by
      if(is_no_start_date) req.body.start_date = "2013-01-01";
      if(is_no_end_date) req.body.end_date = "2019-01-01";
      if(is_no_sort_by) req.body.sort_by = "Demographic";
      next()
    }

module.exports = router;
