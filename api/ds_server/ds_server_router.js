// libraries
const axios = require('axios');
const router = require('express').Router();
const {body, validationResult} = require('express-validator')

const validate_us_demo_pie = [
  body('user_input')
  .isAlpha().withMessage('Must be letters')
  .isLength({min:2, max:2}).withMessage('Must be 2 charts long')
]
router.post('/us_demo_pie', default_value_us_demo_pie, validate_us_demo_pie, async (req, res, next) => {
  try {
    //validate inputs
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(404).json(errors.array())
    }

    // get data from ds server
    const us_state_abbreviation = req.body.user_input.toUpperCase() 
    const state_demographics = (await axios.post(`http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/us_demo_pie`, {
      user_input: us_state_abbreviation
    })).data

    //return DS server data to the client
    res.status(200).json(state_demographics)
  } catch (error) {
    next(error)
  }
})

const validate_us_map = [
  body('start_date')
    .isDate().withMessage('Must be formated YYYY/MM/DD')
    ,
  body('end_date')
    .isDate().withMessage('Must be formatedd YYYY/MM/DD')
    ,
  body('sort_by')
    .isIn(['Armed/Unarmed', 'Demographic', 'Gender']).withMessage('Must be Armed/Unarrmed. Demographic, or Gender')
    ,
]
router.post('/us_map', default_values_us_map, validate_us_map, async (req, res, next) => {
  try {
    //validate
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(404).json(errors.array())
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

const validate_us_bar = [
  body('start_date').isDate(),
  body('end_date').isDate(),
  body('group_by.National')
    .optional()
    .isBoolean().withMessage('Must be a boolean.')
    ,
  body('group_by.States')
    .optional()
    .isArray().withMessage('States must be an array.')
    ,
  body('group_by.States[*]')
    .optional()  
    .isAlpha().withMessage('Must be letters.')
    .isLength({min:2, max:2}).withMessage('Must be 2 characters long.')
    .isUppercase().withMessage('Must be uppercase.')
    ,
  body('group_by.Zipcode')
    .optional()
    .isArray().withMessage('Zipcode must be an array.')
    ,
  body('group_by.Zipcode[*]')
  .optional()
  .isPostalCode('US').withMessage('Must be a zipcode.')
  ,
  body('group_by.City')
  .optional()
  .isArray().withMessage('City must be an array.')
  ,
  body('group_by.City*')
    .optional()  
    .isLength({min:4, max: 30}).withMessage('City inputs must be 4-30 characters long.')
    , 
  body('asc')
    .isBoolean().withMessage('Asc must be a booleon.')
    ,
]
router.post('/us_bar', default_values_us_bar, validate_us_bar, async (req, res, next) => {
  try {
    //if validation is not valid
    const errors = validationResult(req)
    const is_errors = !errors.isEmpty()
    if(is_errors){
      return res.status(404).json(errors.array())
    }

    // get data from DS server
    const us_bar = (await axios.post(`http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/us_bar`, {
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        group_by: req.body.group_by,
        asc: req.body.asc
      })).data

    if(us_bar.Error) return res.status(404).json(us_bar)

    // send DS data to cliet  
    res.status(200).json(us_bar)
  } catch (error) {
    next(error)
  }
})

const validate_us_pie_vic = [
  body('start_date')
    .isDate().withMessage('Start Date must be YYYY/MM/DD')
    ,
  body('end_date')
    .isDate().withMessage('End date must be YYYY/MM/DD')
    ,
  body('group_by.National')
    .optional()
    .isBoolean().withMessage('National must be an boolean.')
    ,
  body('group_by.States')
  .optional()
  .isArray().withMessage('States must be an array.')
  ,
  body('group_by.States[*]')
    .optional()
    .isAlpha().withMessage('States must be letters')
    .isLength({min:2, max:2}).withMessage('States must be 2 characters long')
    .isUppercase().withMessage('States must be uppercase.')
    ,
  body('group_by.City')
    .optional()
    .isArray().withMessage('City must be an array.')
    ,
  body('group_by.City[*]')
    .optional()
    .isLength({min:4, max: 30}).withMessage('City inputs must be from 4-30 characters.')
    ,
  body('sort_by')
  .isIn(['Geography', 'Body Camera', 'Alleged Threat Level', 'Symptoms of mental illness?', 'Unarmed/Did Not Have an Actual Weapon', 'Alleged Weapon',`Victim's race`, `Victim's race`]).withMessage(`Sorty by must be Victim's race.`)
]
router.post('/us_pie_vic', default_values_us_pie_vic, validate_us_pie_vic, async (req, res, next) => {
  try {
    //validation
    const errors = validationResult(req)
    const is_errors = !errors.isEmpty()
    if(is_errors){
      return res.status(404).json(errors.array())
    }

    //get DS server data
    const pie = (await axios.post(`http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/us_pie_vic`, {
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      group_by: req.body.group_by,
      sort_by: req.body.sort_by
    })).data

    // respond to client with the DS data
    res.status(200).json(pie)
  } catch (error) {
    next(error)
  }
})

router.get('/us_non_lethal', async (req, res, next) => {
  try {
    //collect data from the DS team server
    const ds_res = (await axios.get('http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/us_non_lethal')).data

    //return ds Plotly data to client 
    res.status(200).json(ds_res)
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
function default_value_us_demo_pie(req, res, next){
      // defaul value
      if (!req.body.user_input) req.body.user_input = "US"
      next()
    }
function default_values_us_pie_vic(req, res, next){

      //set defaul values
      if(!req.body.start_date) req.body.start_date = "2013-01-01"
      if(!req.body.end_date) req.body.end_date = "2020-01-01"
      if(!req.body.group_by) req.body.group_by = {"National":true}
      if(!req.body.sort_by) req.body.sort_by = "Victim's race"

      next()
    }
function default_values_us_bar(req, res, next){
      //set defaul values
      const is_no_start_date = !req.body.start_date
      const is_no_end_date = !req.body.end_date
      const is_no_group_by = !req.body.group_by
      const is_no_asc = !req.body.asc
  
      if (is_no_start_date) req.body.start_date = "2013-01-01"
      if (is_no_end_date) req.body.end_date = "2019-01-01"
      if (is_no_group_by) req.body.group_by = {National: true}
      if (is_no_asc) req.body.asc = false

      next()
    }
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
