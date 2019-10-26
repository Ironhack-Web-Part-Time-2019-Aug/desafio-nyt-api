const {API_KEY} = process.env;
const apiRoot = `https://api.nytimes.com/svc`;
const apiPaths = {
  articleSearch: `${apiRoot}/search/v2/articlesearch.json?api-key=${API_KEY}`,
  trending: `${apiRoot}/news/v3/content/all/all.json?api-key=${API_KEY}`,
  mostShared: `${apiRoot}/mostpopular/v2/emailed/1.json?api-key=${API_KEY}`,
};

module.exports = {
  apiPaths,
};
