const userServices = require('../services/userServices');
const jwtGenerator = require('../helpers/jwtGenerator');

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    
    const newUser = await userServices.create({ displayName, email, password, image });
    
    if (newUser.err) {
      const { code, err } = newUser;
      return res.status(code).json({ message: err });
    }

    const token = jwtGenerator({ id: newUser.id, email, image });
    
    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const listAll = await userServices.getAll();
    
    return res.status(200).json(listAll);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const listById = await userServices.getById(id);

    if (listById.err) {
      const { code, err } = listById;
      return res.status(code).json({ message: err });
    }
    
    return res.status(200).json(listById);
  } catch (error) {
    next(error);
  }
};

const exclude = async (req, res, next) => {
  try {
    const { id } = req.user;
    
    await userServices.exclude(id);
  
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = { create, getAll, getById, exclude };