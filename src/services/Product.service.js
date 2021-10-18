const httpStatus = require('http-status');
const { Product } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createProduct = async (productBody) => {
  return Product.create(productBody);
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
const queryProduct = async (filter, options) => {
  const products = await Product.paginate(filter, options);
  return products;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getProductById = async (id) => {
  return Product.findById(id);
};

/**
 * Update user by id
 * @param {ObjectId} classId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateProductById = async (productId, updateBody) => {
  const product = await getProductById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  Object.assign(product, updateBody);
  await product.save();
  return product;
};

/**
 * Delete user by id
 * @param {ObjectId} classId
 * @returns {Promise<User>}
 */
const deleteProductById = async (productId) => {
  const product = await getProductById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await product.remove();
  return product;
};

module.exports = {
  createProduct,
  queryProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
