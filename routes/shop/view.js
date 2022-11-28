const express = require('express');
const router = express.Router();


router.get(['/', '/:id'], (req, res, next) => {
  if(req.params.id){
    res.json({
      result: 'OK',
      id: req.params.id
    });
  }else{
    res.redirect('/shop');
  }

});

module.exports = router;