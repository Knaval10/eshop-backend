const express = require('express');
const router = express.Router();
const orderController = require('./order.controller');
const { protect } = require('../../middleware/auth');

router.post('/', protect, orderController.placeOrder);
router.get('/', protect, orderController.getMyOrders);
router.get('/:id', protect, orderController.getOrderById);
router.patch('/:id/status', protect, orderController.updateOrderStatus);

module.exports = router;