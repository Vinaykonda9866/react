import React from "react";

function Home() {
  return (
    <div className="page-container">
      <div style={heroStyle}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Welcome to Learning Hub</h1>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Explore amazing courses and boost your skills today!
        </p>
        <button style={ctaButtonStyle}>Get Started</button>
      </div>

      <div style={featuresStyle}>
        <div style={featureCardStyle}>
          <h3>📚 100+ Courses</h3>
          <p>Learn from a wide variety of topics</p>
        </div>
        <div style={featureCardStyle}>
          <h3>🎓 Expert Teachers</h3>
          <p>Learn from industry professionals</p>
        </div>
        <div style={featureCardStyle}>
          <h3>⚡ Fast Learning</h3>
          <p>Structured paths for quick mastery</p>
        </div>
      </div>
    </div>
  );
}

const heroStyle = {
  textAlign: "center",
  padding: "80px 20px",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "#fff",
  borderRadius: "12px",
  marginBottom: "40px"
};

const ctaButtonStyle = {
  padding: "12px 30px",
  fontSize: "16px",
  backgroundColor: "#fff",
  color: "#667eea",
  border: "none",
  borderRadius: "25px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "transform 0.2s"
};

const featuresStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px"
};

const featureCardStyle = {
  padding: "20px",
  background: "rgba(102, 126, 234, 0.1)",
  borderRadius: "12px",
  textAlign: "center",
  transition: "transform 0.3s ease"
};

export default Home;