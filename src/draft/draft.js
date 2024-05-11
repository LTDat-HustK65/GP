const mongoose = require('mongoose');
const configObjectDB = require('../config/configDB/ObjectDB');

const draft = { 
    FindObject,
    
 };

function FindObject() {
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