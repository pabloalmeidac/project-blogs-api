const loginSchema = require('../schemas/loginSchema');

module.exports = (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const { error } = loginSchema.validate({ email, password });
    
    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }
    
    return next();
  } catch (error) {
    next(error);
  }
};