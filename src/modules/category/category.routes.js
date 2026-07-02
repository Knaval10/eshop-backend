const express = require('express');
const router = express.Router();
const categoryController = require('./category.controller');
const { protect } = require('../../middlewares/auth.middleware');

router.get('/', categoryController.getAllCategories);
router.post('/', protect, categoryController.createCategory);
router.patch('/:id', protect, categoryController.updateCategory);
router.delete('/:id', protect, categoryController.deleteCategory);

module.exports = router;
