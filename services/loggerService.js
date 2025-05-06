const ActivityLog = require('../models/ActivityLog');

exports.logActivity = async ({ user, action, module, metadata }) => {
  try {
    await ActivityLog.create({
      user,
      action,
      module,
      metadata
    });
  } catch (err) {
    console.error('❌ Activity log failed:', err.message);
  }
};
