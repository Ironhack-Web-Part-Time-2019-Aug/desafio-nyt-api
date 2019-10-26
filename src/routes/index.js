const fetch = require('node-fetch');

const home = (request, response) => {
  fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${process.env.NYT_ID}`)
      .then((res) => res.json())
      .then((json) => {
        const result = json.results;
        response.render('home', {result});
      });
};

const searchResults = (request, response) => {
  fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${request.query.q}&api-key=${process.env.NYT_ID}`)
      .then((res) => res.json())
      .then((json) => {
        const result = json.response.docs;
        response.render('searchResults', {result});
      });
};

module.exports = {
  home,
  searchResults,
};
