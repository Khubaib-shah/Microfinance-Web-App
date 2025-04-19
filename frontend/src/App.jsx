import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Navigation } from "./components/Navigation";
import ApplyPage from "./pages/ApplyPage";
import { Toaster } from "@/components/ui/toaster";
import DashboardPage from "./pages/AdminDashboard";
import routes from "./routes";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground bg-gray-50">
        <Navigation />
        <Routes>
          {/* <Route path="/admin" element={<DashboardPage />} /> */}
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
