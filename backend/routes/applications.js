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
// router.get("/myApplication", auth, async (req, res) => {
//   const application = await Application.findOne({
//     application_id: req.body.application_id,
//   });
//   res.status(200).send({});
// });

//post request for student
router.post("/", auth, async (req, res) => {
  const application = new Application({
    name: req.body.name,
    birthdate: req.body.birthdate,
    aadharNumber: req.body.aadharNumber,
    application_id: req.body.application_id,
    address: req.body.address,
    gender: req.body.gender,
    specialisation: req.body.specialisation,
    category: req.body.category,
    pwd: req.body.pwd,
    documents: req.body.documents,
    picture : req.body.profileImage,
    comments: req.body.comments
  });
  await application.save();
  res.status(200).send("Your application has been saved . Please Check your mail");
});

//admin will update the application with comment and status
router.put("/", [auth, admin], async (req, res) => {
  const application = await Application.findById(req.body._id);
  application.comment = req.body.form_data.comment;
  application.status = req.body.status;
  res.send(200);
});

module.exports = router;
