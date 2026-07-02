const Joi = require('joi');

const createProductSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  price: Joi.number().min(0).required(),
  description: Joi.string().max(500).optional(),
  stock: Joi.number().min(0).optional(),
});

const updateProductSchema = Joi.object({
  name: Joi.string().min(2).max(100).optional(),
  price: Joi.number().min(0).optional(),
  description: Joi.string().max(500).optional(),
  stock: Joi.number().min(0).optional(),
});

module.exports = { createProductSchema, updateProductSchema };
