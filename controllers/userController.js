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

module.exports = { create, getAll };