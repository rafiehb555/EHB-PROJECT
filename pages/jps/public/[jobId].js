import { useRouter } from 'next/router';

export default function JobPublicPage() {
  const { jobId } = useRouter().query;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🔍 Job Details</h2>
      <p>This is the public job page for job ID: {jobId}</p>
      <p>More job information will be fetched from the backend in the future.</p>
    </div>
  );
}