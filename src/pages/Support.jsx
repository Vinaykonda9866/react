import React, { useState } from "react";

function Support() {
  const [message, setMessage] = useState("");

  return (
    <div className="page-container">
      <h1>Support Center</h1>

      <div className="card" style={{ marginTop: "20px" }}>
        <h2>Contact Us</h2>
        <textarea
          placeholder="Describe your issue..."
          style={{
            width: "100%",
            height: "100px",
            marginTop: "10px",
            padding: "10px",
            borderRadius: "8px",
            background: "#2a2a2a",
            color: "white",
            border: "none"
          }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button className="button" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </div>

      <div className="card" style={{ marginTop: "20px" }}>
        <h2>FAQs</h2>
        <p>❓ How do I reset password?</p>
        <p>👉 Go to Settings → Change Password</p>

        <p>❓ How do I upgrade plan?</p>
        <p>👉 Go to Settings → Subscription</p>
      </div>
    </div>
  );
}

export default Support;