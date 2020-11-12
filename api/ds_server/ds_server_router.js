//import libraries
const axios = require('axios');
const router = require('express').Router();

router.post('/us_demo_pie', async (req, res, next) => {
  try {
    //validate inputs
    const is_missing_user_input = !req.body.user_input 
    if(is_missing_user_input) res.status(404).json({error: "Missing a state"})
    
    // get data from ds server
    const state_demographics = await axios.post(`http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/us_demo_pie`, {
      user_input: req.body.user_input
    })

    //return DS server data to the client
    res.status(200).json(state_demographics.data)
  } catch (error) {
    next(error)
  }
})

router.post('/us_map', async (req, res, next) => {
  try {
    // set default values to the post input if none are provided
    const is_no_start_date = !req.body.start_date
    const is_no_end_date = !req.body.end_date
    const is_no_sort_by = !req.body.sort_by
    if(is_no_start_date) req.body.start_date = "2013-01-01";
    if(is_no_end_date) req.body.end_date = "2019-01-01";
    if(is_no_sort_by) req.body.sort_by = "Demographic";

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

router.post('/us_non_lethal', async (req, res, next) => {
  try {
    //defaul value
    if (!req.body.user_input) req.body.user_input = 20

    //collect data from the DS team server
    const ds_res = await axios.post('http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/us_non_lethal', {
      user_input: req.body.user_input
    })

    //return ds Plotly data to client 
    res.status(200).json(ds_res.data)
  } catch (error) {
    next(error)
  }
  
})
module.exports = router;
