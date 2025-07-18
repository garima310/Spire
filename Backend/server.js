const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// CORS setup with allowed origins
app.use(
  cors({
    origin: ["http://localhost:3000"], // frontend URLs
    credentials: true,
  })
);

app.use(express.json());

// Import routes
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");

// Use routes with proper prefixes
app.use("/api/auth", authRoutes);
app.use("/api", jobRoutes);

// Deployment-ready PORT setup
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
