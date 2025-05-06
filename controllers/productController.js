const Product = require("../models/Product");
const { logActivity } = require('../services/loggerService');

exports.createProduct = async (req, res) => {
  try {
   const newProduct = await Product.create(req.body);

    // ✅ Log this action
    await logActivity({
      user: req.user?._id,
      action: 'Created Product',
      module: 'Product',
      metadata: { productId: newProduct._id, name: newProduct.name }
    });

    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: "Product creation failed", details: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
