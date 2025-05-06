import { useState } from "react";

export default function SQLUpgradePage() {
  const [currentLevel, setCurrentLevel] = useState("Normal");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [message, setMessage] = useState("");

  const handleUpgrade = (e) => {
    e.preventDefault();

    if (!selectedLevel || selectedLevel === currentLevel) {
      setMessage("❌ Please select a valid higher level");
      return;
    }

    const levels = ["Free", "Basic", "Normal", "High", "VIP"];
    const currentIndex = levels.indexOf(currentLevel);
    const selectedIndex = levels.indexOf(selectedLevel);

    if (selectedIndex <= currentIndex) {
      setMessage("⚠️ You can only upgrade to a higher level");
      return;
    }

    setCurrentLevel(selectedLevel);
    setMessage(`✅ Successfully upgraded to ${selectedLevel} SQL Level!`);
  };

  return (
    <div>
      <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
        <h2>🛡️ Service Quality Level (SQL)</h2>
        <p>
          <strong>Current Level:</strong> {currentLevel}
        </p>

        <form onSubmit={handleUpgrade}>
          <label>Choose Upgrade Level:</label>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            style={inputStyle}
            required
          >
            <option value="">-- Select --</option>
            <option value="Free">Free</option>
            <option value="Basic">Basic</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
            <option value="VIP">VIP</option>
          </select>

          <button type="submit" style={buttonStyle}>
            Upgrade Level
          </button>
        </form>

        {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
      </div>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "0.5rem",
  marginBottom: "1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "0.6rem 1.2rem",
  backgroundColor: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
