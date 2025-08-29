const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await User.create({ email, password: hash });
  res.json({ message: "User created" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ error: "Invalid" });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: "Invalid" });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "secret");
  res.json({ token });
});

module.exports = router;
