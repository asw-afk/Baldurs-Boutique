const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Ability extends Model {}

Ability.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CharacterId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Character",
        key: "id",
      },
      allowNull: false,
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8,
    },
    dexterity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8,
    },
    constitution: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8,
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8,
    },
    wisdom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8,
    },
    charisma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8,
    },
    //TODO Maybe set if it's equal less than zero to throw an error
    freePoints: {
      type: DataTypes.VIRTUAL,
      get() {
        let pointsUsed = [
          this.strength,
          this.dexterity,
          this.constitution,
          this.intelligence,
          this.wisdom,
          this.charisma,
        ].reduce((acc, cur) => {
          if (cur >= 13) {
            return cur - 13 * 2 + (cur - 8) + acc;
          } else {
            return cur - 8 + acc;
          }
        }, 0);
        return 27 - pointsUsed;
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "ability",
  }
);

module.exports = Ability;
