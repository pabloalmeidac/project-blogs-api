const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
  },
  published: {
    type: DataTypes.DATE,
  },
  updated: {
    type: DataTypes.DATE,
  },
};

module.exports = (sequelize) => {
  const BlogPost = sequelize.define(
    'BlogPost', Attributes, { timestamps: false, underscored: true, tableName: 'BlogPosts' },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.Users, { foreignKey: 'user_id', as: 'user' });
  };

  return BlogPost;
};