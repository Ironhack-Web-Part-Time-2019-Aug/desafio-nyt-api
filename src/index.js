// Boa sorte! <3
require('dotenv').config();
const fetch = require('node-fetch');

const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('index');
});

app.listen(3000, () => console.log("My NYT project running on port 3000"));