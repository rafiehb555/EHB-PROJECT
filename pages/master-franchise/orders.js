import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';

export default function MasterOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders([
      { id: 201, product: 'EHB Book', franchise: 'Lahore Sub', status: 'Delivered', date: '2025-05-04' },
      { id: 202, product: 'Laptop', franchise: 'Multan Sub', status: 'Pending', date: '2025-05-03' },
    ]);
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>📦 Master Orders Overview</h2>
        <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#eee' }}>
              <th>ID</th><th>Product</th><th>Sub-Franchise</th><th>Status</th><th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} style={{ borderBottom: '1px solid #ccc' }}>
                <td>{order.id}</td><td>{order.product}</td><td>{order.franchise}</td>
                <td>{order.status}</td><td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
