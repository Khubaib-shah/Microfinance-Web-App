import AdminDashboard from "./pages/AdminDashboard";
import ApplyPage from "./pages/ApplyPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";

const routes = [
  { path: "/", component: LandingPage, Value: "Home" },
  { path: "/apply", component: ApplyPage, Value: "Apply" },
  { path: "/admin", component: AdminDashboard, Value: "Dashboard" },
  { path: "/login", component: LoginPage, Value: "Login" },
];
export default routes;
