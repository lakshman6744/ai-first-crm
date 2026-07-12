import { useState } from "react";
import api from "../services/api";
import { FaRobot, FaUserCircle, FaPaperPlane } from "react-icons/fa";

function AIChat() {
  const [message, setMessage] = useState("");
  const [tool, setTool] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await api.post("/ai/chat", {
        message: message,
      });

      setTool(res.data.tool);
      setResponse(res.data.response);
    } catch (err) {
      console.error(err);
      alert("AI Error");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>
        <FaRobot /> AI Assistant
      </h1>

      {/* User Message */}

      <div
        style={{
          background: "#2563eb",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "30px",
        }}
      >
        <h3>
          <FaUserCircle /> You
        </h3>

        <p>{message || "Type your question below..."}</p>
      </div>

      {/* AI Message */}

      <div
        style={{
          background: "#ffffff",
          color: "#111827",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,.15)",
          whiteSpace: "pre-wrap",
        }}
      >
        <h3>
          <FaRobot /> AI Assistant
        </h3>

        <p>{loading ? "Thinking..." : response}</p>

        {tool && (
          <p style={{ color: "#2563eb" }}>
            <b>Tool Used:</b> {tool}
          </p>
        )}
      </div>

      {/* Input */}

      <div
        style={{
          display: "flex",
          marginTop: "30px",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Ask anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            flex: 1,
            padding: "15px",
            borderRadius: "10px",
            fontSize: "16px",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "15px 25px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <FaPaperPlane /> Send
        </button>
      </div>
    </div>
  );
}

export default AIChat;