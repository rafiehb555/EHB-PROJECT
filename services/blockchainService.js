const { ethers } = require('ethers');
const { wallet } = require('../config/blockchain');

exports.sendTransaction = async ({ to, amount }) => {
  try {
    const tx = await wallet.sendTransaction({
      to,
      value: ethers.parseEther(amount.toString()) // DEV = 18 decimals
    });

    const receipt = await tx.wait(); // wait for confirmation

    return {
      success: true,
      txHash: receipt.hash,
      blockNumber: receipt.blockNumber,
      gasUsed: receipt.gasUsed.toString()
    };
  } catch (err) {
    console.error('❌ Blockchain Transaction Error:', err.message);
    return { success: false, error: err.message };
  }
};
