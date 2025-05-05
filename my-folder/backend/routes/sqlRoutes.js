const express = require("express");
const router = express.Router();

let sqlLevels = {};

router.post("/update", (req, res) => {
  const { userId, level } = req.body;
  sqlLevels[userId] = level;
  res.json({ message: "SQL Level Updated", level });
});

router.get("/:userId", (req, res) => {
  const level = sqlLevels[req.params.userId] || "Free";
  res.json({ userId: req.params.userId, level });
});

module.exports = router;