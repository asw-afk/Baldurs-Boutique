const { Ability } = require("../models");
const abilityData = [
  {
    CharacterId: 1,
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8,
  },
];

const seedAbilities = () => Ability.bulkCreate(abilityData);

module.exports = seedAbilities;
