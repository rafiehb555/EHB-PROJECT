// const express = require("express");
// const router = express.Router();

// let franchiseData = [];

// router.post("/register", (req, res) => {
//   const data = req.body;
//   franchiseData.push(data);
//   res.status(201).json({ message: "Franchise Registered", data });
// });

// router.get("/all", (req, res) => {
//   res.json(franchiseData);
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Franchise = require("../models/Franchise");

// ✅ Franchise Register API
router.post("/register", async (req, res) => {
  try {
    const franchise = new Franchise(req.body);
    await franchise.save();
    res.status(201).json({ message: "Franchise Registered", franchise });
  } catch (err) {
    res.status(500).json({ error: "Error registering franchise" });
  }
});

// ✅ Franchise List API
router.get("/all", async (req, res) => {
  try {
    const franchises = await Franchise.find();
    res.json(franchises);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch franchises" });
  }
});

// ✅ Franchise Overview API for Dashboard
router.get("/overview", async (req, res) => {
  try {
    const stats = {
      totalOrders: 120,
      pendingComplaints: 5,
      revenue: 85000
    };
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch overview data" });
  }
});

module.exports = router;
