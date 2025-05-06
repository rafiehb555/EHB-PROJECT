
const express = require("express");
const router = express.Router();
const { createProfile, getProfile } = require("../controllers/jpsController");
const auth = require("../middleware/auth");

router.post("/create", auth, createProfile);
router.get("/me", auth, getProfile);

module.exports = router;
