import Navbar from '../../components/Navbar';
import { useState, useEffect } from 'react';

export default function CorporateDashboard() {
  const [data, setData] = useState({
    name: 'Corporate Admin',
    totalMasters: 10,
    earnings: 15500,
    complaints: 7,
    coverage: 'Pakistan',
  });

  useEffect(() => {
    // 🔁 Future: API call
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>🏢 Welcome, {data.name}</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          <Card title="Master Franchises" value={data.totalMasters} icon="🧑‍🏫" />
          <Card title="Earnings" value={`$${data.earnings}`} icon="💸" />
          <Card title="Complaints" value={data.complaints} icon="📩" />
          <Card title="Coverage Area" value={data.coverage} icon="🌍" />
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, icon }) {
  return (
    <div style={{
      background: '#f1f1f1',
      padding: '1rem 1.5rem',
      borderRadius: '10px',
      minWidth: '200px',
      flex: 1,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '1.6rem' }}>{icon}</div>
      <h4>{title}</h4>
      <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{value}</p>
    </div>
  );
}
