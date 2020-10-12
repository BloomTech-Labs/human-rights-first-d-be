const db = require('../../data/db-config');

module.exports={
    addIncidents
}

function addIncidents(arr){
    arr.foreach(incident => {
        return db('incidents').insert(incident)
    });
} 


// need to create model to successfuly insert data we get from ds into our tables
/* 
Psuedo-code for addIncidents
    Loops through every index of data set
    → checks if data set ID already in there
        → if not then adds to the table
        → if there is, then updates fields that are passed
*/


