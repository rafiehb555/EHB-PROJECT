import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';

export default function CompanyComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    setComplaints([
      { id: 101, user: 'Ahmed', issue: 'Late delivery', status: 'Open', region: 'Lahore', date: '2025-05-03' },
      { id: 102, user: 'Mina', issue: 'Product damaged', status: 'Resolved', region: 'Karachi', date: '2025-05-02' },
    ]);
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>📨 Company Complaints</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Issue</th>
              <th>Status</th>
              <th>Region</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map(c => (
              <tr key={c.id} style={{ borderBottom: '1px solid #ccc' }}>
                <td>{c.id}</td>
                <td>{c.user}</td>
                <td>{c.issue}</td>
                <td>{c.status}</td>
                <td>{c.region}</td>
                <td>{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
