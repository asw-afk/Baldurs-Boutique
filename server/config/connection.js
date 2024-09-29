require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGOD_URI || "mongodb://localhost:27017/BG3CharBuilder"
);

module.exports = mongoose.connection;
