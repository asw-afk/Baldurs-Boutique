const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");
const Subrace = require("./Subrace.js");

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //foreign key
      references: {
        model: "User",
        key: "id",
        unique: false,
      },
    },
    // characterAuthor: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    RaceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //foreign key
      references: {
        model: "Race",
        key: "id",
        unique: false,
      },
    },
    SubraceId: {
      type: DataTypes.INTEGER,
      //foreign key
      references: {
        model: "Subraces",
        key: "id",
        unique: false,
      },
    },
    BackgroundId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //foreign key
      references: {
        model: "Backgrounds",
        key: "id",
        unique: false,
      },
    },
    ClassId: {
      type: DataTypes.INTEGER,
      //foreign key
      references: {
        model: "Class",
        key: "id",
        unique: false,
      },
    },
  },
  {
    hooks: {
      //TODO: add the same function but make it for normal create, and update
      async beforeBulkCreate(arr, options) {
        const character = arr[0].dataValues;
        if (character.SubraceId) {
          const validSubrace = await Subrace.findOne({
            where: {
              id: character.SubraceId,
              race_id: character.RaceId,
            },
          });
          if (!validSubrace) {
            throw new Error(
              `Subrace ${character.SubraceId} does not belong to race ${character.RaceId}`
            );
          }
        }
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "Character",
  }
);

module.exports = Character;
