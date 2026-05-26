const Category = require('./category.model');

async function getAllCategories(req, res) {
  const categories = await Category.find();
  res.json({ success: true, data: categories });
}

async function createCategory(req, res) {
  const category = await Category.create(req.body);
  res.status(201).json({ success: true, data: category });
}

async function updateCategory(req, res) {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!category) {
    return res.status(404).json({ success: false, message: 'Category not found' });
  }
  res.json({ success: true, data: category });
}

async function deleteCategory(req, res) {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) {
    return res.status(404).json({ success: false, message: 'Category not found' });
  }
  res.json({ success: true, message: 'Category deleted' });
}

module.exports = { getAllCategories, createCategory, updateCategory, deleteCategory };