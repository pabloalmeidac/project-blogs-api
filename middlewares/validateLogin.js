const loginSchema = require('../schemas/loginSchema');

const verifyEmpty = (email, password) => {
  const obj = { code: 400, label: '' };
  obj.label = !email ? 'email' : 'password';

  if (!email || !password) return obj;
};

module.exports = (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const { error } = loginSchema.validate({ email, password });
    
    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }
    
    const errorEmpty = verifyEmpty(email, password);

    if (errorEmpty) {
      return res.status(errorEmpty.code).json({ 
        message: `"${errorEmpty.label}" is not allowed to be empty`,
      });
    }
    return next();
  } catch (error) {
    next(error);
  }
};