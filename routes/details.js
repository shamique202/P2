const express = require('express');
const router = express.Router();
const detailsCtrl = require('../controllers/details');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, detailsCtrl.index);
router.get('/new', isLoggedIn, detailsCtrl.new);
router.get('/:id', isLoggedIn, detailsCtrl.show);
router.post('/', isLoggedIn, detailsCtrl.create);
router.delete('/:id', isLoggedIn, detailsCtrl.delete);
router.get('/:id/edit', isLoggedIn, detailsCtrl.edit);
router.put('/:id', isLoggedIn, detailsCtrl.update);
router.post('/:id/designs', isLoggedIn, detailsCtrl.post);



module.exports = router; 