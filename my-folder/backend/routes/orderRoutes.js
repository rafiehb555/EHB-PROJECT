const express = require("express");
const router = express.Router();

// Dummy data
const orders = [
  { title: "Product A", status: "Delivered" },
  { title: "Product B", status: "Pending" },
  { title: "Product C", status: "In Transit" }
];

router.get("/", (req, res) => {
  res.json(orders);
});

module.exports = router;
