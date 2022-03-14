const { Users } = require('../models');

const create = async (user) => {
  const { email } = user;
  console.log(email);

  const emailExists = await Users.findOne({ where: { email } });
  if (emailExists) {
    emailExists.err = 'User already registered';
    emailExists.code = 409;
    return emailExists;
  }
  const newUser = await Users.create(user);
  return newUser;
};

module.exports = { create };