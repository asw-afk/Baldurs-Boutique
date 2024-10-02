const router = require("express").Router();
const loginRoutes = require("./login");
// localhost:3000/api
router.use("/login", loginRoutes);

router.get("/", function(req, res) {
  res.json({ message: "Welcome to the Baldurs Boutique API!" });
});
module.exports = router;
