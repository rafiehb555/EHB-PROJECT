import { useState, useEffect } from 'react';

export default function BuyerOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // 🔁 Dummy data — Replace with backend in future
    setOrders([
      {
        id: 1001,
        product: 'MacBook Air M2',
        seller: 'Tech Zone',
        total: 1500,
        status: 'Delivered',
      },
      {
        id: 1002,
        product: 'Wireless Mouse',
        seller: 'Gadget House',
        total: 30,
        status: 'Pending',
      },
    ]);
  }, []);

  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <h2>🧾 Your Orders</h2>

        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr style={{ background: '#f0f0f0' }}>
                <th style={thStyle}>Order ID</th>
                <th style={thStyle}>Product</th>
                <th style={thStyle}>Seller</th>
                <th style={thStyle}>Total ($)</th>
                <th style={thStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} style={{ borderBottom: '1px solid #ccc' }}>
                  <td style={tdStyle}>{order.id}</td>
                  <td style={tdStyle}>{order.product}</td>
                  <td style={tdStyle}>{order.seller}</td>
                  <td style={tdStyle}>${order.total}</td>
                  <td style={{ ...tdStyle, color: getStatusColor(order.status), fontWeight: 'bold' }}>
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

const thStyle = {
  padding: '10px',
  textAlign: 'left',
  fontWeight: 'bold',
  borderBottom: '2px solid #ccc',
};

const tdStyle = {
  padding: '10px',
};

function getStatusColor(status) {
  switch (status) {
    case 'Delivered': return 'green';
    case 'Pending': return 'orange';
    case 'Cancelled': return 'red';
    default: return 'gray';
  }
}
