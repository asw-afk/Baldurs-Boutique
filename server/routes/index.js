const router = require("express").Router();
const characterCreator = require("./creation/character-routes");

//router.use("/creator", characterCreator);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
