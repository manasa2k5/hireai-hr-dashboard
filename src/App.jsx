import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import Candidates from "./pages/Candidates";
import Jobs from "./pages/Jobs";
import Analytics from "./pages/Analytics";
import AICopilot from "./pages/AICopilot";
import Settings from "./pages/Settings";
import AppLayout from "./components/layouts/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="copilot" element={<AICopilot />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;