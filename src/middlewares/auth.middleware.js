const jwt = require('jsonwebtoken');
const { env, logger } = require('../config');

function protect(req, res, next) {
  const authHeader = req.headers.authorization;
  logger.info("authHeader", authHeader)
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Not authorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, env.jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Not authorized, invalid token' });
  }
}

module.exports = { protect };
