const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model {}

User.init(
  {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false, 
      autoIncrement: true
   },
   category_name:{
      type: DataTypes.STRING,
      allowNull: false
   }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Category'
  }
);

module.exports = Category;
