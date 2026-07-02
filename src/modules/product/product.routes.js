const express = require('express');
const router = express.Router();
const productController = require('./product.controller');
const { protect } = require('../../middlewares/auth.middleware');
const validate = require('../../middlewares/validate.middleware');
const { createProductSchema, updateProductSchema } = require('./product.validation');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', protect, validate(createProductSchema), productController.createProduct);
router.patch('/:id', protect, validate(updateProductSchema), productController.updateProduct);
router.delete('/:id', protect, productController.deleteProduct);

module.exports = router;
