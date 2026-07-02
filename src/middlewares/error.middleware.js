const { logger } = require('../config');

function errorHandler(err, req, res, next) {
  logger.error(err.stack || err);

  // Mongoose invalid ID
  if (err.name === 'CastError') {
    return res.status(400).json({ success: false, message: 'Invalid ID' });
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(400).json({ success: false, message: `${field} already exists` });
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ success: false, message: messages.join(', ') });
  }

  // JWT error
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }

  // Default error
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Something went wrong',
  });
}

module.exports = errorHandler;
