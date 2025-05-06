const express = require("express");
const router = express.Router();

const revenue = {
  totalRevenue: 15000,
  thisMonth: 3500,
  lastMonth: 2700
};

router.get("/", (req, res) => {
  res.json(revenue);
});

module.exports = router;
