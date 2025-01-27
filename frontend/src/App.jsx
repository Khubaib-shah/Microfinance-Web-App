import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Navigation } from "./components/Navigation";
import ApplyPage from "./pages/ApplyPage";
import axios from "axios";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/apply" element={<ApplyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
