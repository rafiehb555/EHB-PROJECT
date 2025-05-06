import { useState } from 'react';

export default function PostJob() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Job Posted: ${title}`);
    // You can replace alert with API call to submit job
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>➕ Post a New Job</h2>
      <form onSubmit={handleSubmit}>
        <label>Job Title:</label><br/>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required /><br/><br/>

        <label>Description:</label><br/>
        <textarea value={desc} onChange={e => setDesc(e.target.value)} required /><br/><br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}