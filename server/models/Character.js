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
    // race_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   //foreign key
    //   references: {
    //     model: "Race",
    //     key: "id",
    //     unique: false,
    //   },
    // },
    // background_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   //foreign key
    //   references: {
    //     model: "Backgrounds",
    //     key: "id",
    //     unique: false,
    //   },
    // },
    // class_id: {
    //   type: DataTypes.INTEGER,
    //   //foreign key
    //   references: {
    //     model: "Class",
    //     key: "id",
    //     unique: false,
    //   },
    // },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "Character",
  }
);

module.exports = Character;
