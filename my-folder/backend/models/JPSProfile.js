
const mongoose = require("mongoose");

const jpsProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  fullName: { type: String, default: "" },
  sqlLevel: { type: String, enum: ["Free", "Basic", "Normal", "High", "VIP"], default: "Free" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("JPSProfile", jpsProfileSchema);
