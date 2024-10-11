const router = require("express").Router();
const { Character, Race } = require("../../models");

//localhost/api/character

router.get("/", async function(req, res) {
  const data = await Character.findAll({ include: Race });
  res.status(200).json(data);
});

router.post("/", async function(req, res) {
  const { name, gender, UserId } = req.body;
  const data = await Character.create({ name, gender, UserId });
  res.status(200).json(data);
});

module.exports = router;
