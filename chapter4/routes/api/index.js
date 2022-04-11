const express = require('express');
const router = express.Router();
const apiRouter_v1 = require('./v1'); //ambil router api untuk semua versi atau versi tertentu yang disediakan

router.use('/v1', apiRouter_v1);

module.exports = router;