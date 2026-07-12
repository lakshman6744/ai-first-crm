import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserMd,
  FaClipboardList,
  FaHistory,
  FaRobot,
} from "react-icons/fa";

function Navbar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#1f2937",
        color: "white",
        position: "fixed",
        left: 0,
        top: 0,
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "40px" }}>🤖 AI CRM</h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none" }}
        >
          <FaHome /> Dashboard
        </Link>

        <Link
          to="/hcp"
          style={{ color: "white", textDecoration: "none" }}
        >
          <FaUserMd /> HCP List
        </Link>

        <Link
          to="/log"
          style={{ color: "white", textDecoration: "none" }}
        >
          <FaClipboardList /> Log Interaction
        </Link>

        <Link
          to="/history"
          style={{ color: "white", textDecoration: "none" }}
        >
          <FaHistory /> History
        </Link>

        <Link
          to="/chat"
          style={{ color: "white", textDecoration: "none" }}
        >
          <FaRobot /> AI Chat
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;