const express = require("express");
const upload = require("../config/multer");

const { createHomeDecor } = require("../controllers/homeDecorController");
const { createMural } = require("../controllers/muralController");
const { getProducts, getProductById } = require("../controllers/productCommon");
const Product = require("../models/Product");

const router = express.Router();

// -------------------- Create Products --------------------

// Home Decor Product Route
router.post(
  "/home-decor",
  upload.fields([
    { name: "images", maxCount: 5 },
    { name: "video", maxCount: 1 },
  ]),
  createHomeDecor
);

// Mural Product Route
router.post("/mural", upload.array("images", 3), createMural);

// -------------------- Fetch Products --------------------

// Get Products by Type (category)
router.get("/category/:type", async (req, res) => {
  try {
    const { type } = req.params;
    const products = await Product.find({ type }).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Server error while fetching products by type" });
  }
});

// Get All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get Product by ID
router.get("/:id", getProductById);

// -------------------- Update & Delete --------------------

// Update a product
router.put("/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Product not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a product
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
