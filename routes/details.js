const express = require('express');
const router = express.Router();
const detailsCtrl = require('../controllers/details')
const loggedIn = require('../config/auth');

router.get('/', loggedIn, detailsCtrl.index);
router.get('/new', loggedIn, detailsCtrl.new);
router.get('/:id', loggedIn, detailsCtrl.show);
router.post('/', loggedIn, detailsCtrl.create);
router.delete('/:id', loggedIn, detailsCtrl.delete);

module.exports = router;