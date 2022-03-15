const postServices = require('../services/postServices');

const create = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;

    const newPost = await postServices.create({ title, content, categoryIds, userId: id });
    
    if (newPost.err) {
      const { code, err } = newPost;
      return res.status(code).json({ message: err });
    }

    return res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

module.exports = { create };