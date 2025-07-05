import { Link } from "react-router-dom";
import routes from "@/routes";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <p className="bg-black text-white font-bold tracking-widest p-1 rounded-md text-sm md:hidden">
            SM
          </p>
          <span className="font-bold hidden md:block text-lg text-foreground">
            Saylani Microfinance
          </span>
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
        <div className="ml-auto flex items-center space-x-4">
          <Link
            to="/apply"
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Apply Now
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
