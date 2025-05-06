const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  action: { type: String, required: true },
  module: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  metadata: { type: Object } // Optional additional data
});

module.exports = mongoose.model('ActivityLog', activityLogSchema);
