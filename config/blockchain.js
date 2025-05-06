const { ethers } = require('ethers');

const RPC_URL = process.env.BLOCKCHAIN_RPC; // e.g., Moonbeam testnet or BSC testnet
const PRIVATE_KEY = process.env.PRIVATE_KEY; // Your wallet's private key (never expose this)

const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

module.exports = { provider, wallet };
