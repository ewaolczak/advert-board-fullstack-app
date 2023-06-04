const express = require('express');
const router = express.Router();

const advert = require('../controllers/adverts.controller');
const authMiddleware = require('../utils/authMiddleware');
const imageUpload = require('../utils/imageUpload');

router.get('/ads', advert.getAll)
router.get('/ads/:id', advert.getById)
// router.get('ads/search/:searchPhrase', advert.searchPhrase)
router.post('/ads', /*authMiddleware*/ advert.post)
router.put('/ads/:id', /*authMiddleware*/ advert.put)
router.delete('/ads/:id', /*authMiddleware*/ advert.delete)

module.exports = router
