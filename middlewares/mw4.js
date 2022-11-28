const mw4 = (req, res, next) => {
  req.mw4 = 'MW4';
  next();
};

module.exports = mw4;