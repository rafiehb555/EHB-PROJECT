import FranchiseSidebar from '../../components/FranchiseSidebar';
import { useEffect, useState } from 'react';

export default function RevenuePage() {
  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    // ✅ Dummy revenue data
    setRevenueData([
      { id: 1, source: 'GoSellr Orders', amount: 3400, date: '2025-05-03' },
      { id: 2, source: 'Service Commission', amount: 2000, date: '2025-05-01' },
    ]);
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <FranchiseSidebar />
      <main style={{ padding: '2rem', flexGrow: 1 }}>
        <h2>💵 Revenue Summary</h2>
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
            {revenueData.map(entry => (
              <tr key={entry.id} style={{ borderBottom: '1px solid #ccc' }}>
                <td>{entry.id}</td>
                <td>{entry.source}</td>
                <td>${entry.amount}</td>
                <td>{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
