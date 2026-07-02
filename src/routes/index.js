const express = require('express');
const router = express.Router();

const authRoutes = require('../modules/auth/auth.routes');
const userRoutes = require('../modules/user/user.routes');
const productRoutes = require('../modules/product/product.routes');
const categoryRoutes = require('../modules/category/category.routes');
const cartRoutes = require('../modules/cart/cart.routes');
const orderRoutes = require('../modules/order/order.routes');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/cart', cartRoutes);
router.use('/orders', orderRoutes);

module.exports = router;
