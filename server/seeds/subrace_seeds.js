const { Subrace } = require("../models");
const subraceData = [
  {
    race_id: 2, //elf
    name: "High Elf",
  },
  {
    race_id: 2, //elf
    name: "Wood Elf",
  },
  {
    race_id: 3, //drow
    name: "Lolth-sworn Drow",
  },
  {
    race_id: 3, //drow
    name: "Seldarine Drow",
  },
  {
    race_id: 4, //Half-Elf
    name: "High Half-Elf",
  },
  {
    race_id: 4, //Half-Elf
    name: "Wood Half-Elf",
  },
  {
    race_id: 4, //Half-Elf
    name: "Drow Half-Elf",
  },
  {
    race_id: 6, //Halfling
    name: "Lightfoot Halfling",
  },
  {
    race_id: 6, //Halfling
    name: "Strongheart Halfling",
  },
  {
    race_id: 7, //Dwarf
    name: "Gold Dwarf",
  },
  {
    race_id: 7, //Dwarf
    name: "Shield Dwarf",
  },
  {
    race_id: 7, //Dwarf
    name: "Duergar Dwarf",
  },
  {
    race_id: 7, //Dwarf
    name: "Forest Dwarf",
  },
  {
    race_id: 8, //Gnome
    name: "Deep Gnome",
  },
  {
    race_id: 8, //Gnome
    name: "Rock Gnome",
  },
  {
    race_id: 9, //Tiefling
    name: "Asmodeus Tiefling",
  },
  {
    race_id: 9, //Tiefling
    name: "Mephistopheles Tiefling",
  },
  {
    race_id: 9, //Tiefling
    name: "Zariel Tiefling",
  },
  {
    race_id: 11, //Dragonborn
    name: "Black Dragonborn",
  },
  {
    race_id: 11, //Dragonborn
    name: "Blue Dragonborn",
  },
  {
    race_id: 11, //Dragonborn
    name: "Brass Dragonborn",
  },
  {
    race_id: 11, //Dragonborn
    name: "Bronze Dragonborn",
  },
  {
    race_id: 11, //Dragonborn
    name: "Copper Dragonborn",
  },
  {
    race_id: 11, //Dragonborn
    name: "Gold Dragonborn",
  },
  {
    race_id: 11, //Dragonborn
    name: "Green Dragonborn",
  },
  {
    race_id: 11, //Dragonborn
    name: "Red Dragonborn",
  },
  {
    race_id: 11, //Dragonborn
    name: "Silver Dragonborn",
  },
  {
    race_id: 11, //Dragonborn
    name: "White Dragonborn",
  },
];

const seedSubrace = () => Subrace.bulkCreate(subraceData);

module.exports = seedSubrace;
