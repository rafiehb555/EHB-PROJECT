
export default function FranchiseList() {
  const franchises = [
    { id: 1, name: 'Lahore Franchise', level: 'Sub', owner: 'Ali' },
    { id: 2, name: 'Karachi Franchise', level: 'Master', owner: 'Sara' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧑‍💼 Franchise Management</h2>
      <table style={{ width: '100%', marginTop: '1rem' }}>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Level</th><th>Owner</th></tr>
        </thead>
        <tbody>
          {franchises.map(f => (
            <tr key={f.id}>
              <td>{f.id}</td><td>{f.name}</td><td>{f.level}</td><td>{f.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
