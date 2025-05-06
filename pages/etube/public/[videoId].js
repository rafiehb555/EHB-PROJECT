import { useRouter } from 'next/router';

export default function PublicVideoPage() {
  const { videoId } = useRouter().query;

  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <h2>📽️ Public Video ID: {videoId}</h2>
        <p>Details about the video will be shown here.</p>
      </div>
    </div>
  );
}