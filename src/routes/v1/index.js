const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const studentRoute = require('./student.route');
const classRoute = require('./class.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');
const productRoute = require('./Product.route');
const apparelSizesRoute = require('./ApparelSize.route');
const productCategoriesRoute = require('./ProductCategories.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/productCategories',
    route: productCategoriesRoute,
  },
  {
    path: '/products',
    route: productRoute,
  },    
  {
    path: '/apparelSizes',
    route: apparelSizesRoute,
  },
  {
    path: '/students',
    route: studentRoute,
  },
  {
    path: '/class',
    route: classRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
