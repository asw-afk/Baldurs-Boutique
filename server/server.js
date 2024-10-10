const express = require("express");
const path = require("path");
const sequelize = require("./config/connection");
const routes = require("./controllers");
// const session = require("express-session");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//! SESSION DATA FOR LOGIN
// const sess = {
//   secret: "keyboard cat",
//   cookie: {
//     maxAge: 90 * 24 * 60 * 60 * 1000, //expires in 90 days
//     httpOnly: true,
//     secure: false,
//     sameSite: "strict",
//   },
//   resave: false,
//   // proxy: true,
//   saveUninitialized: true, // save uninitialized sessions
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

// app.use(session(sess));

app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
