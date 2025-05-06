import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const router = useRouter();

export default function CompanyDashboard() {
  const [data, setData] = useState({
    name: 'Company Admin',
    totalFranchises: 20,
    totalEarnings: 45000,
    totalComplaints: 15,
    networkReach: 'All Pakistan',
  });

  useEffect(() => {
    // Future: connect with backend
  }, []);

  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <h2>🏢 Welcome, {data.name}</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          <Card title="Total Franchises" value={data.totalFranchises} icon="🏬" />
          <Card title="Total Earnings" value={`$${data.totalEarnings}`} icon="💰" />
          <Card title="Complaints" value={data.totalComplaints} icon="📨" />
          <Card title="Network Reach" value={data.networkReach} icon="🌍" />
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, icon }) {
  return (
    <div style={{
      background: '#f4f4f4',
      padding: '1rem 1.5rem',
      borderRadius: '12px',
      minWidth: '220px',
      flex: 1,
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '1.8rem' }}>{icon}</div>
      <h4>{title}</h4>
      <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{value}</p>
    
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
