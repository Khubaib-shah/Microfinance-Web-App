import AdminDashboard from "./pages/AdminDashboard";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";

const routes = [
  { path: "/", component: LandingPage, Value: "Home" },
  { path: "/login", component: LoginPage, Value: "Login" },
  // { path: "/dashboard", component: UserDashboard ,Value:"" },
  { path: "/admin", component: AdminDashboard, Value: "Admin DashBoard" },
];
export default routes;
