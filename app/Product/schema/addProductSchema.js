const Joi = require("joi");

exports.addProductSchema = {
  name: Joi.string().min(2).max(45).required(),
  image: Joi.string().min(2).max(45).optional(),
  categoryId: Joi.number().positive().integer().required(),
};

exports.addProductToProviderSchema = {
  providerId: Joi.number().positive().integer().required(),
  productId: Joi.number().positive().integer().required(),
  price: Joi.number().positive().integer().required(),
  available: Joi.boolean().required(),
};
