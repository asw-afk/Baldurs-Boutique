const { Ability } = require("../models/");
const abilityData = [
  { name: "Strength", description: "Physical power and force." },
  { name: "Dexterity", description: "Agility and reflexes." },
  { name: "Constitution", description: "Endurance and stamina." },
  { name: "Intelligence", description: "Reasoning and memory." },
  { name: "Wisdom", description: "Perception and insight." },
  { name: "Charisma", description: "Personality and leadership." },
];

const seedAbilities = () => Ability.bulkCreate(abilityData);

module.exports = seedAbilities;
