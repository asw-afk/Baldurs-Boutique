const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Ability extends Model {}

Ability.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Strength: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 8,
    },
    Dexterity: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 8,
    },
    Constitution: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 8,
    },
    Intelligence: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 8,
    },
    Wisdom: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 8,
    },
    Charisma: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 8,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "Ability",
  }
);

module.exports = Ability;
