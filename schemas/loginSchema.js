const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().allow('').email().required(),
  password: Joi.string().allow('').length(6).required(),
}).messages({
  'any.required': '400|{{ #label }} is required',
  'string.base': '400|{{ #label }} must be a string',
  'string.email': '400|{{ #label }} must be a valid email',
  'string.length': '400|{{ #label }} length must be {{ #limit }} characters long',
});

const validate = (objLogin) => loginSchema.validate(objLogin);

module.exports = { validate };