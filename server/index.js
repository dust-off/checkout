const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// const router = require('./routes')

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
