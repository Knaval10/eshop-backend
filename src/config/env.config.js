const Joi = require('joi');

const envSchema = Joi.object({
  PORT: Joi.number().default(3000),
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  MONGODB_URI: Joi.string().required().description('MongoDB connection URI'),
  DATABASE_URL: Joi.string().required().description('PostgreSQL connection URI'),
  JWT_SECRET: Joi.string().required().description('JWT secret key'),
}).unknown().required();

const { value: envVars, error } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  port: envVars.PORT,
  env: envVars.NODE_ENV,
  mongodbUri: envVars.MONGODB_URI,
  databaseUrl: envVars.DATABASE_URL,
  jwtSecret: envVars.JWT_SECRET,
};
