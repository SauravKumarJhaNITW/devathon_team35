const express = require("express");
const router = express.Router();

const sendMail = require("../services/mailService");

router.post("/", async (req, res) => {
  console.log(req.body.from);
  await sendMail(req.body);
  res.sendStatus(200);
});

module.exports = router;
