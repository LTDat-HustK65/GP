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
app.use('/public', express.static(path.join(__dirname, './src/public/')))

app.get('/', (req, res) => {
    var html = path.join(__dirname, './src/public/html/index.html');
    res.sendFile(html);
});
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});