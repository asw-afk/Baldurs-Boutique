const User = require("./User");
const Background = require("./Background");
const Class = require("./Class");
const Race = require("./Race");
const Subrace = require("./Subrace");
const Character = require("./Character");
const CharacterAbility = require("./CharacterAbility");
const Ability = require("./Ability");
 /*
// Attribute.hasMany(Skills, {
//   foreignKey: "skill_id",
// });

// Background.hasMany(Skills, {
//   foreignKey: "skill_id",
// });

// Class.hasMany(Attribute, {
//   foreignKey: "attribute_id",
// });

// Race.hasOne(Subrace, {
//   foreignKey: "subrace_id",
// });

// Race.hasMany(Skills, {
//     foreignKey: "skills_id",
// })

// Subrace.belongsTo(Race, {
//   foreignKey: "race_id",
// });

// Subrace.hasMany(Skills, {
//   foreignKey: "skills_id",
// });

// Skills.belongsTo(Subrace, {
//     foreignKey: 'skills_id'
// })

// Skills.belongsTo(Attribute, {
//     foreignKey: 'attribute',
// })

// Skills.belongsTo(Background,{
//     foreignKey: 'background_id',
// })

// Skills.belongsTo(Subrace, {
//     foreignKey: 'subrace_id'
// })

// Skills.belongsTo(Attribute, Background, Race, Subrace, {
//   foreignKey: "attribute_id",
//   foreignKey: "background_id",
//   foreignKey: "race_id",
//   foreignKey: "subrace_id",
// });

// Character.hasMany(Attribute, {
//   foreignKey: "attribute_id",
// });

// Character.hasOne(Class, {
//     foreignKey: 'class_id',
// });

// Character.hasOne(Background, {
//     foreignKey: 'background_id',
// });

// Character.hasOne(Race, {
//     foreignKey: 'race_id',
// })

// Character.hasOne(Race, Background, Class, {
//   foreignKey: "race_id",
//   foreignKey: "background_id",
//   foreignKey: "class_id",
// });
*/
// User.hasMany(Character, {
//   foreignKey: "user_id",
// });
// Character.belongsTo(Race, {
//   foreignKey: "race_id",
// });
// Character.belongsTo(Subrace, {
//   foreignKey: "subrace_id",
// });
// Character.belongsTo(Background, {
//   foreignKey: "background_id",
// });
// Character.belongsTo(Class, {
//   foreignKey: "class_id",
// });
// // Character Ability associations
// Character.belongsToMany(Ability, {
//   through: CharacterAbility,
//   foreignKey: "character_id",
//   otherKey: "ability_id",
// });

// Ability.belongsToMany(Character, {
//   through: CharacterAbility,
//   foreignKey: "ability_id",
//   otherKey: "character_id",
// });

module.exports = {
  User,
  Ability,
  Background,
  Character,
  CharacterAbility,
  Class,
  Race,
  Subrace,
};
