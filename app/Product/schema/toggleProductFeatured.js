const Joi = require("joi");
exports.toggleProductFeaturedSchema = {
  productId: Joi.number().positive().integer().required(),
};
