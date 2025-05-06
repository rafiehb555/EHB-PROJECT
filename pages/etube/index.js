import Link from "next/link";

export default function ETubeHome() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>📺 EHB Tube</h1>
      <p>Welcome to the verified media-sharing platform.</p>

      <ul style={{ marginTop: "1.5rem" }}>
        <li>
          <Link href="/etube/upload">🎥 Upload New Video</Link>
        </li>
        <li>
          <Link href="/etube/categories">🎥 Video Categories</Link>
        </li>
        {/* <li><Link href="/etube/my-videos">📁 My Uploaded Videos</Link></li> */}
        <li>
          <Link href="/etube/watch">▶️ Watch Video</Link>{" "}
          <span style={{ fontSize: "0.8rem" }}>(example)</span>
        </li>
        <li>
          <Link href="/etube/public/[videoId].js">📺 View Channel</Link>{" "}
          <span style={{ fontSize: "0.8rem" }}>(example)</span>
        </li>
      </ul>
    </div>
  );
}
