import { useEffect, useState } from "react";
import api from "../services/api";
import { FaClipboardList, FaCalendarAlt, FaUserMd } from "react-icons/fa";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    api.get("/interaction/")
      .then((res) => {
        setHistory(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📜 Interaction History</h1>

      <div
        style={{
          display: "grid",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        {history.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#ffffff",
              color: "#111827",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,.15)",
            }}
          >
            <h2>
              <FaClipboardList /> Interaction #{item.id}
            </h2>

            <p>
              <FaUserMd /> <b>Doctor ID:</b> {item.hcp_id}
            </p>

            <p>
              <b>Type:</b> {item.interaction_type}
            </p>

            <p>
              <b>Summary:</b> {item.summary}
            </p>

            <p>
              <b>Follow Up:</b> {item.follow_up}
            </p>

            <p>
              <FaCalendarAlt /> {item.created_at}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;