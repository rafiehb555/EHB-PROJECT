const express = require('express');
const router = express.Router();
const { sendTransaction } = require('../services/blockchainService');

// 🔁 Test route: Send DEV coins from your wallet to another wallet
router.post('/send', async (req, res) => {
  const { to, amount } = req.body;

  if (!to || !amount) {
    return res.status(400).json({ error: 'Please provide `to` and `amount`' });
  }

  const result = await sendTransaction({ to, amount });
  res.json(result);
});

module.exports = router;
