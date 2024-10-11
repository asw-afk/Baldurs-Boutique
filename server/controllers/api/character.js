const router = require("express").Router();
const { Character } = require("../../models");

//localhost/api/character

router.get("/", async function(req, res) {
  const {name, gender} = req.body
  const data = await Character.findAll();
  res.json(data);
});

router.post("/", async function(req, res) {
  const {name, gender, UserId} = req.body
  const data = await Character.create({name, gender, UserId});
  res.json(data);
});

module.exports = router;
