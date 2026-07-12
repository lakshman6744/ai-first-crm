import { FaUserMd, FaClipboardList, FaRobot } from "react-icons/fa";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "30px" }}>📊 Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        {/* Doctors Card */}
        <div
          style={{
            background: "#2563eb",
            color: "white",
            width: "260px",
            borderRadius: "15px",
            padding: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,.25)",
          }}
        >
          <FaUserMd size={40} />
          <h2>4</h2>
          <p>Total Doctors</p>
        </div>

        {/* Interaction Card */}
        <div
          style={{
            background: "#16a34a",
            color: "white",
            width: "260px",
            borderRadius: "15px",
            padding: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,.25)",
          }}
        >
          <FaClipboardList size={40} />
          <h2>3</h2>
          <p>Total Interactions</p>
        </div>

        {/* AI Card */}
        <div
          style={{
            background: "#9333ea",
            color: "white",
            width: "260px",
            borderRadius: "15px",
            padding: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,.25)",
          }}
        >
          <FaRobot size={40} />
          <h2>5</h2>
          <p>AI Tools</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;