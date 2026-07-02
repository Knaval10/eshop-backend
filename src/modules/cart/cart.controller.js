const Cart = require('./cart.model');
const Product = require('../product/product.model');

// GET /api/cart
async function getCart(req, res, next) {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');

    if (!cart) {
      return res.json({ success: true, data: { items: [] } });
    }

    res.json({ success: true, data: cart });
  } catch (error) {
    next(error);
  }
}

// POST /api/cart
async function addToCart(req, res, next) {
  try {
    const { productId, quantity } = req.body;

    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    let cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      // Create new cart if user doesn't have one
      cart = await Cart.create({
        user: req.user.id,
        items: [{ product: productId, quantity }],
      });
    } else {
      // Check if product already in cart
      const itemIndex = cart.items.findIndex(
        (item) => item.product.toString() === productId
      );

      if (itemIndex > -1) {
        // Product exists — update quantity
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Product not in cart — add it
        cart.items.push({ product: productId, quantity });
      }

      await cart.save();
    }

    res.json({ success: true, data: cart });
  } catch (error) {
    next(error);
  }
}

// DELETE /api/cart/:productId
async function removeFromCart(req, res, next) {
  try {
    const cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== req.params.productId
    );

    await cart.save();

    res.json({ success: true, data: cart });
  } catch (error) {
    next(error);
  }
}

// DELETE /api/cart
async function clearCart(req, res, next) {
  try {
    await Cart.findOneAndDelete({ user: req.user.id });
    res.json({ success: true, message: 'Cart cleared' });
  } catch (error) {
    next(error);
  }
}

module.exports = { getCart, addToCart, removeFromCart, clearCart };