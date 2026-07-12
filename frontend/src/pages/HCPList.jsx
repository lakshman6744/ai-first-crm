import { useEffect, useState } from "react";
import api from "../services/api";

function HCPList() {
  const [hcps, setHcps] = useState([]);

  useEffect(() => {
    api
      .get("/hcp/")
      .then((response) => {
        setHcps(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "30px" }}>
        👨‍⚕️ Healthcare Professionals
      </h1>

      {hcps.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {hcps.map((doctor) => (
            <div
              key={doctor.id}
              style={{
                background: "#ffffff",
                color: "#111827",
                borderRadius: "15px",
                padding: "20px",
                boxShadow: "0 8px 20px rgba(0,0,0,.15)",
              }}
            >
              <h2>👨‍⚕️ {doctor.name}</h2>

              <hr />

              <p>
                ❤️ <b>Specialization:</b> {doctor.specialization}
              </p>

              <p>
                🏥 <b>Hospital:</b> {doctor.hospital}
              </p>

              <p>
                📍 <b>City:</b> {doctor.city}
              </p>

              <p>
                📧 <b>Email:</b> {doctor.email}
              </p>

              <p>
                📞 <b>Phone:</b> {doctor.phone}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HCPList;