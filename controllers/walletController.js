
const Wallet = require("../models/Wallet");

exports.getWallet = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user.id });
    if (!wallet) return res.status(404).json({ error: "Wallet not found" });
    res.json(wallet);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.createWallet = async (req, res) => {
  try {
    const exists = await Wallet.findOne({ user: req.user.id });
    if (exists) return res.status(400).json({ error: "Wallet already exists" });

    const wallet = new Wallet({ user: req.user.id, balance: 0 });
    await wallet.save();
    res.status(201).json(wallet);
  } catch (err) {
    res.status(500).json({ error: "Failed to create wallet" });
  }
};
