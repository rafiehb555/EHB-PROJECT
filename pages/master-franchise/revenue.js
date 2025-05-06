import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';

export default function MasterRevenue() {
  const [revenue, setRevenue] = useState([]);

  useEffect(() => {
    setRevenue([
      { id: 1, source: 'Franchise Commission', amount: 5400, date: '2025-05-03' },
      { id: 2, source: 'Seller Fee', amount: 3100, date: '2025-05-02' },
    ]);
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>💰 Master Revenue Report</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr style={{ background: '#eee' }}>
              <th>ID</th><th>Source</th><th>Amount</th><th>Date</th>
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
