const Product = require("../models/Product");

const createMural = async (req, res) => {
  try {
    const images = req.files?.map((file) => file.path) || [];

    const { name, description, muralPrice, material, lifeSpan } = req.body;

    const product = new Product({
      type: "mural",
      name,
      description: description || "",
      muralPrice,       // ✅ Include mural-specific price
      material,         // ✅ Optional
      lifeSpan,         // ✅ Optional
      images,
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    console.error("Mural creation error:", err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createMural };
