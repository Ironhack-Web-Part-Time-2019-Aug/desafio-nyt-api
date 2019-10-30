// Boa sorte! <3

require('dotenv').config();

const express = require('express');
const app = express();
const fetch = require('node-fetch');


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


// const ny = process.env.API_KEY;
const ny = 'vaCpVEBG9QNtGdo530VdExyGyARuNAfA';


console.log(ny);

app.get('/', (request, response, next) => {
  fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${ny}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results.slice(0, 10)[0].url);
        const top = json.results.slice(0, 10);
        response.render('home', {top});
      });
});

app.get('/search', (request, response, next) => {
  const {search} = request.query;
  console.log(search);

  fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${ny}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.response.docs[0].web_url);
        const title = json.response.docs;
        response.render('search', {title});
      });
});

app.get('/trending', (request, response, next) => {
  fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${ny}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results[0]);
        const trending = json.results;
        response.render('trending', {trending});
      });
});

app.get('/email', (request, response, next) => {
  fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=${ny}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results[0].media[0]['media-metadata'][0].url);
        const trendingEmail = json.results;
        response.render('email', {trendingEmail});
      });
});

app.get('/about', (request, response, next) => {
  response.render('about');
});

app.listen(3000);


