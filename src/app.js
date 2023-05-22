import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";
import Team from "./components/team/team.jsx";
import Reports from "./components/reports/reports.jsx";
import CPU from "./components/cpu/cpu.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/cpu" element={<CPU />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
