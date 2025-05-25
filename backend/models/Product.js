const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  size: String,
  thickness: String,
  image: String,
  category: String,
  price: String,
  shippingCharge: {
    type: String,
    default: "free"
  },
  description: String,
  material: String,
  lifeSpan: String
});

module.exports = mongoose.model("Product", productSchema);
