const { Character } = require("../models");
const characterData = [
  {
    name: "Bobart",
    gender: "Flaming",
    UserId: 1,
    RaceId: 2,
    SubraceId: 1, 
    BackgroundId: 2,
    ClassId: 1,
  },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;
