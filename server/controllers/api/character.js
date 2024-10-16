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

//GetSingleCharacter
router.get("/:id", async function(req, res) {
  const data = await Character.findOne({
    where: { id: req.params.id },

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
//GetAllCharacters
router.get("/", async function(req, res) {
  try {
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
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
});

router.post("/", async function(req, res) {
  try {
    console.log(req.body);
    const {
      name,
      gender,
      user_id,
      race_id,
      background_id,
      class_id,
    } = req.body;
    const data = await Character.create({
      name,
      gender,
      user_id,
      race_id,
      background_id,
      class_id,
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
