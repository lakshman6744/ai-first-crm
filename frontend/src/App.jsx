import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import HCPList from "./pages/HCPList";
import LogInteraction from "./pages/LogInteraction";
import History from "./pages/History";
import AIChat from "./pages/AIChat";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div
        style={{
          marginLeft: "270px",
          padding: "20px",
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/hcp" element={<HCPList />} />
          <Route path="/log" element={<LogInteraction />} />
          <Route path="/history" element={<History />} />
          <Route path="/chat" element={<AIChat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;