const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  category: String,
  stock: Number,
  sqlLevel: { type: String, default: "Free" }, // Free, Basic, etc.
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
