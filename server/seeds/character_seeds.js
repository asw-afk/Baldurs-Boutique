const { Character } = require("../models");
const characterData = [
  {
    id: 1,
    user_id: 1,
    name: "Bobart",
    gender: "Flaming",
    race_id: 2,
    subrace_id: 1,
    background_id: 2,
    class_id: 1,
  },
];

const seedCharacters = () =>
  Character.bulkCreate(characterData, { individualHooks: true });

module.exports = seedCharacters;
