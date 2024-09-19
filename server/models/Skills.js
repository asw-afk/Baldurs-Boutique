const  { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');


class Skills extends Model {}

Skills.init(
    {
        id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
        },
        name: {
            type: DataTypes.STRING
        }
    }, 
    {
        sequelize,
        timestamps: false,
        modelName: 'Skills'
    }
    


);

module.exports = Skills; 

