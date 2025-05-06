import { useState, useEffect } from 'react';

export default function BuyerWalletPage() {
  const [balance, setBalance] = useState(720);
  const [amount, setAmount] = useState('');
  const [action, setAction] = useState('topup');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // 🧠 Future: Fetch balance from backend
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amt = parseFloat(amount);
    if (!amt || amt <= 0) {
      setMessage('❌ Please enter a valid amount');
      return;
    }

    if (action === 'topup') {
      setBalance(prev => prev + amt);
      setMessage(`✅ $${amt} added to wallet`);
    } else if (action === 'withdraw') {
      if (amt > balance) {
        setMessage('❌ Insufficient balance');
        return;
      }
      setBalance(prev => prev - amt);
      setMessage(`✅ $${amt} withdrawn from wallet`);
    }

    setAmount('');
  };

  return (
    <div>
      <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
        <h2>💳 Buyer Wallet</h2>
        <p><strong>Current Balance:</strong> ${balance}</p>

        <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            style={inputStyle}
          />

          <label>Action:</label>
          <select
            value={action}
            onChange={(e) => setAction(e.target.value)}
            style={inputStyle}
          >
            <option value="topup">Top-Up</option>
            <option value="withdraw">Withdraw</option>
          </select>

          <button type="submit" style={buttonStyle}>
            {action === 'topup' ? 'Add Funds' : 'Withdraw Funds'}
          </button>
        </form>

        {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
      </div>
    </div>
  );
}

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '0.5rem',
  marginBottom: '1rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '0.6rem 1.2rem',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};
