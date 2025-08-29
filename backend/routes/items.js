const router = require("express").Router();
const Item = require("../models/Item");

router.get("/", async (req, res) => {
  res.json(await Item.find());
});

router.post("/", async (req, res) => {
  const item = await Item.create({ text: req.body.text });
  res.json(item);
});

router.delete("/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
