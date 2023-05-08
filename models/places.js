const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisines: { type: String, required: true },
  pic: String,

  city: { type: String, default: "Anytown" },
  state: { type: String, default: "USA" },
});

module.exports = mongoose.model("Place", placeSchema);
