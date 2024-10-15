const { Character } = require("../models");
const characterData = [
  {
    name: "Bobart",
    gender: "Flaming",
    user_id: 1,
    race_id: 2,
    subrace_id: 1,
    background_id: 2,
    class_id: 1,
  },
];

const seedCharacters = () =>
  Character.bulkCreate(characterData, { individualHooks: true });

module.exports = seedCharacters;
