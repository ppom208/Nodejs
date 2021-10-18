const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');
const productCategoriesController = require('../../controllers/ProductCategories.controller');
const router = express.Router();

router
  .route('/')
  .post(productCategoriesController.createProductCategories)
  .get(productCategoriesController.getProductCategories);

router
  .route('/:productCategoriesId')
  .get( productCategoriesController.getProductCategorie)
  .patch( productCategoriesController.updateProductCategories)
  .delete( productCategoriesController.deleteProductCategories);

module.exports = router;


