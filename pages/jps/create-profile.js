import { useState } from 'react';
import { useRouter } from 'next/router';

export default function CreateProfile() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    location: '',
    bio: '',
    skills: '',
    experience: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('jpsProfile', JSON.stringify(form));
    router.push('/jps/profile');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>👤 Create Your Job Seeker Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label><br/>
        <input name="name" value={form.name} onChange={handleChange} required /><br/><br/>

        <label>Email:</label><br/>
        <input name="email" value={form.email} onChange={handleChange} required /><br/><br/>

        <label>Location:</label><br/>
        <input name="location" value={form.location} onChange={handleChange} required /><br/><br/>

        <label>Bio:</label><br/>
        <textarea name="bio" value={form.bio} onChange={handleChange} /><br/><br/>

        <label>Skills (comma separated):</label><br/>
        <input name="skills" value={form.skills} onChange={handleChange} /><br/><br/>

        <label>Experience (comma separated):</label><br/>
        <input name="experience" value={form.experience} onChange={handleChange} /><br/><br/>

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}