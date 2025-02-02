import { Link } from "react-router-dom";

export function MainNav({ className }) {
  return (
    <nav className={`flex items-center space-x-4 lg:space-x-6 ${className}`}>
      <Link
        to="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        to="/applications"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Applications
      </Link>
      <Link
        to="/loans"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Loans
      </Link>
      <Link
        to="/appointments"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Appointments
      </Link>
    </nav>
  );
}
