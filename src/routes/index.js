const express = require(`express`);
/* eslint-disable */
const router = express.Router();
/* eslint-enable */

const {
  HomeController, SearchResultController,
  TrendingsController, TrendingByEmailController,
  AboutMeController,
} = require('../controllers');

router.get('/', HomeController);
router.get('/search-result', SearchResultController);
router.get('/trendings', TrendingsController);
router.get('/trendings-by-email', TrendingByEmailController);
router.get('/about', AboutMeController);

module.exports = {
  router,
};
