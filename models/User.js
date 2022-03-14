const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  displayName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'display_name',
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const Users = sequelize.define(
    'Users', Attributes, { underscored: true, timestamps: false, tableName: 'Users' },
  );
  
  Users.associate = (models) => {
    Users.hasMany(models.BlogPost, { foreignKey: 'user_id', as: 'BlogPosts' });
  };
  return Users;
};