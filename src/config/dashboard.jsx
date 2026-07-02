import React from 'react';
import { Box, Text, Icon } from '@adminjs/design-system';

const Dashboard = (props) => {
  const { stats = {}, recentOrders = [], error } = props.data || {};

  return (
    <Box p="xl" style={{ backgroundColor: '#F8F9F9', minHeight: '100vh' }}>
      <Box mb="xl">
        <Text variant="h1" fontWeight="bold" style={{ color: '#0C1E29' }}>E-Shop Management Dashboard</Text>
        <Text color="grey80">Real-time statistics and feature controls for your store</Text>
      </Box>

      {error && (
        <Box variant="card" mb="xl" style={{ backgroundColor: '#F9E5E7', borderColor: '#C20012', padding: '16px', borderRadius: '8px' }}>
          <Text color="error">Error loading statistics: {error}</Text>
        </Box>
      )}

      {/* Feature / Stats Cards */}
      <Box display="grid" gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']} gridGap="lg" mb="xl">
        {/* Products Card */}
        <Box variant="card" p="lg" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 4px 12px 0 rgba(137,138,154,0.1)', borderRadius: '8px', border: '1px solid #EEEEEF' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb="md">
            <Text variant="h2" style={{ color: '#3040D6', fontWeight: 'bold' }}>{stats.products || 0}</Text>
            <Icon icon="Purchase" size={24} style={{ color: '#3040D6' }} />
          </Box>
          <Text variant="lg" fontWeight="bold">Catalog Products</Text>
          <Text size="sm" color="grey60">Manage items, stock & prices</Text>
        </Box>

        {/* Orders Card */}
        <Box variant="card" p="lg" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 4px 12px 0 rgba(137,138,154,0.1)', borderRadius: '8px', border: '1px solid #EEEEEF' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb="md">
            <Text variant="h2" style={{ color: '#007D7F', fontWeight: 'bold' }}>{stats.orders || 0}</Text>
            <Icon icon="ShoppingBag" size={24} style={{ color: '#007D7F' }} />
          </Box>
          <Text variant="lg" fontWeight="bold">Total Orders</Text>
          <Text size="sm" color="grey60">Monitor fulfillment & statuses</Text>
        </Box>

        {/* Revenue Card */}
        <Box variant="card" p="lg" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 4px 12px 0 rgba(137,138,154,0.1)', borderRadius: '8px', border: '1px solid #EEEEEF' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb="md">
            <Text variant="h2" style={{ color: '#A14F17', fontWeight: 'bold' }}>${stats.revenue || 0}</Text>
            <Icon icon="Currency" size={24} style={{ color: '#A14F17' }} />
          </Box>
          <Text variant="lg" fontWeight="bold">Revenue (Delivered)</Text>
          <Text size="sm" color="grey60">Delivered orders earnings</Text>
        </Box>

        {/* Users Card */}
        <Box variant="card" p="lg" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 4px 12px 0 rgba(137,138,154,0.1)', borderRadius: '8px', border: '1px solid #EEEEEF' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb="md">
            <Text variant="h2" style={{ color: '#3B3552', fontWeight: 'bold' }}>{stats.users || 0}</Text>
            <Icon icon="User" size={24} style={{ color: '#3B3552' }} />
          </Box>
          <Text variant="lg" fontWeight="bold">Registered Users</Text>
          <Text size="sm" color="grey60">Admin and shopper management</Text>
        </Box>
      </Box>

      {/* Feature grid with more information */}
      <Box display="grid" gridTemplateColumns={['1fr', '2fr 1fr']} gridGap="lg">
        {/* Recent Orders */}
        <Box p="lg" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 4px 12px 0 rgba(137,138,154,0.1)', borderRadius: '8px', border: '1px solid #EEEEEF' }}>
          <Text variant="lg" fontWeight="bold" mb="lg">Recent Orders</Text>
          {(!recentOrders || recentOrders.length === 0) ? (
            <Text color="grey60">No orders placed yet.</Text>
          ) : (
            <Box>
              {recentOrders.map((order, idx) => (
                <Box key={order.id || idx} display="flex" justifyContent="space-between" alignItems="center" py="md" style={{ borderBottom: '1px solid #EEEEEF' }}>
                  <Box>
                    <Text fontWeight="bold" color="grey100">{order.userName}</Text>
                    <Text size="sm" color="grey60">{new Date(order.createdAt).toLocaleDateString()}</Text>
                  </Box>
                  <Box display="flex" alignItems="center" gap="lg">
                    <Text fontWeight="bold" color="grey100">${order.totalAmount}</Text>
                    <Text size="xs" style={{
                      backgroundColor: order.status === 'delivered' ? '#E5F2F2' : '#F6EDE8',
                      color: order.status === 'delivered' ? '#007D7F' : '#A14F17',
                      borderRadius: '12px',
                      padding: '4px 12px',
                      textTransform: 'capitalize',
                      fontWeight: 'bold'
                    }}>
                      {order.status}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>

        {/* Quick actions/shortcuts */}
        <Box p="lg" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 4px 12px 0 rgba(137,138,154,0.1)', borderRadius: '8px', border: '1px solid #EEEEEF' }}>
          <Text variant="lg" fontWeight="bold" mb="lg">Store Overview</Text>
          <Box display="flex" flexDirection="column" gap="md">
            <Box display="flex" justifyContent="space-between" py="sm" style={{ borderBottom: '1px solid #EEEEEF' }}>
              <Text color="grey80">Categories</Text>
              <Text fontWeight="bold" color="grey100">{stats.categories || 0}</Text>
            </Box>
            <Box display="flex" justifyContent="space-between" py="sm" style={{ borderBottom: '1px solid #EEEEEF' }}>
              <Text color="grey80">Active Shopping Carts</Text>
              <Text fontWeight="bold" color="grey100">{stats.carts || 0}</Text>
            </Box>
            <Box mt="md">
              <Text size="sm" color="grey60" style={{ fontStyle: 'italic' }}>
                Tip: Use the sidebar navigation to perform complete CRUD actions on users, products, categories, orders, and carts.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
