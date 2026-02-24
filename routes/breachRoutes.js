const express = require("express");
const Breach = require("../models/Breach");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Get Top Breach Suggestions
router.get("/suggestions", protect, async (req, res) => {
  try {
    const breaches = await Breach.find().limit(5);

    const suggestions = breaches.map(b => ({
      keyword: b.content,
      severity: b.severity
    }));

    res.json(suggestions);

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;