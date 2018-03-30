module.exports = (req, res, next) => {
  var ip = (req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress).split(",")[0];
  if (ip !== 'server') {
    return res.status(403).send('Forbidden');
  }
  next();
};
