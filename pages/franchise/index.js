import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

export default function FranchiseDashboard() {
  const [data, setData] = useState({
    name: 'Franchise Admin',
    totalSubs: 12,
    earnings: 7450,
    complaints: 3,
    area: 'District Lahore',
  });

  useEffect(() => {
    // 🔁 Future: Fetch real-time data from backend
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>🏢 Welcome, {data.name}</h2>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          <Card title="Total Sub-Franchises" value={data.totalSubs} icon="🧑‍🤝‍🧑" />
          <Card title="Total Earnings" value={`$${data.earnings}`} icon="💰" />
          <Card title="Active Complaints" value={data.complaints} icon="📨" />
          <Card title="Area Covered" value={data.area} icon="📍" />
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, icon }) {
  return (
    <div style={{
      background: '#f2f2f2',
      padding: '1rem 1.5rem',
      borderRadius: '12px',
      minWidth: '220px',
      flex: 1,
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '1.8rem' }}>{icon}</div>
      <h4>{title}</h4>
      <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{value}</p>
    </div>
  );
}
