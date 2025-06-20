const Product = require("../models/Product");

const getProducts = async (req, res) => {
  const { type } = req.query;
  const filter = type ? { type } : {};
  const products = await Product.find(filter);
  res.json(products);
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  product ? res.json(product) : res.status(404).json({ message: "Not found" });
};

module.exports = { getProducts, getProductById };
