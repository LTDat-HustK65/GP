const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/GraduatedProject');

const Schema = mongoose.Schema;

const ObjectSchema = new Schema({
    timeApear: Date,
    properties: {
        name: String,
        speed: Number,
        currentLocation:{
            x: Number,
            y: Number,
            z:Number
        },
        deceivedLocation:{
            x: Number,
            y: Number,
            z:Number
        },
        deceivedTime: Date
    }
}, { 
    collation: 'ObjectDB' 
});

const ObjectDB = mongoose.model('ObjectDB', ObjectSchema);

module.exports = ObjectDB;
