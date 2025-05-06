import Link from 'next/link';

export default function JPSHome() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎓 Job Providing System (JPS)</h1>
      <p>Welcome to the JPS dashboard. Explore job listings or post a new job.</p>
      <ul style={{ marginTop: '1rem' }}>
        <li><Link href="/jps/jobs">📋 Browse Jobs</Link></li>
        <li><Link href="/jps/post-job">➕ Post a Job</Link></li>
        <li><Link href="/jps/applications">📨 My Applications</Link></li>
        <li><Link href="/jps/profile">👤 View My Profile</Link></li>
        <li><Link href="/jps/create-profile">📝 Create / Edit Profile</Link></li>
      </ul>
    </div>
  );
}
