const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome to MTech Registration portal!!");
});

module.exports = router;
