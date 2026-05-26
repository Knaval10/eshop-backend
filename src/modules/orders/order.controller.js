const Order = require('./order.model');
const Cart = require('../cart/cart.model');
const Product = require('../products/product.model');

// POST /api/orders
async function placeOrder(req, res) {
  const { shippingAddress } = req.body;

  // Get user's cart
  const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ success: false, message: 'Cart is empty' });
  }

  // Build order items and calculate total
  let totalAmount = 0;
  const orderItems = cart.items.map((item) => {
    totalAmount += item.product.price * item.quantity;
    return {
      product: item.product._id,
      quantity: item.quantity,
      price: item.product.price,
    };
  });

  // Create the order
  const order = await Order.create({
    user: req.user.id,
    items: orderItems,
    totalAmount,
    shippingAddress,
  });

  // Clear the cart
  await Cart.findOneAndDelete({ user: req.user.id });

  res.status(201).json({ success: true, data: order });
}

// GET /api/orders
async function getMyOrders(req, res) {
  const orders = await Order.find({ user: req.user.id }).populate('items.product');
  res.json({ success: true, data: orders });
}

// GET /api/orders/:id
async function getOrderById(req, res) {
  const order = await Order.findById(req.params.id).populate('items.product');

  if (!order) {
    return res.status(404).json({ success: false, message: 'Order not found' });
  }

  // Make sure user can only see their own orders
  if (order.user.toString() !== req.user.id) {
    return res.status(403).json({ success: false, message: 'Not authorized' });
  }

  res.json({ success: true, data: order });
}

// PATCH /api/orders/:id/status (admin only)
async function updateOrderStatus(req, res) {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  if (!order) {
    return res.status(404).json({ success: false, message: 'Order not found' });
  }

  res.json({ success: true, data: order });
}

module.exports = { placeOrder, getMyOrders, getOrderById, updateOrderStatus };