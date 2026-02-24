const mongoose = require("mongoose");

const breachSchema = new mongoose.Schema({
  source: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  severity: {
    type: String,
    enum: ["Low", "Medium", "High"],
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Breach", breachSchema);