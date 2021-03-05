const Joi = require("joi");

exports.addProviderSchema = {
  name: Joi.string().min(2).max(45).required(),
};
