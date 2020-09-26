require('dotenv').config();
const {PORT} = process.env;
const app = require(`./appConfig.js`);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Aplicação rodando na porta ${PORT}`);
});
