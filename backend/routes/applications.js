const validateObjectId = require("../middleware/validateObjectId");
const auth = require("../middleware/auth");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { Application } = require("../models/applications");
const admin = require("../middleware/admin");
const sendMail = require("../services/mailService");

//get all application, for admin
router.get("/:status", auth, async (req, res) => {
  const application_ids = await Application.find({
    status: req.params.status,
  }).select({ application_id: 1 });
  res.status(200).send(application_ids);
});

router.get("/application_id/:application_id", auth, async (req, res) => {
  const application = await Application.findOne({
    application_id: req.params.application_id,
  });
  if (!application) res.sendStatus(404).send("not found");
  res.status(200).send(application);
});

//get request for student
// router.get("/myApplication", auth, async (req, res) => {
//   const application = await Application.findOne({
//     application_id: req.body.application_id,
//   });
//   res.status(200).send({});
// });

//admin will update the application with comment and status
router.post("/update", async (req, res) => {
  // const application = await Application.findOne({
  //   application_id: req.body.application_id,
  // });
  // application.adminComments = req.body.adminComments;
  // application.status = req.body.status;
  // application.reg_id = req.body.reg_id;
  // application.save();

  await Application.updateOne(
    { application_id: req.body.application_id },
    {
      $set: {
        adminComments: req.body.adminComments,
        status: req.body.status,
        reg_id: req.body.reg_id,
      },
    }
  );

  // req.body.reg_id

  //mail logic
  //send with reg_id
  // const from = "Admin",
  //   to = req.body.email,
  //   subject = "Update from MTech Registration Portal";
  // let text;
  // if (req.body.status == "pending") return;
  // else if (req.body.status == "accepted") {
  //   text =
  //     "your application is accepted. your registration number is " +
  //     req.body.reg_id;
  // } else {
  //   text =
  //     "your application is rejected and the reason is: " +
  //     req.body.adminComments;
  // }
  // await sendMail({ from, to, subject, text });

  res.status(200).send("ok");
});

//post request for student
router.post("/", async (req, res) => {
  const application = new Application({
    name: req.body.name,
    birthdate: req.body.birthdate,
    aadharNumber: req.body.aadharNumber,
    application_id: req.body.application_id,
    email: req.body.email,
    address: req.body.address,
    gender: req.body.gender,
    branch: req.body.branch,
    specialization: req.body.specialization,
    category: req.body.category,
    pwd: req.body.pwd,
    documents: req.body.documents,
    picture: req.body.picture,
    userComments: req.body.userComments,
    adminComments: req.body.adminComments,
    status: req.body.status,
  });
  await application.save();
  try {
    const from = "Admin",
      to = req.body.email,
      subject = "Thanks for applying for MTech Registration";
    let text =
      "Thanks for your MTech Registration application, we will update you if there is any change in your application.";
    await sendMail({ from, to, subject, text });

    res
      .status(200)
      .send(
        "Your application has been saved . Please Check your mail for further updates"
      );
  } catch (ex) {
    console.log(ex);
  }

  res.status(200).send("ok");
});

module.exports = router;
