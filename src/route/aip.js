const express = require('express');
const bodyParser = require('body-parser');

const configObjectDB = require('../config/configDB/ObjectDB.js');
const Function = require('../service/Fucntion.js');
const draftFucntion = require('../draft/draft.js');

const router = express.Router();

router.post('/create', (req, res) => {
    Function.CreatObject();
    res.send('Detect Object');
});

router.get('/select/:objName', (req, res) => {
    var objName = req.params.objName;
    // var action = req.params.action;

    Function.CheckObjectInDB(objName);
    res.send('Find Object');
});

router.get('/draft/find', (req, res) => {
    draftFucntion.FindObject();
    res.send('<draft> Find Object');
});
module.exports = router;
