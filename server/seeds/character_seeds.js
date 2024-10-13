const { Character } = require("../models");
const characterData = [
  {
    name: "Bobart",
    gender: "Flaming",
    UserId: 1,
    RaceId: 2,
    ability: {
      strength: 8,
      dexterity: 8,
      constitution: 8,
      intelligence: 8,
      wisdom: 8,
      charisma: 8,
    },
    BackgroundId: 2,
  },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;
