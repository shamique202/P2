const express = require('express');
const router = express.Router();
const designsCtrl = require('../controllers/designs');
const loggedIn = require('../config/auth');

router.get('/details/:id/designs/new', loggedIn, designsCtrl.new);
router.get('/designs/:id', loggedIn, designsCtrl.show);
router.post('/details/:id/designs', designsCtrl.create);