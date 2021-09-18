const validateObjectId = require("../middleware/validateObjectId");
const auth = require("../middleware/auth");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { Applications } = require("../models/applications");
// const admin = require("../middleware/admin");

router.get("/", auth, async (req, res) => {
  const applications = await Applications.find();
  res.status(200).send(applications);
});

module.exports = router;
