const { Category } = require('../models');

const create = async (name) => {
  const nameCategoryExists = await Category.findOne({ where: { name } });

  if (nameCategoryExists) {
    nameCategoryExists.err = 'Category already registered';
    nameCategoryExists.code = 409;
    return nameCategoryExists;
  }
  
  const newCategory = await Category.create({ name });
  return newCategory;
};

module.exports = { create };