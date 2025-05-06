
export default function UploadVideo() {
  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <h2>📤 Upload New Video</h2>
        <form>
          <input type="text" placeholder="Title" required />
          <input type="file" accept="video/*" required />
          <textarea placeholder="Description" />
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
}