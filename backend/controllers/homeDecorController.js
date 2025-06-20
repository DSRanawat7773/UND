const Product = require("../models/Product"); // ✅ Import the model

const createHomeDecor = async (req, res) => {
  try {
    const images = req.files?.images?.map((file) => file.path) || [];
    const video = req.files?.video?.[0]?.path || null;

    const product = new Product({
      type: "home-decor",
      ...req.body,
      images,
      video,
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createHomeDecor };
