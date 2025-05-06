import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';

export default function CorporateComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    setComplaints([
      { id: 401, franchise: 'Peshawar Master', issue: 'Late Delivery', status: 'Resolved', date: '2025-05-01' },
      { id: 402, franchise: 'Hyderabad Master', issue: 'Fake Product', status: 'Open', date: '2025-05-02' },
    ]);
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>🚨 Corporate Complaints</h2>
        <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#eee' }}>
              <th>ID</th><th>Franchise</th><th>Issue</th><th>Status</th><th>Date</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map(c => (
              <tr key={c.id} style={{ borderBottom: '1px solid #ccc' }}>
                <td>{c.id}</td><td>{c.franchise}</td><td>{c.issue}</td>
                <td>{c.status}</td><td>{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
