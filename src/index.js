require('dotenv').config();
const express = require(`express`);
const app = express();
const hbs = require(`hbs`);
const viewsPath = __dirname + '/views';
const {PORT} = process.env;
const { router } = require(`./routes`);

app.use(express.static(`${__dirname}/public`));
app.engine('hbs', require('hbs').__express);
app.set('view engine', 'hbs');
app.set(`views`, viewsPath);
hbs.registerPartials(`${viewsPath}/partials`);

app.use(router);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Aplicação rodando na porta ${PORT}`);
});
