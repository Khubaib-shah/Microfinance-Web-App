import AdminDashboard from "./pages/AdminDashboard";
import ApplyPage from "./pages/ApplyPage";
import LandingPage from "./pages/LandingPage";

const routes = [
  { path: "/", component: LandingPage, Value: "Home" },
  { path: "/apply", component: ApplyPage, Value: "Apply" },
];
export default routes;
