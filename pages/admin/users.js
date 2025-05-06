
export default function UserList() {
  const users = [
    { id: 1, name: 'Awais', role: 'Buyer' },
    { id: 2, name: 'Zara', role: 'Seller' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>👥 Users</h2>
      <table style={{ width: '100%', marginTop: '1rem' }}>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Role</th></tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td><td>{u.name}</td><td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
