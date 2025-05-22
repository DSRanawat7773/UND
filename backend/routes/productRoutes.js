const express = require("express");
const upload = require("../config/multer");
const {
  createProduct,
  getProducts,
  getProductById,
} = require("../controllers/productController");

const router = express.Router();

router.post("/", upload.single("image"), createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;
