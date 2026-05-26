const Product = require('./product.model');

// GET /api/products
async function getAllProducts(req, res) {
  const products = await Product.find();
  res.json({ success: true, data: products });
}

// GET /api/products/:id
async function getProductById(req, res) {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }

  res.json({ success: true, data: product });
}

// POST /api/products
async function createProduct(req, res) {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, data: product });
}

// PATCH /api/products/:id
async function updateProduct(req, res) {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }

  res.json({ success: true, data: product });
}

// DELETE /api/products/:id
async function deleteProduct(req, res) {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }

  res.json({ success: true, message: 'Product deleted' });
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};