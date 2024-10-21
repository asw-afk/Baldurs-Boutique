const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class CharacterAbility extends Model {}
CharacterAbility.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    character_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "character",
        key: "id",
      },
    },
    ability_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "ability",
        key: "id",
      },
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "characterAbility",
  }
);

module.exports = CharacterAbility;
