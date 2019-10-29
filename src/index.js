require('dotenv').config();
const {apiPaths} = require('./constants');
const express = require(`express`);
const app = express();
const fetch = require(`node-fetch`);
const hbs = require(`hbs`);
const viewsPath = __dirname + '/views';
const {PORT} = process.env;

app.use(express.static(`${__dirname}/public`));
app.engine('hbs', require('hbs').__express);
app.set('view engine', 'hbs');
app.set(`views`, viewsPath);
hbs.registerPartials(`${viewsPath}/partials`);

app.get('/', (request, response) => {
  const url = `${apiPaths.realTime}`;
  fetch(url)
      .then( (result) => result.json())
      .then( (results) => {
        const docs = results.results.splice(0, 10);
        return docs.map(
            (news) => {
              return {
                section: news.section,
                date: news.published_date,
                title: news.title,
                description: news.abstract,
                imageUrl: news.thumbnail_standard,
                url: news.url,
              };
            });
      })
      .then( (news) => response.render(`index`, {news}) );
});

app.get('/search-result', (request, response) => {
  const {q} = request.query;
  const url = `${apiPaths.articleSearch}&q=${q}`;
  fetch(url)
      .then( (result) => result.json() )
      .then( (result) => {
        // response.send(result.response.docs);
        const docs = result.response.docs.splice(0, 10);
        return docs.map(
            (news) => {
              return {
                section: news.section_name,
                date: news.pub_date,
                title: news.headline.main,
                description: news.abstract,
                imageUrl: (
                  news.multimedia.length ?
                  `https://www.nytimes.com/${news.multimedia[0].url}`:
                  ''
                ),
                url: news.web_url,
              };
            });
      })
      .then( (news) => response.render(`index`, {news, query: q}) );
});

app.get('/trendings', (request, response) => {
  const url = `${apiPaths.trending}`;
  fetch(url)
      .then( (result) => result.json())
      .then( (results) => {
        const docs = results.results.splice(0, 10);
        return docs.map(
            (news) => {
              return {
                section: news.section,
                date: news.published_date,
                title: news.title,
                description: news.abstract,
                imageUrl: news.thumbnail_standard,
                url: news.url,
              };
            });
      })
      .then( (news) => response.render(`index`, {news}) );
});

app.get('/trendings-by-email', (request, response) => {
  const url = `${apiPaths.trendingByEmail}`;
  fetch(url)
      .then( (result) => result.json())
      .then( (results) => {
        const docs = results.results.splice(0, 10);
        return docs.map(
            (news) => {
              return {
                section: news.section,
                date: news.published_date,
                title: news.title,
                description: news.abstract,
                imageUrl: news.thumbnail_standard,
                url: news.url,
              };
            });
      })
      .then( (news) => {
        const templateData = {
          news,
          title: 'Mais compartilhadas por e-mail',
        };
        response.render(`index`, templateData);
      });
});

app.get('/about', (request, response) => {
  response.render('about');
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Aplicação rodando na porta ${PORT}`);
});
