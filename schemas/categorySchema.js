const Joi = require('joi');

const categorySchema = Joi.object({
  name: Joi.string().required(),
}).messages({
  'any.required': '400|{{ #label }} is required',
  'string.base': '400|{{ #label }} must be a string',
});

const validate = (objCategory) => categorySchema.validate(objCategory);

module.exports = { validate };