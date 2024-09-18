const Skills = require('./Skills');
const Character = require('./Character');

Skills.belongsTo(Character, {
   
})   

Character.hasMany(Skills, {
    foreignKey: 'race_id',
    foreignKey: 'background_id',
    foreignKey: 'class_id',
});