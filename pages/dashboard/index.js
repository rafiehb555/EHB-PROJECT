import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

export default function UserDashboardPage() {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login'); // ⛔ No token, redirect to login
    } else {
      // ✅ Simulate fetch from backend
      setUserData({
        name: 'Mohammad Arham',
        sqlLevel: 'Normal',
        wallet: 230,
        activeOrders: 3,
        services: ['Online Shopping', 'Verified Mechanic', 'Lawyer Booking'],
      });
      setIsAuth(true); // Authenticated
    }
  }, []);

  if (!isAuth || !userData) return null; // ⏳ Show nothing while loading

  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>👋 Welcome, {userData.name}</h2>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          <Card title="SQL Level" value={userData.sqlLevel} icon="🏅" />
          <Card title="Wallet Balance" value={`$${userData.wallet}`} icon="💰" />
          <Card title="Active Orders" value={userData.activeOrders} icon="📦" />
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3>🧠 AI-Recommended Services for You</h3>
          <ul style={{ marginTop: '1rem' }}>
            {userData.services.map((service, i) => (
              <li key={i} style={{ padding: '0.5rem 0' }}>✅ {service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, icon }) {
  return (
    <div style={{ background: '#f0f0f0', padding: '1rem 2rem', borderRadius: '12px', minWidth: '200px', flex: 1, boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
      <div style={{ fontSize: '1.8rem' }}>{icon}</div>
      <h4>{title}</h4>
      <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{value}</p>
    </div>
  );
}
