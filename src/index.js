// Boa sorte! <3

require('dotenv').config();

const express = require('express');
// const hbs = require('hbs');
const fetch = require('node-fetch');

const app = express();

const key = process.env.API;

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get(['/', '/home'], (req, res, next) => {
  const news = fetch('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=' + key)
      .then((res) => res.json()
          .then((json) => json));
  news.then( (newsHome) => {
    console.log(newsHome);
    res.render('index', {news: newsHome.results});
  });
});

app.get('/search-results', (req, res, next) => {
  const searchResults = fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q={query}&api-key=' + key)
      .then((res) => res.json()
          .then((json) => json));
  searchResults.then( (newsSearch) => {
    console.log(newsSearch);
    res.render('search-results', {searchResults: newsSearch.response.docs});
  });
});

app.listen(3000);
