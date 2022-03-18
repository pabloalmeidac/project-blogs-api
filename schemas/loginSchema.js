const Joi = require('joi');
// Rodrigo Moreira me salvou quando o campo for vazio
const loginSchema = Joi.object({
  email: Joi.string().empty().email().required(),
  password: Joi.string().empty().length(6).required(),
}).messages({
  'any.required': '400|{{ #label }} is required',
  'string.base': '400|{{ #label }} must be a string',
  'string.empty': '400|{{ #label }} is not allowed to be empty',
  'string.email': '400|{{ #label }} must be a valid email',
  'string.length': '400|{{ #label }} length must be {{ #limit }} characters long',
});

const validate = (objLogin) => loginSchema.validate(objLogin);

module.exports = { validate };