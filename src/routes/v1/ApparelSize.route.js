const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
const apparelSizeController = require('../../controllers/ApparelSize.controller');

const router = express.Router();

router.route('/').post(apparelSizeController.createApparelSize).get(apparelSizeController.getApparelSizes);

router
  .route('/:apparelSizeId')
  .get(apparelSizeController.getApparelSize)
  .patch(apparelSizeController.updateApparelSize)
  .delete(apparelSizeController.deleteApparelSize);

  module.exports = router;