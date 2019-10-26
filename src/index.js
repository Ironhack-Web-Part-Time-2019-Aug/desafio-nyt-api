// Boa sorte! <3

require('dotenv').config();

const express = require('express');
// const hbs = require('hbs');
const fetch = require('node-fetch');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=r8c8lKUCmOXNwxMoP0y5SxaUcPSexc3C')
      .then((res) => res.json())
      .then((json) => console.log(json));
  res.render('index', res);
});

app.get('/home', (req, res, next) => {
  res.render('index');
});

app.get('/search-results', (req, res, next) => {
  res.render('search-results');
});

app.listen(3000);
