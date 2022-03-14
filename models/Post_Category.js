module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory', { underscored: true, timestamps: false, tableName: 'PostsCategories' },
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