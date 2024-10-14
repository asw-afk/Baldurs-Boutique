const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Race extends Model {}

Race.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // },
      // subrace_id: {
      //     type: DataTypes.INTEGER,
      //     references: {
      //         model: 'Subrace',
      //         key: 'id'
      //     },
    },
    // TODO Reenable this
    // skills_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'Skills',
    //         key: 'id'
    //     },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "race",
  }
);

module.exports = Race;
