require('dotenv').config();

const express = require('express');
const fetch = require('node-fetch');
const hbs = require('hbs');
const port = 3000;
const app = express();

hbs.registerPartials(`${__dirname}/views/components`);
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res, next) => {
  fetch(
      `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${process.env.NYT_CLIENT_KEY}`,
  )
      .then((res) => res.json())
      .then((body) => {
        const firstTen = body.results.slice(0, 10);
        console.log(firstTen[0]);
        res.render('index', firstTen);
      });
  // res.render('index');
});

app.listen(`${port}`, () => {
  console.log(`My NYT project is running on port ${port} 🗞  📰`);
});
