const router = require("express").Router();
const homeRoutes = require("./login");
// localhost:3000/api
router.use("/", homeRoutes);

router.get("/", function(req, res) {
  res.json({ message: "Welcome to the Baldurs Boutique API!" });
});
module.exports = router;
