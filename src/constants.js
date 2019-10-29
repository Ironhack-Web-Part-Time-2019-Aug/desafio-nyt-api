const {API_KEY} = process.env;
const apiRoot = `https://api.nytimes.com/svc`;
const mostPopularRoot = `${apiRoot}/mostpopular/v2`;
const apiPaths = {
  articleSearch: `${apiRoot}/search/v2/articlesearch.json?api-key=${API_KEY}`,
  realTime: `${apiRoot}/news/v3/content/all/all.json?api-key=${API_KEY}`,
  trending: `${mostPopularRoot}/viewed/1.json?api-key=${API_KEY}`,
  trendingByEmail: `${mostPopularRoot}/emailed/1.json?api-key=${API_KEY}`,
};

module.exports = {
  apiPaths,
};
