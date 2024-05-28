const express = require('express');
const cors = require('cors');

const path = require('path');
const bodyParser = require('body-parser');

const router = require('./server/src/route/aip')

const app = express();
const PORT = 3000;
//app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/src/public', express.static(path.join(__dirname, './server/src/public')));
app.use('/client/js', express.static(path.join(__dirname, './client/src/publics/js')));
// app.use('/server/js/1', express.static(path.join(__dirname, './server/src/public/js/BABYLONRoboticArm.js')));
// app.use('/server/js/2', express.static(path.join(__dirname, './server/src/public/js/Object.js')));


app.get('/admin', (req, res) => {
    var publicPath = path.join(__dirname, './server/src/public/html/homepage.html');
    res.sendFile(publicPath);
});

app.get('/user', (req, res) => {
    var userInterface = path.join(__dirname, './client/src/publics/html/index.html');
    res.sendFile(userInterface);
});

app.get('/watching',(req, res) => {
    var cobotSimulation = path.join(__dirname, './server/src/public/html/watchingRoboticArm.html');
    res.sendFile(cobotSimulation);
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Admin: http://localhost:${PORT}/admin`);
});