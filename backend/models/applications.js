const mongoose = require("mongoose");
const Joi = require("joi");
const fileSchema = require("./fileSchema");

const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  application_id: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  aadharNumber: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 12,
  },
  address: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  gender: {
    type: String,
    required: true,
  },
  specialisation: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  pwd: {
    type: Boolean,
    required: true,
  },
  documents: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  userComments: {
    type: String,
  },
  adminComments: {
    type: String,
  },
  status: {
    type: String,
    default: "pending",
  },
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = {
  applicationSchema: applicationSchema,
  Application: Application,
};
