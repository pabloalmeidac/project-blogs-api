module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory', 
    { postId: { type: DataTypes.INTEGER }, 
      categoryId: { type: DataTypes.INTEGER },
    }, 
    { timestamps: false, tableName: 'PostsCategories' },
  );
  
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(
      models.Category,
      { foreignKey: 'postId', otherKey: 'categoryId', through: PostCategory, as: 'categories' },
    );

    models.Category.belongsToMany(
      models.BlogPost,
      { foreignKey: 'categoryId', otherKey: 'postId', through: PostCategory, as: 'posts' },
    );
  };
  return PostCategory;
};