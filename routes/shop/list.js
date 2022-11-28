const { application } = require('express');
const express = require('express');
const router = express.Router();

//URL 주소  ==>  /shop
//URL 주소  ==>  /shop/list
//URL 주소  ==>  /shop/list/10(잡화)
//URL 주소  ==>  /shop/list/10/3(잡화, 3페이지)
router.get(['/', '/:cate', '/:cate/:page'], (req, res, next) => {
  res.json({
    result: 'OK',
    cate: req.params.cate || 10,
    page: req.params.page || 1
  })
});


module.exports = router