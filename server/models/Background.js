const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Backgrounds extends Model {}

Backgrounds.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skills_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "skills",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "backgrounds",
  }
);

module.exports = Backgrounds;
