const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoUri = (process.env.MONGO_URI || "").trim();

  if (!mongoUri) {
    console.error("MONGO_URI is missing in .env");
    process.exit(1);
  }

  if (!/^mongodb(\+srv)?:\/\//.test(mongoUri)) {
    console.error(
      "Invalid MONGO_URI format. It must start with mongodb:// or mongodb+srv://"
    );
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
