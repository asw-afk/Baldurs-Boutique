const sequelize = require("../config/connection.js");
const seedUsers = require("./user_seeds");
const seedCharacters = require("./character_seeds.js");
const seedRace = require("./race_seeds");
const seedBackgrounds = require("./background_seeds");
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("*********** SEEDING USERS ****************");
  await seedUsers();
  console.log("*********** SEEDING Races ****************");
  await seedRace();
  console.log("*********** SEEDING Races ****************");
  await seedBackgrounds();
  console.log("*********** SEEDING CHARACTERS ****************");
  await seedCharacters();
  // await sequelize.drop({ force: true }); //! Drops all tables
  console.log("server seeded");
  process.exit(0);
};
seedAll();
