require('dotenv').config();
const express = require(`express`);
const app = express();
const {PORT} = process.env;

app.get('/', (request, response) => {
  response.send('Página inicial');
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Aplicação rodando na porta ${PORT}`);
});
