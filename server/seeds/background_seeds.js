const { Background } = require("../models");
const backgroundData = [
  {
    id: 1,
    name: "Acolyte",
    description:
      "You have spent your life in service to a temple, learning sacred rites and providing sacrifices to the god or gods you worship. Serving the gods and discovering their sacred works will guide you to greatness.",
  },
  {
    id: 2,
    name: "Charlatan",
    description:
      "Youre an expert in manipulation, prone to exaggeration and more than happy to profit from it. Bending the truth and turning allies against each other will lead to greater success down the road.",
  },
  {
    id: 3,
    name: "Criminal",
    description:
      "You have a history of breaking the law and survive by leveraging less-than-legal connections. Profiting from criminal enterprise will lead to greater opportunities in the future.",
  },
  {
    id: 4,
    name: "Entertainer",
    description:
      "You live to sway and subvert your audience, engaging common crowds and high society alike. Preserving art and bringing joy to the hapless and downtrodden heightens your charismatic aura.",
  },
  {
    id: 5,
    name: "Folk Hero",
    description:
      "Youre a champion of the common people, challenging tyrants and monsters to protect the helpless. Saving innocents in imminent danger will make your legend grow.",
  },
  {
    id: 6,
    name: "Guild Artisean",
    description:
      "Your skill in a particular craft has earned you membership in a mercantile guild, offering privileges and protection while engaging in your art. Repairing and discovering rare crafts will bring new inspiration.",
  },
  {
    id: 7,
    name: "Noble",
    description:
      "You were raised in a family among the social elite, accustomed to power and privilege. Accumulating renown, power, and loyalty will raise your status.",
  },
  {
    id: 8,
    name: "Outlander",
    description:
      "You grew up in the wilds, learning to survive far from the comforts of civilisation. Surviving unusual hazards of the wild will enhance your prowess and understanding.",
  },
  {
    id: 9,
    name: "Sage",
    description:
      "You are curious and well-read, with an unending thirst for knowledge. Learning about rare lore of the world will inspire you to put this knowledge to greater purpose.",
  },
  {
    id: 10,
    name: "Soldier",
    description:
      "You are trained in battlefield tactics and combat, having served in a militia, mercenary company, or officer corps. Show smart tactics and bravery on the battlefield to enhance your prowess.",
  },
  {
    id: 11,
    name: "Urchin",
    description:
      "After surviving a poor and bleak childhood, you know how to make the most out of very little. Using your street smarts bolsters your spirit for the journey ahead.",
  },
];

const seedBackground = () => Background.bulkCreate(backgroundData);

module.exports = seedBackground;
