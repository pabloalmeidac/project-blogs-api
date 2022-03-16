const Joi = require('joi');

const postEditSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
}).messages({
  'any.required': '400|{{ #label }} is required',
  'any.array': '400|{{ #label }} must be a array',
  'string.base': '400|{{ #label }} must be a string',
  
});

const validate = (objPost) => postEditSchema.validate(objPost);

module.exports = { validate };