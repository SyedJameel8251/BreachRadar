const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  keyword: {
    type: String,
    required: true,
  },
  breach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Breach",
    required: true,
  },
  severity: {
    type: String,
    required: true,
  },
  riskScore: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ["Pending", "Resolved"],
    default: "Pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("Alert", alertSchema);