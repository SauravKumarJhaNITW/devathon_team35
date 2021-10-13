const express = require("express");
const router = express.Router();

const sendMail = require("../services/mailService");

router.post("/", async (req, res) => {
  await sendMail(req.body);
  res.sendStatus(200);
});

module.exports = router;
