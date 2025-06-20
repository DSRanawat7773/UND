const Product = require("../models/Product");

const createMural = async (req, res) => {
  try {
    const images = req.files?.map((file) => file.path) || [];

    const product = new Product({
      type: "mural",
      name: req.body.name,
      description: req.body.description || "",
      images,
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createMural };
