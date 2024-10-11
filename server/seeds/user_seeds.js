const { User } = require("../models");
const userData = [
  {
    "username": "Kali",
    "email": "Kali@gmail.com",
    "password": "Kali",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
