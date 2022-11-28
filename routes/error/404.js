const express = require('express');
const router = express.Router();

const createError = require('http-errors');

router.use((req, res, next) => {
  next(createError(404, '파일을 찾을 수 없습니다.'));
});

module.exports = router;