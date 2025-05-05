
const JPSProfile = require("../models/JPSProfile");

exports.createProfile = async (req, res) => {
  try {
    const profile = new JPSProfile({ user: req.user.id });
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ error: "Failed to create JPS Profile" });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profile = await JPSProfile.findOne({ user: req.user.id }).populate("user", "email");
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
