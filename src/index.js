// Boa sorte! <3

require('dotenv').config();

const express = require('express');
// const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/home', (req, res, next) => {
  res.render('index');
});

app.get('/search-results', (req, res, next) => {
  res.render('search-results');
});

app.listen(3000);
