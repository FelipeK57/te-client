import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import { App } from "./App.tsx";

// Auth
import { Login } from "./auth/pages/Login.tsx";

// Supports weights 100-900
// @ts-ignore
import "@fontsource-variable/inter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/professor/dashboard"
          element={<div>Professor Dashboard</div>}
        />
        <Route
          path="/student/dashboard"
          element={<div>Student Dashboard</div>}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
