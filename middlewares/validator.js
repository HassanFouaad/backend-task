/* eslint-disable no-prototype-builtins */
const Joi = require("joi");

function validator(schema) {
  return (req, res, next) => {
    const { query, body, method } = req;
    console.log("query to validate >> ", query);
    console.log("body to validate >> ", body);

    if (query) {
      for (const key in query) {
        if (query.hasOwnProperty(key)) {
          query[key] = query[key] ? query[key].trim() : "";
        }
      }
    }

    const { error } =
      method === "GET" || method === "DELETE"
        ? Joi.validate(query, schema)
        : Joi.validate(body, schema);
    if (error) {
      return res.status(400).json({
        error: {
          message: error.details[0].message,
          status: 400,
        },
      });
    }

    return next();
  };
}

module.exports = {
  validator,
};
