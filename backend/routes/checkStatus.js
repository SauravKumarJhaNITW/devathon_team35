const express = require("express");
const router = express.Router();
const { Application } = require("../models/applications");

router.get("/:application_id", async (req, res) => {
  console.log(req.params.application_id);
  const status = await Application.findOne({
    application_id: req.params.application_id,
  }).select({ status: 1 });

  if (!status) return res.status(404).send("this application id was not found");

  res.status(200).send(status);
});

module.exports = router;
