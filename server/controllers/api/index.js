const router = require("express").Router();
const homeRoutes = require("./login");
const characterRoutes = require("./character")
// localhost:3000/api
router.use("/", homeRoutes);
router.use("/character", characterRoutes)

router.get("/", function(req, res) {
  res.json({ message: "Welcome to the Baldurs Boutique API!" });
});

module.exports = router;
