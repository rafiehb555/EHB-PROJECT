import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';

export default function CorporateOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders([
      { id: 301, franchise: 'Lahore Master', product: 'Grocery', status: 'Delivered', date: '2025-05-03' },
      { id: 302, franchise: 'Karachi Master', product: 'Books', status: 'Shipped', date: '2025-05-02' },
    ]);
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>📦 Corporate Orders</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr style={{ background: '#eee' }}>
              <th>Order ID</th><th>Franchise</th><th>Product</th><th>Status</th><th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} style={{ borderBottom: '1px solid #ccc' }}>
                <td>{order.id}</td><td>{order.franchise}</td><td>{order.product}</td>
                <td>{order.status}</td><td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
