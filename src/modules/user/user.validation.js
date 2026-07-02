const Joi = require('joi');

const updateProfileSchema = Joi.object({
  name: Joi.string().min(2).max(100).optional(),
  email: Joi.string().email().optional(),
});

module.exports = {
  updateProfileSchema,
};
