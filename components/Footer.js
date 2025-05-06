export default function Footer() {
    const footerStyle = {
      backgroundColor: "#f2f2f2",
      padding: "20px",
      textAlign: "center",
      borderTop: "1px solid #ddd",
      marginTop: "40px",
      fontSize: "14px",
      color: "#666"
    };
  
    const linkStyle = {
      margin: "0 10px",
      color: "#007bff",
      textDecoration: "none"
    };
  
    return (
      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} EHB Technologies Limited. All rights reserved.</p>
        <div style={{ marginTop: "8px" }}>
          <a href="/terms" style={linkStyle}>Terms</a>
          <a href="/privacy" style={linkStyle}>Privacy</a>
          <a href="/support" style={linkStyle}>Support</a>
        </div>
      </footer>
    );
  }
  