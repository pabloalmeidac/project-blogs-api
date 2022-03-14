const categorySchema = require('../schemas/categorySchema');

module.exports = (req, res, next) => {
  try {
    const { name } = req.body;
    const { error } = categorySchema.validate({ name });

    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }
    return next();
  } catch (error) {
    next(error);
  }
};
