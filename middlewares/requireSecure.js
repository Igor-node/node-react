module.exports = (req, res, next) => {
  if (req.headers.myapi !== 'front-end') {
    return res.status(403).send('Forbidden');
  }
  next();
};
