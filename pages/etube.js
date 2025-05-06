
import Link from 'next/link';

export default function ETubeHome() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>📺 EHB Tube</h1>
      <p>Welcome to the verified media-sharing platform.</p>
      <ul style={{ marginTop: '1rem' }}>
        <li><Link href="/etube/upload">📤 Upload Video</Link></li>
        <li><Link href="/etube/videos">📼 Watch Videos</Link></li>
        <li><Link href="/etube/my-channel">📺 My Channel</Link></li>
      </ul>
    </div>
  );
}
