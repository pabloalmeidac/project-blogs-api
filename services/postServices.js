const Sequelize = require('sequelize');
const { BlogPost } = require('../models');
const { Category } = require('../models');
const { PostCategory } = require('../models');
const { Users } = require('../models');
const config = require('../config/config');

const sequelize = new Sequelize(config.development);

const create = async (post) => {
  const t = await sequelize.transaction();
  const { title, content, categoryIds, userId } = post;

  const categoriesExists = await Category.findAll(); // pego esse obj do banco
  const arrCategoriesExists = categoriesExists.map(({ id }) => id); // transformo em array
  
  const verifyAllCategory = categoryIds.every((id) => arrCategoriesExists.includes(id)); // verifico se todos os id existem no array

  if (!verifyAllCategory) {
    const idNotFound = { code: 400, err: '' };
    idNotFound.err = '"categoryIds" not found';
    return idNotFound;
  }
  
  const newPost = await BlogPost.create({ title, content, userId }, { transaction: t });

  // cada categoria dentro do array vai ser criada
  await 
  Promise.all(categoryIds.map((id) => PostCategory
  .create({ postId: newPost.id, categoryId: id }, { transaction: t }))); 

  await t.commit();
  /* PostCategory.create({ postid, id }) */
  return { id: newPost.id, title, content, userId };
};

const getAll = async (id) => {
  const postsList = await BlogPost.findAll({ 
    where: { userId: id }, 
    include: [{
      model: Users,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
  });
  return postsList;
};

const getById = async (id) => {
  const postsList = await BlogPost.findOne({ 
    where: { id }, 
    include: [{
      model: Users,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
  });
  return postsList;
};

const update = async (title, content, id, userId) => {
  await BlogPost.update({ title, content }, { where: { id, userId } });
  
  const postUpdated = await BlogPost.findOne({ 
    where: { id, userId },
    attributes: { exclude: ['id', 'published', 'updated'] },
    include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
  });
  
  return postUpdated; // retorna null se nao tiver o post do id
};

module.exports = { create, getAll, getById, update };
