
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  const cards = [
    { title: '🧑‍💼 Seller Dashboard', path: '/seller' },
    { title: '🧍 Buyer Dashboard', path: '/buyer' },
    { title: '🏬 Sub-Franchise', path: '/sub-franchise' },
    { title: '🏙️ Master-Franchise', path: '/master-franchise' },
    { title: '🏢 Corporate Franchise', path: '/company' },
    { title: '🔐 Admin Panel', path: '/admin/login' },
    { title: '🎓 Job Providing Service (JPS)', path: '/jps' },
    { title: '📺 EHB Tube', path: '/etube' },
    { title: '✅ Verification System', path: '/verification' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🌍 Welcome to EHB Technologies</h1>
      <p>Select a module to continue:</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => router.push(card.path)}
            style={{
              cursor: 'pointer',
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '1.5rem',
              width: '250px',
              background: '#f9f9f9',
              boxShadow: '0 0 5px rgba(0,0,0,0.1)',
            }}
          >
            <h3>{card.title}</h3>
            <p style={{ color: '#0070f3' }}>Go to {card.path}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
