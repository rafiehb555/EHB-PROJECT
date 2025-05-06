
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Create a new order
router.post('/create', orderController.createOrder);

// Get all orders
router.get('/all', orderController.getAllOrders);

// Get orders for a specific seller
router.get('/seller/:sellerId', orderController.getSellerOrders);

// Update order status
router.put('/update/:orderId', orderController.updateOrderStatus);

module.exports = router;
