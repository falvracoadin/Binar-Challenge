const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const historyRouter = require('./history');
const biodataRouter = require('./biodata');

router.use('/user', userRouter);

router.use('/history', historyRouter);

router.use('/biodata', biodataRouter);

module.exports = router;