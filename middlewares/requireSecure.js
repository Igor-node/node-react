module.exports = (req, res, next) => {
  var ip = (req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress).split(",")[0];
  var server_ip = '127.0.0.1';
  if (ip !== server_ip) {
    return res.status(403).send('Forbidden');
  }
  next();
};
