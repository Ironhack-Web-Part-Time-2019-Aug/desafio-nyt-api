require('dotenv').config();
const express = require(`express`);
const app = express();
const fetch = require(`node-fetch`);
const hbs = require(`hbs`);
const viewsPath = __dirname + '/views';

const {
  PORT, API_KEY, API_URL,
  ARTICLE_SEARCH_PATH,
} = process.env;

app.engine('hbs', require('hbs').__express);
app.set('view engine', 'hbs');
app.set(`views`, viewsPath);
hbs.registerPartials(`${viewsPath}/partials`);

app.get('/', (request, response) => {
  response.render('index');
});

app.get('/search-result', (request, response) => {
  const {q} = request.query.q;
  const url = `${API_URL}${ARTICLE_SEARCH_PATH}?q=${q}&api-key=${API_KEY}`;
  fetch(url)
      .then( (result) => result.json() )
      .then( (result) => response.send(result.response.docs));
});

app.get('/trendings', (request, response) => {
  response.send('Notícias mais visualizadas');
});

app.get('/trending-by-email', (request, response) => {
  response.send('Notícias mais compartilhadas');
});

app.get('/about', (request, response) => {
  response.send('Sobre');
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Aplicação rodando na porta ${PORT}`);
});
