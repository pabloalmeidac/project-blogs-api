const postSchema = require('../schemas/postSchema');

module.exports = (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { error } = postSchema.validate({ title, content, categoryIds });

    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }
    return next();
  } catch (error) {
    next(error);
  }
};
