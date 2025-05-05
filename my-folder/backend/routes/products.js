const express = require("express");
const router = express.Router();

// Dummy product list
const products = [
  { id: 1, name: "Product A", category: "Grocery" },
  { id: 2, name: "Product B", category: "Electronics" },
];

router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;
