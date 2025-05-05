
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      <Head>
        <title>EHB Technologies - Global AI Marketplace</title>
        <meta name="description" content="Explore EHB's global AI-powered services and franchise system." />
      </Head>
      <header style={{ backgroundColor: '#0070f3', color: '#fff', padding: '1.5rem', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>🌐 EHB Technologies</h1>
        <p style={{ fontSize: '1.2rem' }}>AI-Powered Global Services Marketplace</p>
      </header>

      <main style={{ padding: '2rem' }}>
        <section style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', padding: '1.5rem', width: '300px', textAlign: 'center' }}>
            <h3>🛍 GoSellr</h3>
            <p>Smart e-commerce system with fast delivery, verified sellers, and blockchain-based trust wallet.</p>
          </div>
          <div style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', padding: '1.5rem', width: '300px', textAlign: 'center' }}>
            <h3>📚 Education</h3>
            <p>Join HPS, EMO, EDR, and OBS for verified online/offline learning and educational networks.</p>
          </div>
          <div style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', padding: '1.5rem', width: '300px', textAlign: 'center' }}>
            <h3>⚕️ Health Services</h3>
            <p>Consult certified doctors, book medical services, and access verified clinics with WMS.</p>
          </div>
        </section>

        <div style={{ marginTop: '2rem', textAlign: 'center', color: '#555' }}>
          <p>✅ Verified • 🔐 Secure • 🌍 Global • 🧩 Franchise-Based</p>
        </div>
      </main>
    </div>
  );
}
