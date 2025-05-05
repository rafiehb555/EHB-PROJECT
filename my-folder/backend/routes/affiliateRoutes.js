
// const express = require("express");
// const router = express.Router();
// const { registerReferral, getReferral } = require("../controllers/affiliateController");
// const auth = require("../middleware/auth");

// router.post("/register", auth, registerReferral);
// router.get("/me", auth, getReferral);

// module.exports = router;

const express = require("express");
const router = express.Router();

let referrals = [];

router.post("/track", (req, res) => {
  const { referrer, user } = req.body;
  referrals.push({ referrer, user, timestamp: new Date() });
  res.json({ message: "Referral tracked" });
});

router.get("/all", (req, res) => {
  res.json(referrals);
});

module.exports = router;