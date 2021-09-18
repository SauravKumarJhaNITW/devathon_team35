const validateObjectId = require("../middleware/validateObjectId");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { Branch } = require("../models/branch");

router.get("/", async (req, res) => {
  const branch = await Branch.find();
  res.status(200).send(branch);
});

router.get("/:branch", async (req, res) => {
  const specializations = await Branch.find({ name: req.params.branch });
  res.status(200).send(specializations);
});

module.exports = router;
