const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const itemRoutes = require("./routes/items");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/mydb";

mongoose.connect(MONGO_URI).then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log("Server running on port", PORT));
});
