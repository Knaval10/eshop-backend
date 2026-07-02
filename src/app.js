const express = require('express');
const routes = require('./routes');
const errorHandler = require('./middlewares/error.middleware');
const rateLimit = require('./middlewares/rateLimit.middleware');

const app = express();

app.use(express.json());

// Enable trust proxy if behind a load balancer for accurate rate limiter IP detection
app.set('trust proxy', 1);

// Apply rate limiter to all routes
app.use(rateLimit);

app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

// Mount centralized routes under /api
app.use('/api', routes);

// Centralized error handling middleware
app.use(errorHandler);

module.exports = app;