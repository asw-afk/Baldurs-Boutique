const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      // foreign key
      references: {
        model: "user",
        key: "id",
        unique: false,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
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
        model: "race",
        key: "id",
        unique: false,
      },
    },
    subrace_id: {
      type: DataTypes.INTEGER,
      //foreign key
      references: {
        model: "subrace",
        key: "id",
        unique: false,
      },
    },
    class_id: {
      type: DataTypes.INTEGER,
      //foreign key
      references: {
        model: "class",
        key: "id",
        unique: false,
      },
    },
    background_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //foreign key
      references: {
        model: "backgrounds",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "character",
  }
);

module.exports = Character;
