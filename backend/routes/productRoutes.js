const express = require("express");
const upload = require("../config/multer");
const {
  createProduct,
  getProducts,
  getProductById,
} = require("../controllers/productController");

const router = express.Router();

router.post(
  "/",
  upload.fields([
    { name: "images", maxCount: 5 },
    { name: "video", maxCount: 1 },
  ]),
  createProduct
);

router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;
