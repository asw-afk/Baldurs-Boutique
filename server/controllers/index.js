const router = require("express").Router();
// router.use("/api", apiRoutes);

router.get("/api", async (req, res) => {
  res.send(`You're on api/index file`);
});
module.exports = router;
