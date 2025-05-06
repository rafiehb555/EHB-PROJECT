import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function JobProfile() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('jpsProfile');
    if (stored) {
      setProfile(JSON.parse(stored));
    } else {
      router.push('/jps/create-profile');
    }
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>👤 {profile.name}</h1>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Location:</strong> {profile.location}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>

      <h2>🛠 Skills</h2>
      <ul>{profile.skills.split(',').map((s, i) => <li key={i}>{s.trim()}</li>)}</ul>

      <h2>💼 Experience</h2>
      <ul>{profile.experience.split(',').map((e, i) => <li key={i}>{e.trim()}</li>)}</ul>

      <button onClick={() => router.push('/jps/create-profile')} style={{
        marginTop: '1.5rem',
        padding: '0.5rem 1rem',
        background: '#0070f3',
        color: '#fff',
        border: 'none',
        borderRadius: '0.5rem',
        cursor: 'pointer'
      }}>
        ✏️ Edit Profile
      </button>
    </div>
  );
}