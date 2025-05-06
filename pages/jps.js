
import Link from 'next/link';

export default function JPSHome() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎓 Job Providing System (JPS)</h1>
      <p>Explore jobs or manage your profile.</p>
      <ul style={{ marginTop: '1rem' }}>
        <li><Link href="/jps/create-profile">📝 Create Job Seeker Profile</Link></li>
        <li><Link href="/jps/job-listings">📄 View Job Listings</Link></li>
        <li><Link href="/jps/post-job">➕ Post a Job</Link></li>
      </ul>
    </div>
  );
}
