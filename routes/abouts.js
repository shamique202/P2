const express = require('express');
const router = express.Router();
const aboutsCtrl = require('../controllers/abouts');

router.get('/', aboutsCtrl.index);

module.exports = router;