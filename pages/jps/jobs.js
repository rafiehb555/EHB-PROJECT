import Link from 'next/link';

const jobs = [
  { id: '101', title: 'Frontend Developer', company: 'EHB Tech', location: 'Remote' },
  { id: '102', title: 'Blockchain Engineer', company: 'EHB Tech', location: 'USA' },
];

export default function BrowseJobs() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>📋 Available Jobs</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <Link href={`/jps/public/${job.id}`}>
              <strong>{job.title}</strong> at {job.company} ({job.location})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}