const express = require("express");
const router = express.Router();
const { Application } = require("../models/applications");

router.get("/:application_id", async (req, res) => {
  let result = await Application.findOne({
    application_id: req.params.application_id,
  }).select({ status: 1 });
  if (!result) return res.send("this application id was not found");
  console.log(result.status);
  res.send(result.status);
});

module.exports = router;
