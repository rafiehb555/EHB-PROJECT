const express = require("express");
const router = express.Router();

const complaints = [
  { issue: "Late delivery", status: "Open" },
  { issue: "Damaged item", status: "Resolved" }
];

router.get("/", (req, res) => {
  res.json(complaints);
});

module.exports = router;
