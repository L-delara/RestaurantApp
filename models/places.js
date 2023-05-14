const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisines: { type: String, required: true },
  pic: {
    type: String,
    default: "https://giphy.com/gifs/cat-food-kitty-Byp2MtxE5Tyla",
  },
  city: { type: String, default: "Anytown" },
  state: { type: String, default: "USA" },
  founded: {
    type: Number,
    min: [1673, "Ye olde restaurante?"],
    max: [new Date().getFullYear(), "Future Space Food!"],
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.cuisines} food in ${this.city}, ${this.state} since ${this.founded}.`;
};

module.exports = mongoose.model("Place", placeSchema);
