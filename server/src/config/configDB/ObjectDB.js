const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/GraduatedProject');

const Schema = mongoose.Schema;

const objectSchema = new Schema({
    timeApear: Date,
    properties: {
        name: String,
        speed: Number,
        currentLocation:{
            x: Number,
            y: Number,
            z:Number
        },
        // deceivedLocation:{
        //     x: Number,
        //     y: Number,
        //     z:Number
        // },
        // deceivedTime: Date
    }
}, { 
    collection: 'ObjectDB' 
});

const ObjectDBModule = mongoose.model('ObjectDB', objectSchema);

module.exports = ObjectDBModule;