import { useState } from 'react';

export default function BuyerComplaintsPage() {
  const [form, setForm] = useState({
    subject: '',
    type: 'Service',
    description: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.subject || !form.description) {
      setMessage('❌ All fields are required.');
      return;
    }

    // 🔁 Future: Send to backend
    console.log('📩 Complaint submitted:', form);
    setMessage('✅ Complaint submitted successfully!');
    setForm({ subject: '', type: 'Service', description: '' });
  };

  return (
    <div>
      <div style={{ padding: '2rem', maxWidth: '700px', margin: 'auto' }}>
        <h2>😠 Submit a Complaint</h2>
        <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
          <label>Subject:</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <label>Complaint Type:</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="Service">Service</option>
            <option value="Product">Product</option>
            <option value="Seller">Seller</option>
            <option value="Delivery">Delivery</option>
          </select>

          <label>Description:</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="5"
            required
            style={{ ...inputStyle, resize: 'vertical' }}
          ></textarea>

          <button type="submit" style={buttonStyle}>Submit Complaint</button>
        </form>

        {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
      </div>
    </div>
  );
}

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '0.6rem',
  marginBottom: '1rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '0.6rem 1.2rem',
  backgroundColor: '#dc3545',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};
