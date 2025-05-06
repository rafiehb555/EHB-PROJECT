import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';

export default function MasterComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    setComplaints([
      { id: 101, issue: 'Late delivery', franchise: 'Lahore Sub', status: 'Open', date: '2025-05-02' },
      { id: 102, issue: 'Wrong Product', franchise: 'Faisalabad Sub', status: 'Resolved', date: '2025-05-01' },
    ]);
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>🚨 Master Complaint Management</h2>
        <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#eee' }}>
              <th>ID</th><th>Issue</th><th>Sub-Franchise</th><th>Status</th><th>Date</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map(c => (
              <tr key={c.id} style={{ borderBottom: '1px solid #ccc' }}>
                <td>{c.id}</td><td>{c.issue}</td><td>{c.franchise}</td>
                <td>{c.status}</td><td>{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
