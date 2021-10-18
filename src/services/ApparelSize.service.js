const httpStatus = require('http-status');
const { ApparelSize } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createApparelSize = async (apparelSizeBody) => {
  return ApparelSize.create(apparelSizeBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryApparelSize = async (filter, options) => {
  const apparelSizes = await ApparelSize.paginate(filter, options);
  return apparelSizes;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getApparelSizeById = async (id) => {
  return ApparelSize.findById(id);
};

/**
 * Update user by id
 * @param {ObjectId} apparelSizeId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateApparelSizeById = async (apparelSizeId, updateBody) => {
  const apparelSize = await getApparelSizeById(apparelSizeId);
  if (!apparelSize) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  Object.assign(apparelSize, updateBody);
  await apparelSize.save();
  return apparelSize;
};

/**
 * Delete user by id
 * @param {ObjectId} apparelSizeId
 * @returns {Promise<User>}
 */
const deleteApparelSizeById = async (apparelSizeId) => {
  const apparelSize = await getApparelSizeById(apparelSizeId);
  if (!apparelSize) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await apparelSize.remove();
  return apparelSize;
};

module.exports = {
  createApparelSize,
  queryApparelSize,
  getApparelSizeById,
  updateApparelSizeById,
  deleteApparelSizeById,
};
