const sequelize = require("../config/connection.js");
const seedUsers = require("./user_seeds");
const seedCharacters = require("./character_seeds.js");
const seedRace = require("./race_seeds");
const seedBackgrounds = require("./background_seeds");
const seedClass = require("./class_seeds.js");
const seedAbilities = require("./ability_seeds.js");
const seedSubrace = require("./subrace_seeds.js");

// Drop and recreate all tables in the database.
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("*********** SEEDING USERS ****************");
  await seedUsers();
  console.log("*********** SEEDING Races ****************");
  await seedRace();
  console.log("*********** SEEDING Subraces ****************");
  await seedSubrace();
  console.log("*********** SEEDING Backgrounds ****************");
  await seedBackgrounds();
  console.log("*********** SEEDING Classes ****************");
  await seedClass();
  console.log("*********** SEEDING CHARACTERS ****************");
  await seedCharacters();
  console.log("*********** SEEDING Abilities ****************");
  await seedAbilities();
  console.log("server seeded");
  process.exit(0);
};
seedAll();

const dropAll = async () => {
  await sequelize.drop({ force: true });
};
// dropAll() //! Drops all tables
