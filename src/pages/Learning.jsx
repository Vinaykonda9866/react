import React from "react";

const courses = [
  { id: 1, title: "React Basics", desc: "Learn components & hooks" },
  { id: 2, title: "Advanced JavaScript", desc: "Deep dive into JS" },
  { id: 3, title: "UI/UX Design", desc: "Design beautiful interfaces" },
  { id: 4, title: "Node.js", desc: "Backend fundamentals" },
];

function Learning() {
  return (
    <div className="page-container">
      <h1>Learning Hub</h1>

      <div style={gridStyle}>
        {courses.map(course => (
          <div key={course.id} className="card-3d" style={cardStyle}>
            <h3>{course.title}</h3>
            <p style={{ color: "#aaa" }}>{course.desc}</p>
            <button className="button" style={{ marginTop: "10px" }}>
              Start Learning
            </button>
          </div>
        ))}
      </div>
      <style>{`
        .card-3d {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .card-3d:hover {
          transform: translateY(-10px) rotateX(5deg);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}

const cardStyle = {
  padding: "20px",
  borderRadius: "12px",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "#fff",
  perspective: "1000px"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "20px"
};

export default Learning;