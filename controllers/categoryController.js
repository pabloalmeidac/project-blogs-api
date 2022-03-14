const categoryServices = require('../services/categoryServices');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    
    const newCategory = await categoryServices.create(name);
    
    if (newCategory.err) {
      const { code, err } = newCategory;
      return res.status(code).json({ message: err });
    }
    return res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const listAll = await categoryServices.getAll();
    
    return res.status(200).json(listAll);
  } catch (error) {
    next(error);
  }
};

module.exports = { create, getAll };