const mw5 = (param) => {
  return (req, res, next) => {
    req.mw5 = "MW5 - " + param;
    next();
  }
}

module.exports = mw5;