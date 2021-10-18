const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const ProductSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    otherData: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
ProductSchema.plugin(toJSON);
ProductSchema.plugin(paginate);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;



