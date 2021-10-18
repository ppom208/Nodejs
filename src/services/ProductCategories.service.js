const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');
const { ProductCategories } = require('../models');
/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createProductCategories = async (productCategoriesBody) => {
  return ProductCategories.create(productCategoriesBody);
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
const queryProductCategories = async (filter, options) => {
  const productCategories = await ProductCategories.paginate(filter, options);
  return productCategories;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<ProductCategories>}
 */
const getProductCategoriesById = async (id) => {
  return ProductCategories.findById(id);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<ProductCategories>}
 */
const getProductCategoriesByEmail = async (email) => {
  return ProductCategories.findOne({ email });
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<ProductCategories>}
 */
const updateProductCategoriesById = async (productCategoriesId, updateBody) => {
  const productCategories = await getUserById(productCategoriesId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await ProductCategories.isEmailTaken(updateBody.email, productCategoriesId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(productCategories, updateBody);
  await productCategories.save();
  return productCategories;
};

/**
 * Delete user by id
 * @param {ObjectId} productCategoriesId
 * @returns {Promise<ProductCategories>}
 */
const deleteProductCategoriesById = async (productCategoriesId) => {
  const productCategories = await getProductCategoriesById(productCategoriesId);
  if (!productCategories) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await productCategories.remove();
  return productCategories;
};

module.exports = {
  createProductCategories,
  queryProductCategories,
  getProductCategoriesById,
  getProductCategoriesByEmail,
  updateProductCategoriesById,
  deleteProductCategoriesById,
};
