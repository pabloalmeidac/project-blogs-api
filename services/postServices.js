const { BlogPost } = require('../models');
const { Category } = require('../models');
const { PostCategory } = require('../models');
const { Users } = require('../models');

const create = async (post) => {
  const { title, content, categoryIds, userId } = post;

  const categoriesExists = await Category.findAll(); // pego esse obj do banco
  const arrCategoriesExists = categoriesExists.map(({ id }) => id); // transformo em array
  
  const verifyAllCategory = categoryIds.every((id) => arrCategoriesExists.includes(id)); // verifico se todos os id existem no array

  if (!verifyAllCategory) {
    const idNotFound = { code: 400, err: '' };
    idNotFound.err = '"categoryIds" not found';
    return idNotFound;
  }
  
  const newPost = await BlogPost.create({ title, content, userId });
  // cada categoria dentro do array vai ser criada
  await 
  Promise.all(categoryIds.map((postId) => PostCategory.create({ postId, categoryd: newPost.id })));
  
  return newPost;
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

module.exports = { create, getAll };
