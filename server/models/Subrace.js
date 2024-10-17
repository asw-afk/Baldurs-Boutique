const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Subrace extends Model {}

Subrace.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    // skills_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'Skills',
    //         key: 'id',
    //         unique: false,
    //     },
    // },
    race_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Race",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "Subrace",
  }
);

module.exports = Subrace;
