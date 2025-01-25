import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Users,
  Calendar,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "../ui/button";
import { useAuth } from "../../hooks/use-auth";
import { cn } from "../../lib/utils";

const menuItems = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    href: "/admin",
  },
  {
    title: "Applications",
    icon: FileText,
    href: "/admin/applications",
  },
  {
    title: "Users",
    icon: Users,
    href: "/admin/users",
  },
  {
    title: "Appointments",
    icon: Calendar,
    href: "/admin/appointments",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
];

export function AdminSidebar() {
  const location = useLocation();
  const { logout } = useAuth();

  return (
    <aside className="flex flex-col w-64 border-r min-h-screen bg-muted/40">
      <div className="p-6">
        <h2 className="text-lg font-semibold">Admin Dashboard</h2>
      </div>
      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 dark:hover:text-gray-50",
              location.pathname === item.href
                ? "bg-muted text-foreground"
                : "text-muted-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="p-6">
        <Button variant="outline" className="w-full" size="sm" onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
}
