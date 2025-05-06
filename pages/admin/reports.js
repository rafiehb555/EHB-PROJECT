
export default function ReportsPage() {
  const reports = [
    { id: 1, type: 'Complaint', detail: 'Late delivery', user: 'Ali' },
    { id: 2, type: 'Revenue', detail: '$1200 earned', user: 'System' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📈 Reports</h2>
      <table style={{ width: '100%', marginTop: '1rem' }}>
        <thead>
          <tr><th>ID</th><th>Type</th><th>Detail</th><th>User</th></tr>
        </thead>
        <tbody>
          {reports.map(r => (
            <tr key={r.id}>
              <td>{r.id}</td><td>{r.type}</td><td>{r.detail}</td><td>{r.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
