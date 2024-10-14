const router = require("express").Router();
const {
  Character,
  Race,
  Background,
  Class,
  Ability,
  Subrace,
} = require("../../models");

//localhost/api/character

router.get("/", async function(req, res) {
  const data = await Character.findAll({
    attributes: ["id", "name", "gender"],
    include: [
      {
        model: Race,
        attributes: ["name"],
        // include: [{ model: Subrace, attributes: ["name"] }],
      },
      { model: Subrace, attributes: ["name"] },
      { model: Background, attributes: ["name", "description"] },
      { model: Class, attributes: ["name"] },
      { model: Ability, attributes: { exclude: ["id", "CharacterId"] } },
    ],
    // include: { all: true, nested: true },
  });
  res.status(200).json(data);
});

router.post("/", async function(req, res) {
  const { name, gender, UserId, RaceId } = req.body;
  const data = await Character.create({ name, gender, UserId, RaceId });
  res.status(200).json(data);
});

module.exports = router;
