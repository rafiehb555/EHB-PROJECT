
export default function WatchPage() {
  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <h2>🎥 Watch Video</h2>
        <video width="100%" controls>
          <source src="/sample.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}