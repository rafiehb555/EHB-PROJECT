import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const router = useRouter();

export default function MasterFranchiseDashboard() {
  const [data, setData] = useState({
    name: 'Master Admin',
    totalSubs: 25,
    earnings: 18350,
    area: 'Punjab Region',
    complaints: 6,
  });

  useEffect(() => {
    // 🔁 Future: Backend data fetch
  }, []);

  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <h2>🏢 Welcome, {data.name}</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
          <Card title="Total Sub-Franchises" value={data.totalSubs} icon="🏪" />
          <Card title="Total Earnings" value={`$${data.earnings}`} icon="💰" />
          <Card title="Active Complaints" value={data.complaints} icon="⚠️" />
          <Card title="Region" value={data.area} icon="🗺️" />
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, icon }) {
  return (
    <div style={{
      background: '#f5f5f5',
      padding: '1rem',
      borderRadius: '12px',
      flex: 1,
      minWidth: '220px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    }}>
      <div style={{ fontSize: '1.8rem' }}>{icon}</div>
      <h4>{title}</h4>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{value}</p>
    
      <div style={{ marginTop: '1rem' }}>
        <button 
          onClick={() => router.push(`${router.pathname}/sql-upgrade`)} 
          style={{
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Upgrade SQL Level
        </button>
      </div>

</div>
  );
}
