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

module.exports = { create, getAll };