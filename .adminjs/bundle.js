(function (React, designSystem) {
  'use strict';

  function _interopDefault(e) { return e && e.__esModule ? e : { default: e }; }

  var React__default = /*#__PURE__*/_interopDefault(React);

  const Dashboard = props => {
    const {
      stats = {},
      recentOrders = [],
      error
    } = props.data || {};
    return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      p: "xl",
      style: {
        backgroundColor: '#F8F9F9',
        minHeight: '100vh'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mb: "xl"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "h1",
      fontWeight: "bold",
      style: {
        color: '#0C1E29'
      }
    }, "E-Shop Management Dashboard"), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      color: "grey80"
    }, "Real-time statistics and feature controls for your store")), error && /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      variant: "card",
      mb: "xl",
      style: {
        backgroundColor: '#F9E5E7',
        borderColor: '#C20012',
        padding: '16px',
        borderRadius: '8px'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      color: "error"
    }, "Error loading statistics: ", error)), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      display: "grid",
      gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr 1fr'],
      gridGap: "lg",
      mb: "xl"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      variant: "card",
      p: "lg",
      style: {
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 12px 0 rgba(137,138,154,0.1)',
        borderRadius: '8px',
        border: '1px solid #EEEEEF'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: "md"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "h2",
      style: {
        color: '#3040D6',
        fontWeight: 'bold'
      }
    }, stats.products || 0), /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
      icon: "Purchase",
      size: 24,
      style: {
        color: '#3040D6'
      }
    })), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "lg",
      fontWeight: "bold"
    }, "Catalog Products"), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      size: "sm",
      color: "grey60"
    }, "Manage items, stock & prices")), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      variant: "card",
      p: "lg",
      style: {
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 12px 0 rgba(137,138,154,0.1)',
        borderRadius: '8px',
        border: '1px solid #EEEEEF'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: "md"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "h2",
      style: {
        color: '#007D7F',
        fontWeight: 'bold'
      }
    }, stats.orders || 0), /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
      icon: "ShoppingBag",
      size: 24,
      style: {
        color: '#007D7F'
      }
    })), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "lg",
      fontWeight: "bold"
    }, "Total Orders"), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      size: "sm",
      color: "grey60"
    }, "Monitor fulfillment & statuses")), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      variant: "card",
      p: "lg",
      style: {
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 12px 0 rgba(137,138,154,0.1)',
        borderRadius: '8px',
        border: '1px solid #EEEEEF'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: "md"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "h2",
      style: {
        color: '#A14F17',
        fontWeight: 'bold'
      }
    }, "$", stats.revenue || 0), /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
      icon: "Currency",
      size: 24,
      style: {
        color: '#A14F17'
      }
    })), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "lg",
      fontWeight: "bold"
    }, "Revenue (Delivered)"), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      size: "sm",
      color: "grey60"
    }, "Delivered orders earnings")), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      variant: "card",
      p: "lg",
      style: {
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 12px 0 rgba(137,138,154,0.1)',
        borderRadius: '8px',
        border: '1px solid #EEEEEF'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: "md"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "h2",
      style: {
        color: '#3B3552',
        fontWeight: 'bold'
      }
    }, stats.users || 0), /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
      icon: "User",
      size: 24,
      style: {
        color: '#3B3552'
      }
    })), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "lg",
      fontWeight: "bold"
    }, "Registered Users"), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      size: "sm",
      color: "grey60"
    }, "Admin and shopper management"))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      display: "grid",
      gridTemplateColumns: ['1fr', '2fr 1fr'],
      gridGap: "lg"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      p: "lg",
      style: {
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 12px 0 rgba(137,138,154,0.1)',
        borderRadius: '8px',
        border: '1px solid #EEEEEF'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "lg",
      fontWeight: "bold",
      mb: "lg"
    }, "Recent Orders"), !recentOrders || recentOrders.length === 0 ? /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      color: "grey60"
    }, "No orders placed yet.") : /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, recentOrders.map((order, idx) => /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      key: order.id || idx,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      py: "md",
      style: {
        borderBottom: '1px solid #EEEEEF'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      fontWeight: "bold",
      color: "grey100"
    }, order.userName), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      size: "sm",
      color: "grey60"
    }, new Date(order.createdAt).toLocaleDateString())), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      display: "flex",
      alignItems: "center",
      gap: "lg"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      fontWeight: "bold",
      color: "grey100"
    }, "$", order.totalAmount), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      size: "xs",
      style: {
        backgroundColor: order.status === 'delivered' ? '#E5F2F2' : '#F6EDE8',
        color: order.status === 'delivered' ? '#007D7F' : '#A14F17',
        borderRadius: '12px',
        padding: '4px 12px',
        textTransform: 'capitalize',
        fontWeight: 'bold'
      }
    }, order.status)))))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      p: "lg",
      style: {
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 12px 0 rgba(137,138,154,0.1)',
        borderRadius: '8px',
        border: '1px solid #EEEEEF'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "lg",
      fontWeight: "bold",
      mb: "lg"
    }, "Store Overview"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      display: "flex",
      flexDirection: "column",
      gap: "md"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      display: "flex",
      justifyContent: "space-between",
      py: "sm",
      style: {
        borderBottom: '1px solid #EEEEEF'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      color: "grey80"
    }, "Categories"), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      fontWeight: "bold",
      color: "grey100"
    }, stats.categories || 0)), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      display: "flex",
      justifyContent: "space-between",
      py: "sm",
      style: {
        borderBottom: '1px solid #EEEEEF'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      color: "grey80"
    }, "Active Shopping Carts"), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      fontWeight: "bold",
      color: "grey100"
    }, stats.carts || 0)), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "md"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      size: "sm",
      color: "grey60",
      style: {
        fontStyle: 'italic'
      }
    }, "Tip: Use the sidebar navigation to perform complete CRUD actions on users, products, categories, orders, and carts."))))));
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.Dashboard = Dashboard;

})(React, AdminJSDesignSystem);
