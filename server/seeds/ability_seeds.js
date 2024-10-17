const { Ability } = require("../models");
const abilityData = [
  {
    character_id: 1,
    strength: 10,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8,
  },
];

const seedAbilities = () => Ability.bulkCreate(abilityData);

module.exports = seedAbilities;
