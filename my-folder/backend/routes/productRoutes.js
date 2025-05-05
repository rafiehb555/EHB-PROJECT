const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
} = require("../controllers/productController");

router.post("/create", createProduct);
router.get("/all", getAllProducts);

module.exports = router;
