const express = require("express");
const error = require("../middleware/error");
const home = require("../routes/home");
const auth = require("../routes/auth");
const authAdmin = require("../routes/authAdmin");
const applications = require("../routes/applications");
const registerUser = require("../routes/registerUser");
const cors = require("cors");
const uploadRouter = require("../routes/uploadRouter");
const uploadImage = require("../routes/uploadImage");
const fetchRouter = require("../routes/fetchRouter");
const branches = require("../routes/branch");
const sendMail = require("../routes/sendMail");
const checkStatus = require("../routes/checkStatus");
const imageFetcher = require("../routes/imagefetcher");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use(express.static("public"));
  app.use("/api/auth", auth);
  app.use("/api/authAdmin", authAdmin);
  app.use("/api/uploadFile", uploadRouter);
  app.use("/api/uploadImage", uploadImage);
  app.use("/api/files", fetchRouter);
  app.use("/api/images", imageFetcher);
  app.use("/api/applications", applications);
  app.use("/api/registerUser", registerUser);
  app.use("/api/branches", branches);
  app.use("/api/sendMail", sendMail);
  app.use("/api/checkStatus", checkStatus);
  app.use("/", home);
  app.use(error);
};
