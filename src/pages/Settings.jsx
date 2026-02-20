import React, { useState } from "react";

function Settings() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="page-container">
      <h1>Settings</h1>

      <div className="card" style={{ marginTop: "20px" }}>
        <h2>Profile</h2>
        <input
          placeholder="Full Name"
          style={inputStyle}
        />
        <input
          placeholder="Email"
          style={{ ...inputStyle, marginTop: "10px" }}
        />
        <button className="button" style={{ marginTop: "10px" }}>
          Save Changes
        </button>
      </div>

      <div className="card" style={{ marginTop: "20px" }}>
        <h2>Preferences</h2>
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          Enable Dark Mode
        </label>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  background: "#2a2a2a",
  color: "white",
  border: "none"
};

export default Settings;