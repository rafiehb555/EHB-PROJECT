import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';

export default function CorporateRevenue() {
  const [revenue, setRevenue] = useState([]);

  useEffect(() => {
    setRevenue([
      { id: 1, source: 'Master Franchise Sales', amount: 9500, date: '2025-05-03' },
      { id: 2, source: 'Delivery Charges', amount: 6000, date: '2025-05-01' },
    ]);
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>💰 Corporate Revenue</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr style={{ background: '#eee' }}>
              <th>ID</th><th>Source</th><th>Amount (USD)</th><th>Date</th>
            </tr>
          </thead>
          <tbody>
            {revenue.map(r => (
              <tr key={r.id} style={{ borderBottom: '1px solid #ccc' }}>
                <td>{r.id}</td><td>{r.source}</td><td>${r.amount}</td><td>{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
