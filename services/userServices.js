const { Users } = require('../models');

const create = async (user) => {
  const { email } = user;
  
  const emailExists = await Users.findOne({ where: { email } });

  if (emailExists) {
    emailExists.err = 'User already registered';
    emailExists.code = 409;
    return emailExists;
  }
  const newUser = await Users.create(user);
  return newUser;
};

const getAll = async () => {
  const usersList = await Users.findAll();
  
  return usersList;
};

const getById = async (id) => {
  const userById = await Users.findOne({ where: { id } });
  
  if (!userById) {
    const notFound = { code: 404, err: '' };

    notFound.err = 'User does not exist';
    notFound.code = 404;
    
    return notFound;
  }
  return userById;
};

const exclude = async (id) => {
  await Users.destroy({ where: { id } });
};

module.exports = { create, getAll, getById, exclude };