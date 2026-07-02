const env = require('./env.config');
const userRepository = require('../modules/user/user.repository');
const { comparePassword } = require('../modules/auth/auth.utils');
const path = require('path');

// Import models
const User = require('../modules/user/user.model');
const Product = require('../modules/product/product.model');
const Order = require('../modules/order/order.model');
const Category = require('../modules/category/category.model');
const Cart = require('../modules/cart/cart.model');

async function initAdmin() {
  // Dynamically import ESM modules
  const { default: AdminJS, ComponentLoader } = await import('adminjs');
  const { default: AdminJSExpress } = await import('@adminjs/express');
  const AdminJSMongoose = await import('@adminjs/mongoose');

  // Register the Mongoose adapter
  AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
  });

  // Setup ComponentLoader for custom components
  const componentLoader = new ComponentLoader();
  const DASHBOARD = componentLoader.add('Dashboard', path.resolve(__dirname, './dashboard'));

  // Configure AdminJS options
  const adminJs = new AdminJS({
    componentLoader,
    dashboard: {
      component: DASHBOARD,
      handler: async (request, response, context) => {
        try {
          const userCount = await User.countDocuments();
          const productCount = await Product.countDocuments();
          const orderCount = await Order.countDocuments();
          const categoryCount = await Category.countDocuments();
          const cartCount = await Cart.countDocuments();

          // Calculate total revenue from delivered orders
          const orders = await Order.find({ status: 'delivered' });
          const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);

          // Get recent orders
          const recentOrders = await Order.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .populate('user', 'name email');

          return {
            stats: {
              users: userCount,
              products: productCount,
              orders: orderCount,
              categories: categoryCount,
              carts: cartCount,
              revenue: totalRevenue,
            },
            recentOrders: recentOrders.map(order => ({
              id: order._id,
              userName: order.user ? order.user.name : 'Guest',
              totalAmount: order.totalAmount,
              status: order.status,
              createdAt: order.createdAt,
            })),
          };
        } catch (error) {
          console.error('Dashboard handler error:', error);
          return { error: error.message };
        }
      }
    },
    resources: [
      {
        resource: User,
        options: {
          properties: {
            password: {
              type: 'password',
              isVisible: {
                list: false,
                edit: true,
                filter: false,
                show: false,
              },
            },
          },
        },
      },
      { resource: Product },
      { resource: Order },
      { resource: Category },
      { resource: Cart },
    ],
    rootPath: '/admin',
    branding: {
      companyName: 'E-Shop Admin',
      logo: false,
    },
  });

  // Build authenticated router for AdminJS
  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    adminJs,
    {
      authenticate: async (email, password) => {
        try {
          const user = await userRepository.findByEmail(email);
          if (user && user.role === 'admin') {
            const isMatch = await comparePassword(password, user.password);
            if (isMatch) {
              return {
                email: user.email,
                name: user.name,
              };
            }
          }
        } catch (error) {
          console.error('AdminJS Auth error:', error);
        }
        return null;
      },
      cookieName: 'adminjs',
      cookiePassword: (env.jwtSecret + 'cookie_password_at_least_32_characters_long').slice(0, 32),
    },
    null,
    {
      secret: env.jwtSecret,
      resave: false,
      saveUninitialized: true,
      cookie: {
        httpOnly: true,
        secure: env.env === 'production',
      },
    }
  );

  return {
    adminJs,
    adminRouter,
  };
}

module.exports = {
  initAdmin,
};
