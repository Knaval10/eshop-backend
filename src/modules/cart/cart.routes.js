const express = require('express');
const router = express.Router();
const cartController = require('./cart.controller');
const { protect } = require('../../middlewares/auth.middleware');

router.get('/', protect, cartController.getCart);
router.post('/', protect, cartController.addToCart);
router.delete('/:productId', protect, cartController.removeFromCart);
router.delete('/', protect, cartController.clearCart);

module.exports = router;