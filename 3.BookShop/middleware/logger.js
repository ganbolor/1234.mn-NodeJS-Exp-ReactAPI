const logger = (req, res, next) => {
  req.userId = "asdfw34dsfpgjasdf;jpoij-42";
  console.log(`${req.method} ${req.protocol}://${req.host}${req.originalUrl}`);
  next();
};

module.exports = logger;
