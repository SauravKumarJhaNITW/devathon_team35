const validateObjectId = require("../middleware/validateObjectId");
const auth = require("../middleware/auth");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { Application } = require("../models/applications");
const admin = require("../middleware/admin");

//get all application, for admin
router.get("/", [auth, admin], async (req, res) => {
  const applications = await Application.find();
  res.status(200).send(applications);
});

//get request for student
<<<<<<< HEAD


//post request for student

=======
router.get("/myApplication", auth, async (req, res) => {
  const application = await Application.findOne({
    application_id: req.user.username,
  });
  res.status(200).send(application);
});

//post request for student
router.post("/", auth, async (req, res) => {
  const application = new Application({
    name: req.body.name,
    application_id: req.user.username,
  });
  await application.save();
  res.status(200).send(application);
});

//admin will update the application with comment and status
router.put("/", [auth, admin], async (req, res) => {
  const application = await Application.findById(req.body._id);
  application.comment = req.body.form_data.comment;
  application.status = req.body.status;
  res.send(200);
});
>>>>>>> 5fb5d779b87a9c81ac5b4b49a303495c1c49d3f2

module.exports = router;
