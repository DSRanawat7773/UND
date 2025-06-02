const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  size: String,
  thickness: String,
  images: [String],         // Array of image URLs
  video: String,            // Single video URL
  category: String,
  price: String,
  shippingCharge: {
    type: String,
    default: "free",
  },
  description: String,
  material: String,
  lifeSpan: String,
});

module.exports = mongoose.model("Product", productSchema);
