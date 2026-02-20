import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import Learning from "./pages/Learning";

function App() {
  return (
    <BrowserRouter>
      <div style={layoutStyle}>
        
        {/* Sidebar */}
        <div style={sidebarStyle}>
          <h2 style={{ marginBottom: "30px" }}>My App</h2>

          <NavLink to="/learning" style={linkStyle}>
            Learning
          </NavLink>

          <NavLink to="/support" style={linkStyle}>
            Support
          </NavLink>

          <NavLink to="/settings" style={linkStyle}>
            Settings
          </NavLink>
        </div>

        {/* Main Content */}
        <div style={contentStyle}>
          <Routes>
            <Route path="/" element={<Learning />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/support" element={<Support />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

const layoutStyle = {
  display: "flex",
  minHeight: "100vh",
};

const sidebarStyle = {
  width: "220px",
  background: "#121212",
  padding: "30px 20px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  borderRight: "1px solid #222",
};

const contentStyle = {
  flex: 1,
  padding: "20px",
};

const linkStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "#1DB954" : "white",
  fontWeight: isActive ? "bold" : "normal",
  padding: "8px 0",
});

export default App;