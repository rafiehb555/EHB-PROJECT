import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BuyerDashboard() {
  const router = useRouter();
  const [buyerData, setBuyerData] = useState({
    name: 'Awais Bhai',
    sqlLevel: 'Normal',
    wallet: 720,
    recommended: ['Mechanic (High)', 'Lawyer (Verified)', 'Online Book Store'],
  });

  useEffect(() => {
    // 🔐 Future: token-based data fetch
  }, []);

  const navCards = [
    { title: '🛒 My Orders', path: '/buyer/orders' },
    { title: '💳 Wallet', path: '/buyer/wallet' },
    { title: '📥 Complaints', path: '/buyer/complaints' },
    { title: '🧠 Upgrade SQL', path: '/buyer/sql-upgrade' },
    { title: '🌐 Public Profile', path: '/buyer/public/456' },
  ];

  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <h2>🧍 Welcome, {buyerData.name}</h2>

        {/* Summary */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
          <Card title="SQL Level" value={buyerData.sqlLevel} icon="🏅" />
          <Card title="Wallet Balance" value={`$${buyerData.wallet}`} icon="💰" />
        </div>

        {/* Recommended */}
        <h3 style={{ marginTop: '2rem' }}>🧠 Recommended Services</h3>
        <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
          {buyerData.recommended.map((item, i) => (
            <li key={i}>✅ {item}</li>
          ))}
        </ul>

        {/* Navigation */}
        <h3 style={{ marginTop: '2rem' }}>📂 Navigate</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {navCards.map((card, i) => (
            <div
              key={i}
              onClick={() => router.push(card.path)}
              style={navStyle}
            >
              {card.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, icon }) {
  return (
    <div style={{
      background: '#f9f9f9',
      padding: '1rem 1.5rem',
      borderRadius: '12px',
      minWidth: '220px',
      flex: 1,
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
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

const navStyle = {
  padding: '1.2rem',
  backgroundColor: '#e6f7ff',
  borderRadius: '10px',
  cursor: 'pointer',
  minWidth: '200px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  textAlign: 'center',
  fontSize: '1.05rem',
};
