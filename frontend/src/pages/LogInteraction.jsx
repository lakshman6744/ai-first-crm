import api from "../services/api";
import { useState } from "react";
function LogInteraction() {
  const [hcpId, setHcpId] = useState("");
  const [interactionType, setInteractionType] = useState("");
  const [summary, setSummary] = useState("");
  const [followUp, setFollowUp] = useState("");
  const saveInteraction = async () => {
  try {
    const response = await api.post("/interaction/", {
      hcp_id: Number(hcpId),
      interaction_type: interactionType,
      summary: summary,
      follow_up: followUp,
    });

    alert("Interaction Saved Successfully!");
    console.log(response.data);

  } catch (error) {
    console.error(error);
    alert("Error Saving Interaction");
  }
};

  return (
    <div style={{ padding: "30px" }}>
      <h1>Log Interaction</h1>

      <div>
        <label>Doctor ID</label>
        <br />
        <input
          type="number"
          value={hcpId}
          onChange={(e) => setHcpId(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Interaction Type</label>
        <br />
        <input
          type="text"
          value={interactionType}
          onChange={(e) => setInteractionType(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Summary</label>
        <br />
        <textarea
          rows="4"
          cols="50"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Follow Up</label>
        <br />
        <input
          type="text"
          value={followUp}
          onChange={(e) => setFollowUp(e.target.value)}
        />
      </div>

      <br />

     <button onClick={saveInteraction}>
  Save Interaction
</button>
    </div>
  );
}

export default LogInteraction;