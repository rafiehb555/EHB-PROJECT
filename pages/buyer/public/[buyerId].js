import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PublicBuyerProfile() {
  const router = useRouter();
  const { buyerId } = router.query;

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (buyerId) {
      // 🔁 Future: fetch from backend
      setProfile({
        name: 'Awais Bhai',
        sqlLevel: 'High',
        totalOrders: 12,
        verified: true,
        buyerId: buyerId,
      });
    }
  }, [buyerId]);

  if (!profile) return <p style={{ padding: '2rem' }}>⏳ Loading profile...</p>;

  return (
    <div>
      <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
        <h2>🌐 Public Profile</h2>
        <p><strong>Buyer ID:</strong> {profile.buyerId}</p>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>SQL Level:</strong> {profile.sqlLevel}</p>
        <p><strong>Total Orders:</strong> {profile.totalOrders}</p>
        <p><strong>Status:</strong> {profile.verified ? '✅ Verified' : '❌ Not Verified'}</p>
      </div>
    </div>
  );
}
