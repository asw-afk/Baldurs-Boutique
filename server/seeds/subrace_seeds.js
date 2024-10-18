const { Subrace } = require("../models");
const subraceData = [
  {
    id: 1,
    race_id: 2, //elf
    name: "High Elf",
  },
  {
    id: 2,
    race_id: 2, //elf
    name: "Wood Elf",
  },
  {
    id: 3,
    race_id: 3, //drow
    name: "Lolth-sworn Drow",
  },
  {
    id: 4,
    race_id: 3, //drow
    name: "Seldarine Drow",
  },
  {
    id: 5,
    race_id: 4, //Half-Elf
    name: "High Half-Elf",
  },
  {
    id: 6,
    race_id: 4, //Half-Elf
    name: "Wood Half-Elf",
  },
  {
    id: 7,
    race_id: 4, //Half-Elf
    name: "Drow Half-Elf",
  },
  {
    id: 8,
    race_id: 6, //Halfling
    name: "Lightfoot Halfling",
  },
  {
    id: 9,
    race_id: 6, //Halfling
    name: "Strongheart Halfling",
  },
  {
    id: 10,
    race_id: 7, //Dwarf
    name: "Gold Dwarf",
  },
  {
    id: 11,
    race_id: 7, //Dwarf
    name: "Shield Dwarf",
  },
  {
    id: 12,
    race_id: 7, //Dwarf
    name: "Duergar Dwarf",
  },
  {
    id: 13,
    race_id: 7, //Dwarf
    name: "Forest Dwarf",
  },
  {
    id: 14,
    race_id: 8, //Gnome
    name: "Deep Gnome",
  },
  {
    id: 15,
    race_id: 8, //Gnome
    name: "Rock Gnome",
  },
  {
    id: 16,
    race_id: 9, //Tiefling
    name: "Asmodeus Tiefling",
  },
  {
    id: 17,
    race_id: 9, //Tiefling
    name: "Mephistopheles Tiefling",
  },
  {
    id: 18,
    race_id: 9, //Tiefling
    name: "Zariel Tiefling",
  },
  {
    id: 19,
    race_id: 11, //Dragonborn
    name: "Black Dragonborn",
  },
  {
    id: 20,
    race_id: 11, //Dragonborn
    name: "Blue Dragonborn",
  },
  {
    id: 21,
    race_id: 11, //Dragonborn
    name: "Brass Dragonborn",
  },
  {
    id: 22,
    race_id: 11, //Dragonborn
    name: "Bronze Dragonborn",
  },
  {
    id: 23,
    race_id: 11, //Dragonborn
    name: "Copper Dragonborn",
  },
  {
    id: 24,
    race_id: 11, //Dragonborn
    name: "Gold Dragonborn",
  },
  {
    id: 25,
    race_id: 11, //Dragonborn
    name: "Green Dragonborn",
  },
  {
    id: 26,
    race_id: 11, //Dragonborn
    name: "Red Dragonborn",
  },
  {
    id: 27,
    race_id: 11, //Dragonborn
    name: "Silver Dragonborn",
  },
  {
    id: 28,
    race_id: 11, //Dragonborn
    name: "White Dragonborn",
  },
];

const seedSubrace = () => Subrace.bulkCreate(subraceData);

module.exports = seedSubrace;
