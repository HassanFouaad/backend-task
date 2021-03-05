const Joi = require("joi");
exports.listProductsSchema = {
  categoryId: Joi.number().positive().integer().required(),
  page: Joi.number().positive().integer().optional(),
};
