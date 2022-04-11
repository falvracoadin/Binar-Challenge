const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);

router.use((req, res)=>{
    res.status(404).json({
        status : 'not found'
    });
});

module.exports = router;