const router = require("express").Router();
const { User } = require("../../models");
const { withAuth, signToken } = require("../../utils/auth");

// localhost:3000/api


router.post("/signup", async function(req, res) {
  try {
    //**************WORKING************ */
    const { username, email, password } = req.body;

    const userData = await User.create({ username, email, password });
    const token = signToken(userData);
    res.status(200).json({ userData, token });
  } catch (err) {
    // err for a bad request
    res.status(400).json(err);
  }
});

router.post("/login", async function(req, res) {
  try {
    // looks for matching email in the database
    const userData = await User.findOne({ where: { email: req.body.email } });

    const validPassword = await userData.checkPassword(req.body.password);
    // if there's no match....
    if (!userData || !validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again." });
      return;
    }

    const token = signToken(userData);
    res.status(200).json({ userData, token });
    // res.render page?
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/allusers", async function(req, res) {
  try {
    const allUsers = await User.findAll();
    res.json(allUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
