const express = require('express');
const cors = require('cors');

const path = require('path');
const bodyParser = require('body-parser');

const router = require('./src/route/aip')

const app = express();
const PORT = 3000;
//app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/src/public', express.static(path.join(__dirname, './src/public')))
app.use('/js', express.static(path.join(__dirname, './forCustomer/js')));

app.get('/admin', (req, res) => {
    var html = path.join(__dirname, './src/public/html/homepage.html');
    res.sendFile(html);
});

app.get('/user', (req, res) => {
    var html = path.join(__dirname, './forCustomer/html/index.html');
    res.sendFile(html);
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Admin: http://localhost:${PORT}/admin`);
    console.log(`User: http://localhost:${PORT}/user`);
});