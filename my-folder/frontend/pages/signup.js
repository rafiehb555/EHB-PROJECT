
import { useState } from 'react';
import axios from '../utils/api';
import { useRouter } from 'next/router';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', { name, email, password });
      router.push('/login');
    } catch (err) {
      alert('Signup failed: ' + err.response?.data?.message || 'Error');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required /><br />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required /><br />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required /><br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
