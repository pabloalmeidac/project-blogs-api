const postEditSchema = require('../schemas/postEditSchema');

module.exports = (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    
    if (categoryIds) res.status(400).json({ message: 'Categories cannot be edited' });
    
    const { error } = postEditSchema.validate({ title, content });

    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }
    return next();
  } catch (error) {
    next(error);
  }
};