require('dotenv').config();
const {apiPaths} = require('./constants');
const express = require(`express`);
const app = express();
const fetch = require(`node-fetch`);
const hbs = require(`hbs`);
const viewsPath = __dirname + '/views';
const {PORT} = process.env;

app.engine('hbs', require('hbs').__express);
app.set('view engine', 'hbs');
app.set(`views`, viewsPath);
hbs.registerPartials(`${viewsPath}/partials`);

app.get('/', (request, response) => {
  const url = `${apiPaths.trending}`;
  fetch(url)
      .then( (result) => result.json())
      .then( (results) => {
        return results.results.map(
            (news) => {
              return {
                section: news.section,
                date: news.published_date,
                title: news.title,
                description: news.abstract,
                imageUrl: news.thumbnail_standard,
                url: news.url,
                thumbnail: news.thumbnail_standard,
              };
            });
      })
      .then( (news) => response.render(`index`, {news}) );
});

app.get('/search-result', (request, response) => {
  const {q} = request.query.q;
  const url = `${apiPaths.articleSearch}&q=${q}`;
  fetch(url)
      .then( (result) => result.json() )
      .then( (result) => {
        // response.send(result.response.docs);
        return result.response.docs.map(
            (news) => {
              return {
                section: news.section_name,
                date: news.pub_date,
                title: news.headline.main,
                description: news.abstract,
                imageUrl: news.thumbnail_standard,
                url: news.web_url,
                thumbnail: `https://www.nytimes.com/${news.multimedia[0].legacy.xlarge}`,
              };
            });
      })
      .then( (news) => response.send(news) );
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
