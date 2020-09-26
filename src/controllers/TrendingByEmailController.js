const {apiPaths} = require('../constants');
const fetch = require(`node-fetch`);

const TrendingByEmailController = (request, response) => {
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
};

module.exports = {
  TrendingByEmailController,
};
