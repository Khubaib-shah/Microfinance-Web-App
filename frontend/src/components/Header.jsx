import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold">
          Saylani Microfinance
        </Link>
        <div>
          <Button asChild variant="ghost" className="mr-2">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/register">Register</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
