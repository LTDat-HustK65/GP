const express = require('express');
const bodyParser = require('body-parser');

const configObjectDB = require('../config/configDB/ObjectDB.js');
const Function = require('../service/Fucntion.js');

const router = express.Router();

router.post('/create', (req, res) => {
    Function.CreatObject();
    res.send('Create Object');
});


module.exports = router;
