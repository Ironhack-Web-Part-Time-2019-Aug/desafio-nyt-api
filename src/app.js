require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const port = 3000;
const app = express();

hbs.registerPartials(`${__dirname}/views/components`);
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res, next) => {
  res.render('index');
});

app.listen(`${port}`, () => {
  console.log(`My NYT project is running on port ${port} 🗞  📰`);
});
