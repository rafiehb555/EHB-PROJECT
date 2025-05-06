
const express = require("express");
const router = express.Router();
const { getWallet, createWallet } = require("../controllers/walletController");
const auth = require("../middleware/auth");

router.get("/", auth, getWallet);
router.post("/create", auth, createWallet);

module.exports = router;
