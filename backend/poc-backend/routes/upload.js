var express = require('express');
var router = express.Router();

const uploadController = require('../controllers/upload');

/* Search around a position */
router.post('/upload', uploadController.uploadFiles);

router.get('/list', uploadController.getListFiles);

router.get('/:name', uploadController.serve);

router.get('/download/:name', uploadController.download);

module.exports = router;