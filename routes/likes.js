const express = require('express');
const router = express.Router();
const likesCtrl = require('../controllers/likes');
const isLoggedIn = require('../config/auth');

router.get('/likes/:id/edit', isLoggedIn, likesCtrl.edit);
router.post('/designs/:id/likes', isLoggedIn, likesCtrl.create);
router.delete('/likes/:id', isLoggedIn, likesCtrl.delete);
router.put('/likes/:id', isLoggedIn, likesCtrl.update);

module.exports = router; 