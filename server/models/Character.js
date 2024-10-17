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
        model: "User",
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
        model: "Race",
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
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "character",
  }
);

module.exports = Character;
