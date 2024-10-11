const { Race } = require("../models");
const raceData = [
  {
    id: 1,
    name: "Human",
  },
  {
    id: 2,
    name: "Elf",
  },
  {
    id: 3,
    name: "Drow",
  },
  {
    id: 4,
    name: "Half-Elf",
  },
  {
    id: 5,
    name: "Half-Orc",
  },
  {
    id: 6,
    name: "Halfling",
  },
  {
    id: 7,
    name: "Dwarf",
  },
  {
    id: 8,
    name: "Gnome",
  },
  {
    id: 9,
    name: "Tiefling",
  },
  {
    id: 10,
    name: "Githyanki",
  },
  {
    id: 11,
    name: "Dragonborn",
  },
];

const seedRace = () => Race.bulkCreate(raceData);

module.exports = seedRace;
