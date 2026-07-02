require('dotenv').config();

const app = require('./app');
const { db, env, logger } = require('./config');

async function startServer() {
  try {
    logger.info('Connecting to databases...');
    await db.connectDB();
    logger.info('Databases connected successfully.');

    app.listen(env.port, () => {
      logger.info(`Server running in ${env.env} mode on port ${env.port}`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();