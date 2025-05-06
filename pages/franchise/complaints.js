import FranchiseSidebar from '../../components/FranchiseSidebar';
import { useEffect, useState } from 'react';

export default function ComplaintsPage() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    // ✅ Dummy data
    setComplaints([
      { id: 101, user: 'Ahmed', issue: 'Late delivery', status: 'Open', date: '2025-05-03' },
      { id: 102, user: 'Mina', issue: 'Wrong product', status: 'Resolved', date: '2025-05-02' },
    ]);
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <FranchiseSidebar />
      <main style={{ padding: '2rem', flexGrow: 1 }}>
        <h2>🚨 Complaints</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Issue</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map(comp => (
              <tr key={comp.id} style={{ borderBottom: '1px solid #ccc' }}>
                <td>{comp.id}</td>
                <td>{comp.user}</td>
                <td>{comp.issue}</td>
                <td>{comp.status}</td>
                <td>{comp.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
