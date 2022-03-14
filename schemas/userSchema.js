const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
  image: Joi.string().required(),
}).messages({
  'any.required': '400|{{ #label }} is required',
  'string.base': '400|{{ #label }} must be a string',
  'string.email': '400|{{ #label }} must be a valid email',
  'string.min': '400|{{ #label }} length must be at least {{ #limit }} characters long',
  'string.length': '400|{{ #label }} length must be {{ #limit }} characters long',
});

const validate = (objUser) => userSchema.validate(objUser);

module.exports = { validate };