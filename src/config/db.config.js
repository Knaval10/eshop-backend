const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');
const env = require('./env.config');

// Initialize Sequelize for PostgreSQL
const sequelize = new Sequelize(env.databaseUrl, {
  dialect: 'postgres',
  logging: env.env === 'development' ? console.log : false,
});

async function connectMongo() {
  try {
    const conn = await mongoose.connect(env.mongodbUri);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    throw error;
  }
}

async function connectPostgres() {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connected successfully.');
  } catch (error) {
    console.error(`PostgreSQL connection error: ${error.message}`);
    throw error;
  }
}

async function connectDB() {
  await connectMongo();
  await connectPostgres();
}

module.exports = {
  connectDB,
  sequelize,
  mongoose,
};
