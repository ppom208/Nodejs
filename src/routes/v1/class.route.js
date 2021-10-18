const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
const classController = require('../../controllers/class.controller');

const router = express.Router();

router.route('/').post(classController.createClass).get(classController.getClasses);

router
  .route('/:classId')
  .get(classController.getClass)
  .patch(classController.updateClass)
  .delete(classController.deleteClass);

  module.exports = router;