const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/GraduatedProject');

const Schema = mongoose.Schema;

const processedObjectSchema = new Schema({
    timeApear: Date,
    properties: {
        name: String,
        speed: Number,
        currentLocation:{
            x: Number,
            y: Number,
            z:Number
        },
        processedLocation:{
            x: Number,
            y: Number,
            z:Number
        },
        processedTime: Date
    }
}, { 
    collection: 'ProcessedObjectDB' 
});

const processedObjectDBModule = mongoose.model('ProcessedObjectDB', processedObjectSchema);

module.exports = processedObjectDBModule;