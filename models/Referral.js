
const mongoose = require("mongoose");

const referralSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  referredBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  bonusEarned: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Referral", referralSchema);
