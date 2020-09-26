const {apiPaths} = require('../constants');
const fetch = require(`node-fetch`);

const HomeController = (request, response) => {
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
};

module.exports = {
  HomeController,
};
