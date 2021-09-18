const Joi = require("joi");
const _ = require("lodash");
const { Admin } = require("../models/admin");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const validateMiddleware = require("../middleware/validateReq");

router.post("/", validateMiddleware(validate), async (req, res) => {
  let admin = await Admin.findOne({ username: req.body.username });
  if (!admin) return res.status(400).send("Invalid username or password");

  const validPassword = req.body.password == admin.password;
  if (!validPassword)
    return res.status(400).send("Invalid username or password");

  const token = admin.generateAuthToken();
  res.statusCode = 200;
  res.send(token);
});

function validate(req) {
  const schema = Joi.object({
    username: Joi.string().min(1).max(50).required(),
    password: Joi.string().min(5).max(1024).required(),
  });

  return schema.validate(req.body);
}

module.exports = router;
