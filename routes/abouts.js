const express = require('express');
const router = express.Router();
const aboutsCtrl = require('../controllers/abouts');

router.get('/aboutme', aboutsCtrl.index);

module.exports = router;