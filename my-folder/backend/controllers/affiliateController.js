
const Referral = require("../models/Referral");

exports.registerReferral = async (req, res) => {
  try {
    const ref = new Referral({
      user: req.user.id,
      referredBy: req.body.referredBy || null,
    });
    await ref.save();
    res.status(201).json(ref);
  } catch (err) {
    res.status(500).json({ error: "Failed to register referral" });
  }
};

exports.getReferral = async (req, res) => {
  try {
    const ref = await Referral.findOne({ user: req.user.id }).populate("referredBy", "email");
    if (!ref) return res.status(404).json({ error: "Referral not found" });
    res.json(ref);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
