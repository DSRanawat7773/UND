const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["home-decor", "mural"],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  images: [String],         // Used for both mural & full products
  description: String,

  // Home Decor Specific Fields
  size: String,
  thickness: String,
  video: String,
  category: String,
  price: String,
  shippingCharge: {
    type: String,
    default: "free",
  },
  material: String,
  lifeSpan: String,
});

module.exports = mongoose.model("Product", productSchema);
