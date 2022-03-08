var express = require('express');
var router = express.Router();

const searchController = require('../controllers/search');

/* Search around a position */
router.get('/', searchController.searchAround);

/* Add all producteurs to DB. */
router.get('/add', searchController.addProducteurs);

module.exports = router;