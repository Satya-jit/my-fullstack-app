const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./routes/auth");
const itemRoutes = require("./routes/items");

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);

// Serve frontend build (React)
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/mydb";

mongoose.connect(MONGO_URI).then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log("Server running on port", PORT));
});