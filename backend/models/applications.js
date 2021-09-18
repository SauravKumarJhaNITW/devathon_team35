const mongoose = require("mongoose");
const Joi = require("joi");

const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = {
  applicationSchema: applicationSchema,
  Application: Application,
};
