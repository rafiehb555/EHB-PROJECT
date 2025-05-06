
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminLogin() {
  const router = useRouter();
  const [admin, setAdmin] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (admin.username === 'admin' && admin.password === 'admin123') {
      localStorage.setItem('adminToken', 'secure-token');
      router.push('/admin');
    } else {
      setError('❌ Invalid credentials');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>🔐 Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Username"
          value={admin.username}
          onChange={(e) => setAdmin({ ...admin, username: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={admin.password}
          onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
          required
          style={inputStyle}
        />
        <button type="submit" style={btnStyle}>Login</button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
}

const inputStyle = {
  display: 'block', width: '100%', padding: '0.5rem',
  marginBottom: '1rem', borderRadius: '6px', border: '1px solid #ccc',
};

const btnStyle = {
  backgroundColor: '#0070f3', color: 'white', border: 'none',
  padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer',
};
