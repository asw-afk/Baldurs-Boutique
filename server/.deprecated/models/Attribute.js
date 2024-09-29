const  { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');


class Attribute extends Model {}

Attribute.init(
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
        skills_id:{
            type: DataTypes.INTEGER,
            references:{
                model: 'Skills',
                key: 'id'
            },
        },
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'Attribute'
    }
    


);

module.exports = Attribute; 

