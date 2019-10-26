require('dotenv').config();
const express = require('express');
const app = express();
const hbs = require('hbs');
const {home} = require('./routes/index');

app.set('view engine', 'hbs');
app.set('views', __dirname+'/views');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', home);

app.listen(3001, ()=> console.log('Start server'));
