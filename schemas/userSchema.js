const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string().required(),
}).messages({
  'any.required': '400|{{ #label }} is required',
  'string.base': '422|{{ #label }} must be a string',
  'string.email': '422|{{ #label }} must be a string',
  'string.min': '422|{{ #label }} length must be at least {{ #limit }} characters long',
  'number.positive': '422|{{ #label }} must be greater than or equal to 1',
});

const validate = (objUser) => userSchema.validate(objUser);

module.exports = { validate };