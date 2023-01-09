const Joi = require("joi");

const schemas = {
  profilePage: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string(),
    displayName: Joi.string().alphanum().required(),
    email: Joi.string().email().required(),
    priPhone: Joi.number()
      .required()
      .integer()
      .min(10 ** 9)
      .max(10 ** 10 - 1),
    workPhone: Joi.number(),
    year: Joi.number(),
    location: Joi.string().required(),
  }),
};

module.exports = schemas;
