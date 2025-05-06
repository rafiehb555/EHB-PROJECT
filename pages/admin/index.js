
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) router.push('/admin/login');
  }, []);

  const cards = [
    { title: '🧑‍💼 Franchises', path: '/admin/franchises' },
    { title: '👥 Users', path: '/admin/users' },
    { title: '📊 Reports', path: '/admin/reports' },
    { title: '⚙️ Settings', path: '/admin/settings' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📊 Admin Dashboard</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
        {cards.map((c, i) => (
          <div
            key={i}
            onClick={() => router.push(c.path)}
            style={{
              background: '#f0f0f0', padding: '1.5rem', borderRadius: '10px',
              cursor: 'pointer', minWidth: '200px', textAlign: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}
          >
            {c.title}
          </div>
        ))}
      </div>
    </div>
  );
}
