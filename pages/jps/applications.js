const applications = [
  { id: 'A001', job: 'Frontend Developer', status: 'Under Review' },
  { id: 'A002', job: 'AI Engineer', status: 'Rejected' },
];

export default function MyApplications() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>📨 My Applications</h2>
      <ul>
        {applications.map(app => (
          <li key={app.id}>
            {app.job} - <strong>{app.status}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}