import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import useAuth from "@/hooks/useAuth";
import routes from "@/routes";

export function Navigation() {
  const { logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Saylani Microfinance</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="transition-colors hover:text-foreground/80"
            >
              {route.Value}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
