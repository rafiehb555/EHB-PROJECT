import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';

export default function MasterSellers() {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    setSellers([
      { id: 1, name: 'Zain', area: 'Multan', status: 'Active', sql: 'High' },
      { id: 2, name: 'Hassan', area: 'Lahore', status: 'Pending', sql: 'Normal' },
    ]);
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>🧑‍💼 Sellers Under Master</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr style={{ background: '#eee' }}>
              <th>ID</th><th>Name</th><th>Area</th><th>Status</th><th>SQL</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map(s => (
              <tr key={s.id} style={{ borderBottom: '1px solid #ccc' }}>
                <td>{s.id}</td><td>{s.name}</td><td>{s.area}</td>
                <td>{s.status}</td><td>{s.sql}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
