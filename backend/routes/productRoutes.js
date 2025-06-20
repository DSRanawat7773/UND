const express = require("express");
const upload = require("../config/multer");

const { createHomeDecor } = require("../controllers/homeDecorController");
const { createMural } = require("../controllers/muralController");
const { getProducts, getProductById } = require("../controllers/productCommon");
const Product = require("../models/Product"); 

const router = express.Router();

router.post(
  "/home-decor",
  upload.fields([
    { name: "images", maxCount: 5 },
    { name: "video", maxCount: 1 },
  ]),
  createHomeDecor
);

router.post("/mural", upload.array("images", 3), createMural);



// Add this line above the `/:id` route to prevent conflict
router.get("/category/:type", async (req, res) => {
  try {
    const { type } = req.params;
    const products = await Product.find({ type }); // "type" is the field in your schema
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Server error while fetching products by type" });
  }
});

router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;
