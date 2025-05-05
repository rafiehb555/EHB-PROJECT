
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#0070f3', color: '#fff' }}>
      <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link href="/login" style={{ marginRight: '1rem' }}>Login</Link>
      <Link href="/signup">Signup</Link>
    </nav>
  );
}
