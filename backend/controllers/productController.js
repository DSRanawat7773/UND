const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
    const image = req.file.path; // Cloudinary URL
    const product = new Product({ ...req.body, image });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  product ? res.json(product) : res.status(404).json({ message: "Not found" });
};

module.exports = { createProduct, getProducts, getProductById };
