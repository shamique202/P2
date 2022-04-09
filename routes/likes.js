const express = require('express');
const router = express.Router();
const likesCtrl = require('../controllers/likes');
const loggedIn = require('../config/auth');

router.get('/likes/:id/edit', loggedIn, likesCtrl);
router.post('/designs/:id/likes', loggedIn, likesCtrl.create);
router.delete('/likes/:id', loggedIn, likesCtrl.delete);
router.put('/likes/:id', loggedIn, likesCtrl.update);

module.exports = router; 