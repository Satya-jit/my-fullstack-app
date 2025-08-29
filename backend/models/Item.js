const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
  text: String
});
module.exports = mongoose.model("Item", itemSchema);
