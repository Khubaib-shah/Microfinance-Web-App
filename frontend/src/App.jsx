import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Toaster } from "@/components/ui/toaster";
import routes from "./routes";
import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const user = localStorage.getItem("user");
  if (user) {
    const parsedUser = JSON.parse(user);
    if (parsedUser.role === "admin") {
      routes.push({
        path: "/admin",
        component: AdminDashboard,
        Value: "Dashboard",
      });
    }
  }

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground bg-gray-50">
        <Navigation />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
