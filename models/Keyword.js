const mongoose = require("mongoose");

const keywordSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  keyword: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Keyword", keywordSchema);