const  { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');


class Class extends Model {}

Class.init(
    {
        id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        attribute_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Attribute',
                key: 'id',
            },
        },
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'class'
    }
    


);

module.exports = Class; 

