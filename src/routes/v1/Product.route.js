const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
const productController = require('../../controllers/Product.controller');

const router = express.Router();

router.route('/').post(productController.createProduct).get(productController.getProducts);

router
  .route('/:productId')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

  module.exports = router;