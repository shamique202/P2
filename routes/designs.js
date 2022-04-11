const express = require('express');
const router = express.Router();
const designsCtrl = require('../controllers/designs');
const isLoggedIn = require('../config/auth');

router.get('/details/:id/designs/new', isLoggedIn, designsCtrl.new);
router.get('/designs/:id', isLoggedIn, designsCtrl.show);
router.post('/details/:id/designs', isLoggedIn, designsCtrl.create);
router.delete('/designs/:id', isLoggedIn, designsCtrl.delete);


module.exports = router;