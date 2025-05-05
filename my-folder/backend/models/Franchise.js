const mongoose = require("mongoose");

const franchiseSchema = new mongoose.Schema({
  name: String,
  level: String,
  owner: String,
  country: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Franchise", franchiseSchema);
