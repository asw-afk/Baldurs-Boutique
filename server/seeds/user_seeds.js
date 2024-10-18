const { User } = require("../models");
const userData = [
  {
    id: 1,
    username: "Kali",
    email: "Kali@gmail.com",
    password: "Kali",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
