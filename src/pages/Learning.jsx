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
          <div key={course.id} className="card">
            <h3>{course.title}</h3>
            <p style={{ color: "#aaa" }}>{course.desc}</p>
            <button className="button" style={{ marginTop: "10px" }}>
              Start Learning
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "20px"
};

export default Learning;