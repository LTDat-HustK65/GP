const express = require('express');
const bodyParser = require('body-parser');

const configObjectDB = require('../config/configDB/ObjectDB.js');
const Function = require('../service/Fucntion.js');
const draftFucntion = require('../draft/draft.js');

const router = express.Router();

router.post('/create', (req, res) => {
    try {
        Function.CreatObject();
        res.send('Create Object');
    } catch (error) {
        console.error('Lỗi:', error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
});

router.post('/action', async (req, res) => {
    try {
        var objectName = req.body.objectName;
    var actionName = req.body.actionName;
    
    Function.SelcetObject(objectName, actionName);
    // Function.SelectActions(actionName, dataObject);
    res.status(200).json({ message: 'Action success' });
    } catch (error) {
        console.error('Lỗi:', error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
});

// router.get('/select/', (req, res) => {
//     var objName = req.body.

//     var check = Function.CheckObjectInDB(objName);
//     if (check == 0) {
//         console.log('Khong co object trong database');
//     }else {
//         res.send('Find Object');
//         /*var allowAction = */Function.SelcetObject(objName);
//     }
    
// });


router.post('/draft',async (req, res) => {
    try {
        const message = req.body.message;
        if (message) {
            return res.status(200).json({ message: message });
        }
          
    } catch (error) {
        console.error('Lỗi:', error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
});

module.exports = router;
