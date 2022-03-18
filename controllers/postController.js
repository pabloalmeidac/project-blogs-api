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

const getAll = async (req, res, next) => {
  try {
    const { id } = req.user;

    const listAll = await postServices.getAll(id);
    
    return res.status(200).json(listAll);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const postById = await postServices.getById(id);

    if (!postById) res.status(404).json({ message: 'Post does not exist' });
    
    return res.status(200).json(postById);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;
    const userId = req.user.id;
    
    const postUpdated = await postServices.update(title, content, id, userId);
    
    if (!postUpdated) res.status(401).json({ message: 'Unauthorized user' });
    
    return res.status(200).json(postUpdated);
  } catch (error) {
    next();
  }
};

module.exports = { create, getAll, getById, update };