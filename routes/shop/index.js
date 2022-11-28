const express = require('express');
const router = express.Router();

const listRouter = require('./list');
const viewRouter = require('./view');

router.use('/list', listRouter);
router.use('/view', viewRouter);

module.exports = router;