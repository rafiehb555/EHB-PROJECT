import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';

export default function CompanyRevenue() {
  const [revenue, setRevenue] = useState([]);

  useEffect(() => {
    setRevenue([
      { id: 1, source: 'Franchise Sales', amount: 18000, date: '2025-05-01' },
      { id: 2, source: 'Platform Fee', amount: 27000, date: '2025-05-02' },
    ]);
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>💰 Company Revenue</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Source</th>
              <th>Amount (USD)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {revenue.map(r => (
              <tr key={r.id} style={{ borderBottom: '1px solid #ccc' }}>
                <td>{r.id}</td>
                <td>{r.source}</td>
                <td>${r.amount}</td>
                <td>{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
