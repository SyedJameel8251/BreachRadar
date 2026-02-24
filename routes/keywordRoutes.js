const express = require("express");
const Keyword = require("../models/Keyword");
const { protect } = require("../middleware/authMiddleware");
const Breach = require("../models/Breach");
const Alert = require("../models/Alert");

const router = express.Router();

// 🔹 Add Keyword
router.post("/add", protect, async (req, res) => {
  try {
    const { keyword } = req.body;

    if (!keyword) {
      return res.status(400).json({ message: "Keyword required" });
    }

    await Keyword.create({
      user: req.user._id,
      keyword,
    });

    const breaches = await Breach.find();

    for (let breach of breaches) {
      if (breach.content.toLowerCase().includes(keyword.toLowerCase())) {

        const existingAlert = await Alert.findOne({
          user: req.user._id,
          breach: breach._id,
          keyword: keyword,
        });

        if (!existingAlert) {

          let riskScore = 30;
          if (breach.severity === "High") riskScore = 90;
          if (breach.severity === "Medium") riskScore = 60;

          await Alert.create({
            user: req.user._id,
            keyword,
            breach: breach._id,
            severity: breach.severity,
            riskScore: riskScore
          });
        }
      }
    }

    res.status(201).json({ message: "Keyword added and scan completed" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// 🔹 Get All Keywords
router.get("/", protect, async (req, res) => {
  try {
    const keywords = await Keyword.find({ user: req.user._id });
    res.json(keywords);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// 🔹 Delete Keyword
router.delete("/:id", protect, async (req, res) => {
  try {
    const keyword = await Keyword.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!keyword) {
      return res.status(404).json({ message: "Keyword not found" });
    }

    await keyword.deleteOne();
    res.json({ message: "Keyword deleted successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;