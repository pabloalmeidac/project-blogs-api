module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory', 
    { postId: { type: DataTypes.INTEGER, field: 'post_id' }, 
      categoryId: { type: DataTypes.INTEGER, field: 'category_id' },
    }, 
    { timestamps: false, tableName: 'PostsCategories' },
  );
  
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(
      models.Category,
      { foreignKey: 'post_id', otherKey: 'category_id', through: PostCategory, as: 'categories' },
    );

    models.Category.belongsToMany(
      models.BlogPost,
      { foreignKey: 'category_id', otherKey: 'post_id', through: PostCategory, as: 'posts' },
    );
  };
  return PostCategory;
};