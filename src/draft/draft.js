const mongoose = require('mongoose');
const configObjectDB = require('../config/configDB/ObjectDB');

const draft = { 
    Draft,
    
 };

function Draft() {
    configObjectDB.findOne({
        'properties.name': 'Apple'
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
}

module.exports = draft;