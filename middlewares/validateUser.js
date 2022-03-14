const userSchema = require('../schemas/userSchema');

module.exports = (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const { error } = userSchema.validate({ displayName, email, password, image });

    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }
    return next();
  } catch (error) {
    next(error);
  }
};