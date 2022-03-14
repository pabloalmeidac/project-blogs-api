const { Users } = require('../models');

const login = async (user) => {
  const { email, password } = user;

  const emailExists = await Users.findOne({ where: { email } });
  
  if (!emailExists) return false;
  
  const loggingIn = emailExists.dataValues;
  
  if (loggingIn && loggingIn.password === password) {
    return loggingIn;
  }
  return false;
};

module.exports = { login };