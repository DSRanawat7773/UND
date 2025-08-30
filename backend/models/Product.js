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
  images: [String], // Used for both mural & home-decor products
  description: String,

  // Common Price Field (if needed for both)
  price: String, // Mainly for home-decor

  // Home Decor Specific Fields
  size: String,
  thickness: String,
  video: String,
  category: String,
  shippingCharge: {
    type: String,
    default: "free",
  },

  // Mural Specific Fields
  muralPrice: String,

  material: String,
  lifeSpan: String,
});

module.exports = mongoose.model("Product", productSchema);
