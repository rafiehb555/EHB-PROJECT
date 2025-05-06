import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';

export default function CompanyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders([
      { id: 1, customer: 'Ali', product: 'Phone', status: 'Delivered', region: 'Lahore', date: '2025-05-05' },
      { id: 2, customer: 'Sara', product: 'Shoes', status: 'Pending', region: 'Karachi', date: '2025-05-04' },
    ]);
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>📦 Company Orders</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Status</th>
              <th>Region</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id} style={{ borderBottom: '1px solid #ccc' }}>
                <td>{o.id}</td>
                <td>{o.customer}</td>
                <td>{o.product}</td>
                <td>{o.status}</td>
                <td>{o.region}</td>
                <td>{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
