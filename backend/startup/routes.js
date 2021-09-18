const express = require("express");
const error = require("../middleware/error");
const home = require("../routes/home");
const auth = require("../routes/auth");
const authAdmin = require("../routes/authAdmin");
const applications = require("../routes/applications");
const registerUser = require("../routes/registerUser");
const cors = require("cors");
const uploadRouter = require("../routes/uploadRouter");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use(express.static("public"));
  app.use("/api/auth", auth);
  app.use("/api/authAdmin", authAdmin);
  app.use("/api/upload", uploadRouter);
  app.use("/api/applications", applications);
  app.use("/api/registerUser", registerUser);
  app.use("/", home);
  app.use(error);
};
