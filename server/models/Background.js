const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Background extends Model {}

Background.init(
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
    // skills_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "Skills",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "Background",
  }
);

module.exports = Background;
