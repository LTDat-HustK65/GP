const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');

const router = require('./src/route/aip')

const app = express();
const PORT = 3000;

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});