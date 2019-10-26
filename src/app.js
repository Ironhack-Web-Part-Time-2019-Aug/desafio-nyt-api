require('dotenv').config();
// const fetch = require('node-fetch');
const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', __dirname+'/views');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');


app.listen(3000, ()=> console.log('Start server'));
