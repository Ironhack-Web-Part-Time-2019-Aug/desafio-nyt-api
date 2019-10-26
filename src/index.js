require('dotenv').config();
const express = require(`express`);
const app = express();
const {PORT} = process.env;

app.get('/', (request, response) => {
  response.send('Página inicial');
});

app.get('/search-result', (request, response) => {
  response.send('Resultado de busca');
});

app.get('/trendings', (request, response) => {
  response.send('Notícias mais visualizadas');
});

app.get('/trending-by-email', (request, response) => {
  response.send('Notícias mais compartilhadas');
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Aplicação rodando na porta ${PORT}`);
});
