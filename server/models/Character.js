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
    user_id: {
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
    race_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //foreign key
      references: {
        model: "Race",
        key: "id",
        unique: false,
      },
    },
    subrace_id: {
      type: DataTypes.INTEGER,
      //foreign key
      references: {
        model: "Subraces",
        key: "id",
        unique: false,
      },
    },
    background_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //foreign key
      references: {
        model: "Backgrounds",
        key: "id",
        unique: false,
      },
    },
    class_id: {
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
      async beforeCreate({ dataValues }, options) {
        const character = dataValues;
        if (character.subrace_id) {
          const validSubrace = await Subrace.findOne({
            where: {
              id: character.subrace_id,
              race_id: character.race_id,
            },
          });
          if (!validSubrace) {
            throw new Error(
              `Subrace ${character.subrace_id} does not belong to race ${character.race_id}`
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
