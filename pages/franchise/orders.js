import FranchiseSidebar from '../../components/FranchiseSidebar';
import { useEffect, useState } from 'react';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // ✅ Dummy data — later replace with API
    setOrders([
      { id: 1, customer: 'Ali', product: 'Phone', status: 'Delivered', date: '2025-05-05' },
      { id: 2, customer: 'Sara', product: 'Shoes', status: 'Pending', date: '2025-05-04' },
    ]);
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <FranchiseSidebar />
      <main style={{ padding: '2rem', flexGrow: 1 }}>
        <h2>🛒 Orders</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} style={{ borderBottom: '1px solid #ccc' }}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>{order.status}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
