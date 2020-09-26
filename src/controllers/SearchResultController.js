const {apiPaths} = require('../constants');
const fetch = require(`node-fetch`);

const SearchResultController = (request, response) => {
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
};

module.exports = {
  SearchResultController,
};
