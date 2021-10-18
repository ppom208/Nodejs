const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const ApparelSizeSchema = mongoose.Schema(
  {
    sizeCode: {
      type: String,
      required: true,
      trim: true,
    },
    sortOrder: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
ApparelSizeSchema.plugin(toJSON);
ApparelSizeSchema.plugin(paginate);

const ApparelSize = mongoose.model('ApparelSize', ApparelSizeSchema);

module.exports = ApparelSize;


