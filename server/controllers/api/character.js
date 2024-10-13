const router = require("express").Router();
const { Character, Race, Background } = require("../../models");

//localhost/api/character

router.get("/", async function(req, res) {
  const data = await Character.findAll({
    attributes: ["id", "name", "gender", "ability"],
    include: [Race, Background],
  });
  res.status(200).json(data);
});

router.post("/", async function(req, res) {
  const { name, gender, UserId, RaceId } = req.body;
  const data = await Character.create({ name, gender, UserId, RaceId });
  res.status(200).json(data);
});

module.exports = router;
