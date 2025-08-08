import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";

// Auth
import { Login } from "./auth/pages/Login.tsx";

// Student
import { Dashboard as StudentDashboard } from "./student/pages/Dashboard.tsx";

// Teacher
import { Dashboard as TeacherDashboard } from "./teacher/pages/Dashboard.tsx";

// Supports weights 100-900
// @ts-ignore
import "@fontsource-variable/inter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/teacher/dashboard"
          element={<TeacherDashboard />}
        />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
