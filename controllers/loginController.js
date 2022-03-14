const loginServices = require('../services/loginServices');
const jwtGenerator = require('../helpers/jwtGenerator');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const logInto = await loginServices.login({ email, password });
    
    if (!logInto) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const { id, image } = logInto;
    const token = jwtGenerator({ id, email, image });
    
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { login };