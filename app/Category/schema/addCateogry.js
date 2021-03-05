const Joi = require("joi");

exports.addCategorySchema = {
  name: Joi.string().min(2).max(45).required(),
};
