const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const ProductCategoriesSchema = mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
      timestamps: true,
  }
);

// add plugin that converts mongoose to json
ProductCategoriesSchema.plugin(toJSON);
ProductCategoriesSchema.plugin(paginate);

const ProductCategories = mongoose.model('ProductCategories', ProductCategoriesSchema);

module.exports = ProductCategories;



