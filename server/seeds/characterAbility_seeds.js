const { CharacterAbility } = require("../models");
const CharacterAbilityData = [
  { character_id: 1, ability_id: 1, value: 15 }, // Strength
  { character_id: 1, ability_id: 2, value: 12 }, // Dexterity
  { character_id: 1, ability_id: 3, value: 14 }, // Constitution
  { character_id: 1, ability_id: 4, value: 10 }, // Intelligence
  { character_id: 1, ability_id: 5, value: 13 }, // Wisdom
  { character_id: 1, ability_id: 6, value: 8 }, // Charisma
];

const seedCharacterAbility = () =>
  CharacterAbility.bulkCreate(CharacterAbilityData);

module.exports = seedCharacterAbility;
