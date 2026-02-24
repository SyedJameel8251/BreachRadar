const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const { protect } = require("./middleware/authMiddleware");
const Breach = require("./models/Breach");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const keywordRoutes = require("./routes/keywordRoutes");
app.use("/api/keywords", keywordRoutes);

const alertRoutes = require("./routes/alertRoutes");
app.use("/api/alerts", alertRoutes);

const breachRoutes = require("./routes/breachRoutes");
app.use("/api/breaches", breachRoutes);

app.get("/debug", (req, res) => {
  res.send("Debug working");
});

app.get("/api/keywords", (req, res) => {
  res.send("Manual keywords route");
});

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});

app.post("/api/add-breaches", async (req, res) => {
  try {
    await Breach.insertMany([
      {
        source: "Dark Forum",
        content: "10,000 credit card leak from XYZ Bank database",
        severity: "High",
      },
      {
        source: "Telegram Channel",
        content: "Malware dump shared targeting Indian startups",
        severity: "Medium",
      },
      {
        source: "Hacker Blog",
        content: "User email database breach exposed online",
        severity: "Low",
      }
    ]);

    res.json({ message: "Sample breaches added" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding breaches" });
  }
});

function resolveAlert(id) {
  fetch(`/api/alerts/resolve/${id}`, {
    method: "PUT",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
  .then(() => {
    loadAlerts();
    loadStats();
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
