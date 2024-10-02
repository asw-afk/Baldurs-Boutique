const express = require("express");
const path = require("path");
const sequelize = require("./config/connection");
const routes = require("./controllers");

// const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//TODO SEQUALIZE PRODUCTION MICAH'S FUTURE PROBLEMS
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/dist/index.html"));
//   });
// }
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
