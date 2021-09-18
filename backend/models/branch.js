const mongoose = require("mongoose");
const Joi = require("joi");

const branchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  specializations: {
    type: [String],
  },
});

const Branch = mongoose.model("Branch", branchSchema);

module.exports = {
  branchSchema: branchSchema,
  Branch: Branch,
};
