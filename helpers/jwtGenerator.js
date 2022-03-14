const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '8h',
};

module.exports = (payload) => jwt.sign(payload, process.env.JWT_SECRET, jwtConfig);
