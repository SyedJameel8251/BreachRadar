const express = require("express");
const Alert = require("../models/Alert");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, async (req, res) => {
  try {
    const { status } = req.query;

    let filter = { user: req.user._id };

    if (status && status !== "All") {
      filter.status = status;
    }

    const alerts = await Alert.find(filter)
      .populate("breach");

    res.json(alerts);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/stats", protect, async (req, res) => {
  try {
    const alerts = await Alert.find({ user: req.user._id });

    const stats = {
      total: alerts.length,
      high: alerts.filter(a => a.severity === "High").length,
      medium: alerts.filter(a => a.severity === "Medium").length,
      low: alerts.filter(a => a.severity === "Low").length,
    };

    res.json(stats);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/resolve/:id", protect, async (req, res) => {
  try {
    const alert = await Alert.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!alert) {
      return res.status(404).json({ message: "Alert not found" });
    }

    alert.status = "Resolved";
    await alert.save();

    res.json({ message: "Alert marked as resolved" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;