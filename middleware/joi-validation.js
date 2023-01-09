const Joi = require("joi");

const middleware = (schema, property) => {
  return (req, res, next) => {
    try {
      const result = schema.validate(req[property]);
      const { value, error } = result;
      if (!error) {
        next();
      } else {
        const { details } = error;
        const message = details.map((i) => i.message).join(",");
        console.log("error", message);
        res.status(422).json({
          error: message,
        });
      }
    } catch (err) {
      console.log("Exception on Error Message", err);
    }
  };
};

module.exports = middleware;
