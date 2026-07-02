const rateLimitWindowMs = 15 * 60 * 1000; // 15 minutes
const maxRequests = 100;
const ipRequestCounts = new Map();

// Clean up old entries periodically
setInterval(() => {
  ipRequestCounts.clear();
}, rateLimitWindowMs);

function rateLimit(req, res, next) {
  const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const now = Date.now();

  if (!ipRequestCounts.has(ip)) {
    ipRequestCounts.set(ip, { count: 1, resetTime: now + rateLimitWindowMs });
    return next();
  }

  const rateData = ipRequestCounts.get(ip);
  if (now > rateData.resetTime) {
    rateData.count = 1;
    rateData.resetTime = now + rateLimitWindowMs;
    return next();
  }

  rateData.count += 1;
  if (rateData.count > maxRequests) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests, please try again later.',
    });
  }

  next();
}

module.exports = rateLimit;
